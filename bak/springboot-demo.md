# SpringBoot示例

## 接口生成示例

- 支持权限控制
- 调用具体函数
- 统一封装返回结构
- 统一处理错误码和返回码
- 支持接口文档生成
```java
    /**
     * J_USER_001_0001 用户登录
     *
     * @return Object
     */
    @Permission(resourceId = ApiDefConst.J_USER_001_0001, operation = PermissionConst.OPERATION_OR, authorities = {"unlogin",})
    @org.springframework.web.bind.annotation.PostMapping(CommonConst.API_PREFIX + ApiDefConst.J_USER_001_0001)
    public Object userLogin(@org.springframework.web.bind.annotation.RequestBody com.oceancode.cloud.core.entity.api.params.UserLoginParam param) {
        Object resultTemp = ComponentUtil
                .getFunction(com.oceancode.cloud.core.function.api.user.UserFunction.class)
                .userLogin(param);
        return ResultData.isOk(resultTemp);
    }
```



## 接口模型生成
输入模型

- 支持参数校验
- 支持文档生成
- 支持加解密

```java
/**
 * <B>UserLoginParam</B>
 *
 * <p>
 * This class is a Input which is api input parameters.
 * </p>
 *
 * @author Dynamic Gen
 * @since 1.0
 */
public class UserLoginParam implements Validator {
    /**
     * 登录密码
     */
    private String password;

    /**
     * 登录账号
     */
    private String username;

    @Override
    public void validate() {
        CheckApiParamUtil.checkString(password, 32, "password", true);
        CheckApiParamUtil.checkString(username, 32, "username", true);
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}

```

返回模型

```java
/**
 * <B>UserLoginResponse</B>
 *
 * <p>
 * This class is a Output which is output parameters.
 * </p>
 *
 * @author Dynamic Gen
 * @since 1.0
 */
public class UserLoginResponse implements Transferable {
    /**
     * 工作区
     */
    private Long projectId;

    /**
     * token
     */
    private String token;

    /**
     * 用户登录信息
     */
    private UserBaseInfo userInfo;

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public UserBaseInfo getUserInfo() {
        return userInfo;
    }

    public void setUserInfo(UserBaseInfo userInfo) {
        this.userInfo = userInfo;
    }

}
```

## 函数接口生成

- 支持文档生成
- 支持函数定义生成
- 支持入参校验


```java
public interface UserFunction extends RemoteFunction {
    /**
     * 用户登录
     *
     * @param password 登录密码
     * @param username 登录账号
     * @return UserLoginResponse UserLoginResponse
     */
    com.oceancode.cloud.core.entity.api.result.UserLoginResponse userLogin(com.oceancode.cloud.core.entity.api.params.UserLoginParam param);
}
```

调用用户实现，如没有实现 通过springboto 提示循环引用错误提示用户需实现。
```java
/**
 * <B>UserFunction</B>
 * <p>The {ctx.value.filename()} interface of implements class.</p>
 *
 * @author Dynamic Gen
 * @since 1.0
 */
@javax.annotation.Generated(
        value = "by tool generated (version 1.0.0)",
        comments = "Auto Generated"
)
@Primary
@Component
public final class DefaultUserFunctionImpl implements UserFunction {
    @Resource
    private UserFunction _customerRemoteFunction;

    /**
     * 用户登录
     *
     * @param password 登录密码
     * @param username 登录账号
     * @return UserLoginResponse UserLoginResponse
     */
    @Override
    public com.oceancode.cloud.core.entity.api.result.UserLoginResponse userLogin(com.oceancode.cloud.core.entity.api.params.UserLoginParam param) {
        param.validate();
        return _customerRemoteFunction.userLogin(param);
    }
}
```

开发者在自己的函数模块中实现
```java
@Component
public class UserFunctionImpl implements UserFunction {
    @Autowired
    private UserService userService;

    @Autowired
    private SessionService sessionService;

    @Override
    public UserLoginResponse userLogin(UserLoginParam param) {
        // param参数在接口层已经做了对应的校验，此处无需在进行校验
        // 如果用户不存在会自动抛出运行时异常，接口层自动适配错误码，无需在判断user是否为空
        User user = userService.repository().findFieldByUsername(param.getUsername());
        if (!UserStatus.NORMAL.equals(user.getStatus())) {
            throw new BusinessRuntimeException(CommonErrorCode.USERNAME_OR_PASSWORD_INVLAID);
        }
        // 不匹配直接抛出异常，可无需用if判断
        PasswordUtil.matches(param.getPassword(), user.getPassword(), true);
        TokenInfo tokenInfo = TokenUtil.createToken(user.getId());

        UserLoginResponse userLoginInfo = UserLoginResponses
                .newUserLoginResponse()
                .withToken(tokenInfo.getToken())
                .withUserInfo(UserBaseInfoes.newUserBaseInfo()
                        .withUsername(user.getUsername()).get())
                .withProjectId(user.getDefaultProjectId())
                .get();
        userLoginInfo.setProjectId(user.getDefaultProjectId());

        com.oceancode.cloud.api.session.UserBaseInfo userBaseInfo = new UserBaseInfo();
        userBaseInfo.setUserId(user.getId());
        userBaseInfo.addParam("userId", user.getUserId())
                .addParam("username", user.getUsername())
                .addParam("nickname", null);
        sessionService.setUserInfo(tokenInfo.getSessionId(), userBaseInfo);
        return userLoginInfo;
    }
}
```

