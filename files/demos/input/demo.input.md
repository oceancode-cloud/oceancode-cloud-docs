# 文本输入 Input

很多年前，人们还在用打孔纸卡输入。

## 演示 
```code-demo
<o-demos-doc>
<o-demo-doc title="基础用法" url="./demos/input/basic.demo.md" code-url="./demos/input/basic.code.md"/>
<o-demo-doc title="尺寸" url="./demos/input/size.demo.md" code-url="./demos/input/basic.code.md"/>
<o-demo-doc title="账号输入" url="./demos/input/username.demo.md" code-url="./demos/input/username.code.md"/>
<o-demo-doc title="密码输入" url="./demos/input/password.demo.md" code-url="./demos/input/password.code.md"/>
</o-demos-doc>
```

## 框架支持
| 框架/组件 | 是否支持 | 演示示例 | 官网地址 |
| --- | --- | --- | --- |
|Naiveui|√|-|<a href="https://www.naiveui.com/zh-CN/os-theme/components/input" target="_blank">Link</a>|
|Element-Plus|√|<a href="./demos/input/examples/element-plus.html" target="_blank">Demo</a>|<a href="https://element-plus.gitee.io/zh-CN/component/input.html" target="_blank">Link</a>

## API

### Input Props

| 名称 | 类型 | 默认值 | 说明 | 版本 |
| --- | --- | --- | --- | --- |
| size | `'mini' \| 'small' \| 'medium' \| 'large'` | `'medium'` | 输入框尺寸 |  |
| type | `'text' \| 'password' \| 'textarea'` | `'text'` | 输入框类型 |  |
|encode|`true`|`false\|true`|当配置密码加密插件后，为true时进行加密，仅密码输入组件有效|
|icon|`IconProps`|-|密码、账号输入组件图标|

### Input Slots

| 属性 | 参数 | 说明 | 版本 |
| --- | --- | --- | --- |
| prefix | `()` | 输入框头部内容 |  |