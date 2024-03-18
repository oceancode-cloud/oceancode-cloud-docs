# 权限控制

## Permission注解
可在接口或方法上使用注解，如下
```java
@Permission(resourceId = ApiDefConst.J_USER_001_0001, operation = PermissionConst.OPERATION_OR, authorities = {"unlogin",})
```

参数说明：
- resourceId：资源ID，如果用于接口则为接口的编号
- operation: and - 用于检测数组中的元素是否全部满足指定条件, or-用于检测数组中的元素是否满足指定条件
- authorities: 权限列表，login-需要登录，unlogin-游客访问


## 实现PermissionResourceService接口
返回资源对应的权限列表

```java
import com.oceancode.cloud.api.permission.PermissionResourceService;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public class PermissionResourceServiceImpl implements PermissionResourceService {
    @Override
    public Set<String> getAuthorities(String resourceId) {
        return null;
    }
}
```