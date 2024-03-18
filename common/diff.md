# 传统开发 VS OceanCode 开发

开发模式与代码量

<B>传统开发</B> 
1. 基础环境：自己搭建或找个脚手架。
2. 团队维护框架变更，自定义很多工具类以及大量业务无关的配置工具类等。
3. 中间件的引入往往通过自己写工具类实现。
4. 开发者需要编写大量与业务无关，单业务需要用的代码。

<B>Oceancode</B>
1. 选择应用，自动提供一套对应的环境，如SpringBoot应用将提供企业项目中SpringBoot的整体脚手架功能，且框架版本，特性上的差异会自动做兼容处理。
2. 开发者只需要编写业务相关的代码，即实现一个函数即可，团队维护也仅仅只需维护一个函数即可。
3. 中间件引入只需勾选即可，且会生成相关工具类，多租户，多工作区等数据隔离问题。
4. 在性能，数据安全上会做一定支持，如Redis的Big Key分片，防止雪崩，击穿，数据层的JPA方法，SQL性能等。
5. 开发模式上，本地通过插件(Maven plugin等)将生成的代码同步到本地，最终加上函数实现得到一个完整的源码包。


## 迭代维护

<B>传统开发</B>
- 维护业务代码
- 维护SQL
- 维护缓存中间件，以及其他中间件

<B>Oceancode</B>
- 维护业务函数，其他部分会自动生成，如springboot升级导致兼容问题，会自动处理，无需团队来维护。
- 语言框架切换,支持同语言框架切换，业务无感，支持不同语言框架切换，函数需要用对应语言实现一次。
- 提供高性能，高安全的缓存的实现和工具类，如Redis相关工具类支持，数据安全，防止雪崩，击穿，BigKey分片，等。


## JPA支持
<B>传统开发</B>
- 通过Mybatis提供的插件或注解实现，在多组合，多工作区等业务字段不支持。

<B>Oceancode</B>
- 支持不同数据持久层框架，默认Mybaties
- 支持不同数据库的切换，自动生成匹配数据源的SQL
- 支持多组合，多工作区等业务字段的数据隔离。
- 支持部分业务字段的填充,如新增时填充`createdAt(新增时间)`，修改时填充`updatedAt(修改时间)`
- 支持软删除，在CRUD相关接口上做一些处理，保存逻辑正确
- 支持删除某些场景下不适合存在影响性能或安全的接口，如铭感数据表下的全表扫描接口等。
- 数据持久层的Repository方法是统一的，在不同数据源，如ES,Mysql,Mongodb下保持一致性。

## 中间件集成
<B>传统开发</B>
- 项目中维护对应的工具类和链接实现，在安全性，铭感数据，多组合上需自己实现。

<B>Oceancode</B>
- 勾选要使用的中间件，自行适配多租户等业务字段的数据隔离(自动检测是否有使用)，提供高安全性和高性能的工具类方法。


## 统一开发模式
<B>传统开发</B>
- 主要靠项目规定以及代码Review等，做不到完全统一，每个一个coder都有自己的想法。

<B>Oceancode</B>
- 统一的模式，统一的规约，在整体模式上是统一的。


## 开发模型
<B>传统开发</B>
- 经典MVC模式
- 数据层大多使用JPA，部分场景自定义sql

<B>Oceancode</B>
- DDD模式，全部使用模型驱动。通过提供表模型，弱化对数据源的关联。
- 模型提供数据验证，和变更通知机制

## Redis缓存使用
<B>传统开发</B>
- 缓存变更，需自行处理，在数据修改或删除时，关系所有相关缓存的删除。

<B>Oceancode</B>
- 提供多缓存实现方案，Redis,Caffeine等
- 缓存统一接口形式，开发者无需关系具体实现，构建时选择对应的缓存中间件进行打包即可。
- Redis提供安全机制，如防雪崩，击穿BigKey等问题。
- 缓存变更，提供通知机智，更新和删除出发出通知，统一集中处理对应缓存的删除，更好维护。

## Session管理
<B>传统开发</B>
- 自行实现登录session,多租户，多工作区等相关的实现。

<B>Oceancode</B>
- 提供SessionUtil，SessionService默认的方案(单机WebSession,分布式Reids方案)
- 适配接口，需要登录的接口默认拦截，无需单独写代码实现。

- OceanCode使用示例

定义Order(订单)数据模型
- id
- userId:Long(用户ID)
- deleted:Boolean(是否删除)
- status:OrderStatusEnum
- created:Timestamp
- updated:Timestamp

新增
```java
Order order = new Order();
// userId 自动从session上下文获取并填充
// created,updated,deleted自动填充
orderService.repository().addOne(order);

```

用户1(userId=1)根据ID查询
```java
// 对组件会进行校验 必须满足 id>0
// id=1 且userId=1,deleted=false 不存在 直接抛出异常码返回前端，无需再业务逻辑中处理
orderService.repository().findById(1L,true);// orderService.repository().findById(1L)
// id=1 且userId=1且deleted=false不存在 自己处理异常
orderService.repository().findById(1L,false);

//orderService.repository(false) 表示忽略业务字段特性，即满足id=1即可，无需满足userId=1和delete=false
orderService.repository(false).findById(1L,false);
```

用户1(userId=1)根据主键更新
```java
// 查询id=1 且userId=1 且 deleted=false的订单，不存在 抛出异常restfull接口直接抛出订单不存在
Order order = orderService.repository().findById(1L);

// 修改订单属性

// 更新 条件id=1 && userId=1 且delete=false等数据，跟新失败抛出异常，无需特别处理
orderService.repository().updateById(1L)
```