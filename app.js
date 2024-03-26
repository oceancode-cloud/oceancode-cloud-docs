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
    ]
  }
}