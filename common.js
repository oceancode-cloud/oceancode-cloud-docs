function fetchReadme(url,cb){
  fetch(url).then(res=>res.text()).then(data=>cb(marked.parse(data)))
}
const renderer = {
  heading(text, level) {
    return `
            <h${level}>
              ${text}
            </h${level}>`;
  },
  code(text,language){
    console.log(text,language)
    return text
  },
};
marked.use({ renderer:renderer });