## Service代码生成
- 提供数据隔离和非数据隔离实现，根据需要调用，默认时带数据隔离的(如果有)，仅一个入参区别，使用方式完全一样。

```java
/**
 * <B>UserService</B>
 *
 * <p>
 * This class is a Service that can be called.
 * </p>
 *
 * @author Dynamic Gen
 * @since 1.0
 */
public interface UserService {
    /**
     * get UserRepository instance
     * <p>You can this method directly to call UserRepository,rather than direct call UserRepository.</p>
     *
     * @return {@link UserRepository}
     */
    UserRepository repository();

    /**
     * get UserRepository instance
     * <p>You can this method directly to call UserRepository,rather than direct call UserRepository.</p>
     *
     * @param useBusinessRepository if true then autofill projectId, userId, tenantId and so on else non-auto fill.
     * @return {@link UserRepository}
     */
    UserRepository repository(boolean useBusinessRepository);
}
```

## Repository 代码生成
- 支持多数据源
- 支持多租户，多工作区，软删除，字段填充等功能

```java
/**
 * <B>UserRepository</B>
 *
 * <p>
 * Generic interface that defines the Domain(User) common to all.
 * </p>
 *
 * @author Dynamic Gen
 * @since 1.0
 */
public interface UserRepository {
    /**
     * find one record by primaryKey from table(user).
     *
     * @param id primaryKey
     * @return if it is successful return User object else return null
     */
    User findById(Long id, boolean throwEx);
    User findById(Long id);

    User findFieldByUsername(String username);

    User findFieldByUsername(String username, boolean throwEx);

    default boolean existsFieldByUsername(String username) {
        return existsFieldByUsername(username, false);
    }

    boolean existsFieldByUsername(String username, boolean throwEx);

    /**
     * find records by primaryKeys from table(user).     * <p>
     * The following fields will not be returned in the result set</p>
     * <ol>
     * <li><B>password</B> sensitive field</li>
     * </ol>
     *
     * @param ids primaryKeys
     * @return if it is successful return List<User> object else return empty list.
     */
    List<User> findByIds(Set<Long> ids);
    List<User> findByIds(Set<Long> ids, boolean throwEx);

    List<User> findByIds(Long id, Long...ids);

    /**
     * insert one record to table(user).
     *
     * @param entity User object
     * @return if it is successful return 1 else return 0
     */
    boolean addOne(User entity);
    boolean addOne(User entity, boolean throwEx);

    /**
     * delete one record by primaryKey from table(user).
     *
     * @param id primaryKey
     * @return if it is successful return 1 else return 0
     */
    boolean deleteById(Long id, boolean throwEx);
    boolean deleteById(Long id);

    /**
     * update one record based on non-empty fields from table(user).
     *
     * @param entity User object
     * @return if it is successful return 1 else return 0
     */
    boolean updateById(User entity);

    boolean updateById(User entity, boolean throwEx);

    boolean updateBatchById(List<User> list);

    boolean updateBatchById(List<User> list, int batchSize);

    boolean existsById(Long id);

    boolean existsByIds(Set<Long> ids);

    /**
     * manual transaction control.
     * <p>you can use it to control transaction,when an abnormality occurs happen,it can auto rollback </p>
     *
     * @param actionCallback commit logical
     * @param rollback       rollback when an abnormality occurs happen.
     * @param <T>            data type that you expected.
     * @return T object
     */
    <T> T transaction(ActionCallback<T> actionCallback, Rollback<T> rollback);

    <T> T transaction(ActionCallback<T> actionCallback, Rollback<T> rollback, boolean throwEx);

    /**
     * manual transaction control.
     * <p>you can use it to control transaction,when an abnormality occurs happen,it can auto rollback </p>
     *
     * @param actionCallback commit logical
     * @return T object
     */
    <T> ResultData<T> transaction(ActionCallback<ResultData<T>> actionCallback);

    <T> ResultData<T> transaction(ActionCallback<ResultData<T>> actionCallback, boolean throwEx);

}
```

