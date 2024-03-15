# 快速开始

## 模块解释
|  模块  | 作用 |描述  |
|----|  ----  | ----  |
|SpringBoot Parent|版本管理|用于整个模块和框架的版本管理|

## 创建数据源
1. 创建账号
在`后端开发>账号管理`中创建一个账号。

> 账号即代表对资源访问的一种授权，后续所有相关的授权都使用账号统一管理。

这里创建一个Mysql类型的账号(名称为`master`)，填写相关信息并保存。

2. 创建数据源
在`后端开发>数据源`中创建一个Mysql数据源并关联账号`master`

这里创建一个ID为`master`的数据源并关联账号`master`

> 支持多数据源。

## 创建模型表
在`模型开发>模型列表`中新建数据模型。模型在Java中对应Java的Class类。

1. 创建`公共表`
类型选择公共表，填写唯一ID(模型ID)，关联数据源。

> 公共表为数据表的父表，可包含数据表的公共字段以及关联数据源，可创建多个。

这里创建ID为`BaseIdDomain`关联数据源`master`的公共表。属性字段中包含`id`(主键)

2. 创建用户表模型

类型选择`数据表`,唯一ID为(`User`)，父模型选择BaseIdDomain,创建相关的属性。

> 数据表对应一张数据库表，通过继承一个公共表可实现一个数据源中一张表的操作。


## 创建应用
1. 在应用管理中新建`SpringBoot Parent`应用。
此模块主要作用是做版本管理，为顶层应用。

应用名称：描述应用的标题。<br/>
应用ID：应用的目录名称，如example-parent

2. 创建`SpringBoot Core`核心包
此应用主要用于生成公共的模型，如模型，函数接口等。是最核心的一个应用。

- 提供插件扩展

3. 创建`SpringBoot Fat Applicaiton`包
此应用为一个Fat Application，即将所有模型包含到一个应用中，最终可打包为一个fatjar的应用。

> 在微服务中，每个服务只包含与服务相关的模型库，而Fat Application包含所有模块，适用于单机模块。

此应用提供运行入口，运行`AppMain`中的`main`函数可启动整个SpringBoot应用


## 创建服务
在`后端开发>服务列表`中新建用户服务。这里创建一个用户服务。

## 创建接口
1. 在`后端开发>接口开发`中的用户服务分组下创建对应的接口，这里创建一个用户登录接口。

这里定义一个编号为`J_USER_001_0001`,方法名为 `userLogin`的登录接口

2. 在模型中创建一个`UserLoginParam`(请求参数)，字段为 username,和password的模型，密码字段选择特征为密码，会自动做解密操作。
3. 创建一个`UserBaseInfo`(响应参数)，字段为 username,nickname,avatar等用户信息。
4. 创建一个`UserLoginResponse`(响应参数)，字段为token,userInfo等属性，userInfo引用UserBaseInfo
5. 创建一个函数。在函数开发列表中右键新增一个分组（用户模块），新增一个函数模块(UserFunction),创建一个userLogin登录函数。

6. 配置接口`J_USER_001_0001`的输入输出，接口实现，权限等

## 创建函数模块
创建一个`SpringBoot Function`函数模块，此模块为一个函数模板模块,名称为user-function

在SpringBoot Web项目中的配置中的依赖配置，勾选此函数应用。

### 代码生成
在应用管理中，构建所有的应用，下载代码。
如应用名为 example-parent(SpringBoot Parent),example-core(SpringBoot Core),example-web(SpringBoot Web)，user-function（SpringBoot Function）

构建整体应用目录为:
```
|--example-parent
|--example-core(有三个模块)
   |--example-core-model(模型模块)
   |--example-core-function(函数接口模块)
   |--example-core(核心模块)
|--example-web(web应用模块)
|--functions(函数目录)
   |--user-function
```

在user-function中新建一个Impl包和一个UserFunctionImpl实现UserFunction中的userLogin函数
```java
package com.user.function.impl;

import com.oceancode.cloud.common.util.PasswordUtil;
import com.oceancode.cloud.core.domain.User;
import com.oceancode.cloud.core.entity.api.params.UserLoginParam;
import com.oceancode.cloud.core.entity.api.result.UserLoginResponse;
import com.oceancode.cloud.core.function.api.user.UserFunction;
import com.oceancode.cloud.core.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserFunctionImpl implements UserFunction {
    @Autowired
    private UserService userService;

    @Override
    public UserLoginResponse userLogin(UserLoginParam param) {
        // param参数在接口层已经做了对应的校验，此处无需在进行校验
        // 如果用户不存在会自动抛出运行时异常，接口层自动适配错误码，无需在判断user是否为空
        User user = userService.repository().findFieldByUsername(param.getUsername());
        // 不匹配直接抛出异常，可无需用if判断
        PasswordUtil.matches(param.getPassword(), user.getPassword(), true);

        //登录用户逻辑
        return null;
    }
}
```
在spring.factories中配置UserFunctionImpl实现自动注入

> 说明：此函数实现时整个过程中唯一需要些的代码。

将各个包导入到idea中(每个包可通过File->New->Module from Exists...导入到一起)
启动example-web中的AppMain

> 编译时需先install example-parent,example-core,最后打包example-web,其中example-core中的build.sh脚本可自动编译example-parent和example-core模块。


> 后续只需要定义模型，函数和接口，以及函数实现即可