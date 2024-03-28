```code
<template>
  <o-form ref="Form"></o-form>
  <o-space>
    <o-submit-button></o-submit-button>
    <o-submit-button>自定义文本</o-submit-button>
  </o-space>
</template>

<script setup>
import { h } from 'vue'
import { OUsernameIcon,OPasswordIcon } from '@oceancode/ocean-ui'
const Form = ocean.useForm({
  items:[
    {
      prop:'username',
      value:'qjw',
      component:{
        render(){
          return h(ocean.OUsernameInput,{icon:{component:OUsernameIcon,color:'#808695'}})
        }
      },
      rules: {
        required: true,
          message: "请输入登录账号",
      }
    },
    {
      prop:'password',
      component:{
        render(){
          return h(ocean.OPasswordInput,{encode:false,icon:{component:OPasswordIcon,color:'#808695'}})
        }
      },
      rules: {
        required: true,
          message: "请输入登录密码",
        }
      }
    ],
    on:{
      submit(params){
        console.log(params)
      }
    }
})
</script>
```