## 模型工具类生成
- 为模型生成对应的Builder模式
- 提供通知机制
- 提供缓存或锁机制

```java
public final class Projects {
    private Projects() {
    }

    public final static class Notifier {
        public static void applyAll(NotifierType notifierType, Project oldValue, Project newValue) {
            ComponentUtil.getNotifiers(Project.class.getName())
                    .forEach(notifier -> notifier.notifier(notifierType, oldValue, newValue));
        }

        public static void applyUpdate(Project model) {
            applyAll(NotifierType.UPDATE, null, model);
        }

        public static void applyDelete(Project model) {
            applyAll(NotifierType.DELETE, null, model);
        }
    }
    public final static class Lock {
        public static void userProjectUpdateLock(Long id, long _timeout, LockActionCallback _actionCallback) {
            if (ValueUtil.isEmpty(id)) {
                throw new BusinessRuntimeException(CommonErrorCode.SERVER_ERROR, "id is required.");
            }
            CacheKey cacheKey = KeyParam.of("user-project-update-lock")
                    .addParam("id", id)
                    .next();
            ComponentUtil.getBean(com.oceancode.cloud.core.service.ProjectService.class).repository().transaction(() -> {
                ComponentUtil.getBean(LockService.class)
                        .tryLockWith(cacheKey, _timeout, _actionCallback);
                return null;
            });
        }

        public static void userProjectUpdateLock(Long id, LockActionCallback actionCallback) {
            userProjectUpdateLock(id, 4000L, actionCallback);
        }
    }

    public static Builder newProject() {
        return new Builder();
    }

    public final static class Builder {
        private Project model;

        private Builder() {
            this.model = new Project();
        }

        public Builder withCreatedAt(Long createdAt) {
            this.model.setCreatedAt(createdAt);
            return this;
        }

        public Builder withCreatedAtIfNull(Long createdAt) {
            if (Objects.nonNull(this.model.getCreatedAt())) {
                this.model.setCreatedAt(createdAt);
            }
            return this;
        }

        public Builder withCreatedAtIfEmpty(Long createdAt) {
            if (ValueUtil.isNotEmpty(this.model.getCreatedAt())) {
                this.model.setCreatedAt(createdAt);
            }
            return this;
        }

        public Builder withDeleted(Boolean deleted) {
            this.model.setDeleted(deleted);
            return this;
        }

        public Builder withDeletedIfNull(Boolean deleted) {
            if (Objects.nonNull(this.model.getDeleted())) {
                this.model.setDeleted(deleted);
            }
            return this;
        }

        public Builder withDeletedIfEmpty(Boolean deleted) {
            if (ValueUtil.isNotEmpty(this.model.getDeleted())) {
                this.model.setDeleted(deleted);
            }
            return this;
        }

        public Builder withDesc(String desc) {
            this.model.setDesc(desc);
            return this;
        }

        public Builder withDescIfNull(String desc) {
            if (Objects.nonNull(this.model.getDesc())) {
                this.model.setDesc(desc);
            }
            return this;
        }

        public Builder withDescIfEmpty(String desc) {
            if (ValueUtil.isNotEmpty(this.model.getDesc())) {
                this.model.setDesc(desc);
            }
            return this;
        }

        public Builder withId(Long id) {
            this.model.setId(id);
            return this;
        }

        public Builder withIdIfNull(Long id) {
            if (Objects.nonNull(this.model.getId())) {
                this.model.setId(id);
            }
            return this;
        }

        public Builder withIdIfEmpty(Long id) {
            if (ValueUtil.isNotEmpty(this.model.getId())) {
                this.model.setId(id);
            }
            return this;
        }

        public Builder withTitle(String title) {
            this.model.setTitle(title);
            return this;
        }

        public Builder withTitleIfNull(String title) {
            if (Objects.nonNull(this.model.getTitle())) {
                this.model.setTitle(title);
            }
            return this;
        }

        public Builder withTitleIfEmpty(String title) {
            if (ValueUtil.isNotEmpty(this.model.getTitle())) {
                this.model.setTitle(title);
            }
            return this;
        }

        public Builder withUpdatedAt(Long updatedAt) {
            this.model.setUpdatedAt(updatedAt);
            return this;
        }

        public Builder withUpdatedAtIfNull(Long updatedAt) {
            if (Objects.nonNull(this.model.getUpdatedAt())) {
                this.model.setUpdatedAt(updatedAt);
            }
            return this;
        }

        public Builder withUpdatedAtIfEmpty(Long updatedAt) {
            if (ValueUtil.isNotEmpty(this.model.getUpdatedAt())) {
                this.model.setUpdatedAt(updatedAt);
            }
            return this;
        }

        public Builder withUserId(Long userId) {
            this.model.setUserId(userId);
            return this;
        }

        public Builder withUserIdIfNull(Long userId) {
            if (Objects.nonNull(this.model.getUserId())) {
                this.model.setUserId(userId);
            }
            return this;
        }

        public Builder withUserIdIfEmpty(Long userId) {
            if (ValueUtil.isNotEmpty(this.model.getUserId())) {
                this.model.setUserId(userId);
            }
            return this;
        }

        public Project get() {
            return this.model;
        }
    }

}
```

