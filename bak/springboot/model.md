# 数据模型
对数据表，接口请求，参数等做的高度抽象描述。

## 特点
1. 数据模型：生成数据库访问接口
2. 接口模型：生成接口
3. 参数/实体：生成函数、缓存等访问接口

## 模块路径
`模块开发>模型列表`

## 属性列表
- 类型：不同种类的模型
- 模型名称：模型显示名称
- 唯一ID：模型的ID，类似Java类名，C的结构体名称等。
- 父模型：对父模型的继承
- 数量级：数据模型描述数据量级别
- 模型映射名：数据模型中可对数据表的名称做映射，如模型User可对应数据库中的表`t_user`

### 公共表
数据表的公共表，即对数据表公共字段的提取和关联数据源。

- 每个公共表可关联一个数据源
- 对数据表公共字段的提取，数据表通过继承获得相关的属性字段

> 使用规范,常用名命为：<br>
> BaseIdDomain：仅包含主键id的一个公共模型<br>
> BaseTimeDomain: 包含`id`,`createdAt`(创建时间),`updatedAt`(更新时间)的一个公共表 <br>
> BaseProjectDomain: 包含`id`,`createdAt`(创建时间),`updatedAt`,`projectId`的一个公共表


### 数据表
对应数据库的表

- 业务字段支持，创建时间(createdAt),更新时间(updatedAt) 在新增和修改是自动填充和更新
- 软删除支持，在查询和新增等crud操作时自动处理
- 数据隔离支持，支持以租户(tenantId),工作区(projectId),用户(userId)的数据隔离，即在对应crud操作时自动增加对应条件
- 敏感字段处理，在crud等批量操作或存在安全风险的操作中做一些特殊的处理。
- 自动异常处理，在对应crud操作时，如不存在，操作失败，自动抛出相关异常在api层统一处理成对应的错误码和信息。
- 生成持久层访问相关的接口和实现，如Service,Repository,Mapper
- 根据关联的数据源生成对应的访问sql
- 可定制化的接口，即可移除或选择相关的扩展方法，也可通过自定义sql实现对数据的访问。
- 一个模型定义，即可实现对数据层的访问，不限于数据库,Mongdb或Redis,Es等各种数据存储中间件


### 枚举(标准)
枚举类型，对应Java的枚举类，提供一种标准的枚举访问方式，可用于数据表和其他模型的字段应用。

- 自动系列化和反序列化处理。
- 可被其他模型引用
- 提供常用转换方法
- 支持字符串或数字类型的value值

### 实体
数据模型和接口模型的中间模型，通常用于业务层序逻辑的中间处理所需要的参数传递。

- 可被序列化，持久化
- 提供安全校验，在缓存，序列化时提供铭感数据等校验。
- 可被数据模型，接口模型引用
- 被数据模型引用时，自动处理序列化、反序列化，以Json格式存储在数据库中

### 参数
一个参数列表，可用于函数的入参列表。

### 请求参数
接口的入参模型，用于接受接口的参数请求

- 提供入参校验
- 可配合前端生成表格

### 响应模型
接口的返回数据模型，用于接口数据的返回。

- 可配合前端生成表格组件