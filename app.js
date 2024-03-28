const { ref } = Vue;
function fetchReadme(url,cb){
  fetch(url).then(res=>res.text()).then(data=>cb(marked.parse(data)))
}

function main(){
  return {
    menuOptions:[
      {
        label:'通用组件',
        type:'group',
        children:[
          {
            label:'按钮',
            key:'button',
            url:{
              url:'./files/button.html'
            },
            value:{}
          }
        ]
      },
      {
        label:'数据录入组件',
        type:'group',
        children:[
          {
            label:'文本输入',
            key:'text-input',
            url:{
              url:'./files/input.html'
            },
            value:{}
          }
        ]
      },
    ]
  }
}