## Redis缓存使用
### 数据变更

- 变更处发出通知，无需关注相关删除问题，往往开发者时多人，解耦后更好维护

```java
    @Override
    public void deleteProjectById(Long projectId) {
        projectService.repository().deleteById(projectId);
        Projects.Notifier.applyDelete(Projects.newProject().withId(projectId).get());
    }
```

变更处理

- 统一根据不同情况处理，集中维护所有相关的缓存

```java
@Component
public class NotifierImpl implements Notifier<Project, Project> {

    @Override
    public void notifier(NotifierType notifierType, Project oldValue, Project newValue) {
        if (NotifierUtil.isModify(notifierType)) {
            ListProjectItems.cache().delete();
        }
    }

    @Override
    public String getResourceId() {
        return Project.class.getName();
    }
}
```

### 缓存代码生成
如果存在则查询缓存，否则查询数据源，然后缓存

- ListProjectItems.cache() 时因为配置了缓存key相关配置项在ListProjectItems工具中生成对应的缓存方法。
- 通过工具类提供函数，统一模型，而不是提供key让开发者写相关的代码。

```java
    @Override
    public List<ListProjectItem> listProject() {
        Project query = new Project();
        ListProjectItems.Cache projectCache = ListProjectItems.cache();
        List<ListProjectItem> projectItems = projectCache.getList();
        if (Objects.nonNull(projectItems)) {
            return projectItems;
        }

        List<Project> projects = projectService.repository().findAll(query);
        List<ListProjectItem> list = new ArrayList<>();
        for (Project project : projects) {
            ListProjectItem item = ListProjectItems.newListProjectItem().withId(project.getId()).withTitle(project.getTitle()).withDesc(project.getDesc()).get();
            item.setId(project.getId());
            item.setTitle(project.getTitle());
            item.setDesc(project.getDesc());
            list.add(item);
        }
        projectCache.set(list);
        return list;
    }
```

### 更新变更
更新数据库，删除缓存

- 如配置了锁，则会在对应工具类生成对应锁的代码。
- 锁使用后无需手动释放，可自动释放，避免了忘记释放锁。
- 锁具备可重入性

```java
    @Override
    public void updateProjectById(UpdateProject param) {
        Project project = projectService.repository().findById(param.getId());
        project.setTitle(param.getTitle());
        project.setDesc(param.getDesc());

        Projects.Lock.userProjectUpdateLock(project.getId(), () -> {
            if (ValueUtil.isTrue(param.getDefaultProject())) {
                User user = userService.repository().findById(SessionUtil.userId());
                user.setDefaultProjectId(project.getId());
                userService.repository().updateById(user);
            }
            projectService.repository().updateById(project);
        });

        Projects.Notifier.applyUpdate(project);
    }
```

### 锁配置代码生成
根据配置会生成对应的springboot 配置代码

- 支持多实例链接
- 支持单机或集群配置
- 支持安全性处理，缓存雪崩，击穿，BigKey分片等。

```java
# 给Session使用
oc.cache.user-session-info.key-pattern=session:user:#{#userId}:#{#token}
oc.cache.user-session-info.expire=3600000
oc.cache.user-session-info.source.id=cacheMaster
oc.cache.user-session-info.max-length=10240
oc.cache.user-session-info.expire.random=60000
oc.cache.user-session-info.replica=1

# 缓存项配置
oc.cache.user-project-list.key-pattern=user:#{#userId}:projects
oc.cache.user-project-list.expire=3600000
oc.cache.user-project-list.source.id=cacheMaster
oc.cache.user-project-list.empty.enabled=true
oc.cache.user-project-list.empty.value=nil
oc.cache.user-project-list.empty.expire=60000
oc.cache.user-project-list.expire.random=60000
oc.cache.user-project-list.replica=1
```