# micro-frontends（微前端）

基于qiankun从零搭建的一套微前端项目。主应用可自由切换vue、react，微应用包括vue、react17。

## 📚文献资料

[qiankun](https://qiankun.umijs.org/)

[从零搭建微前端项目](https://www.cnblogs.com/lodadssd/p/14426020.html)

[微前端的通信方案](https://www.cnblogs.com/lodadssd/p/14480412.html)

## 🚗启动项目

```
$ yarn microApp:install
$ yarn mainReact:start  主应用是react
$ yarn mainVue:start  主应用是vue
```

Visit `http://localhost:7999`.

## 💪待补充

- react17下组件内部html模板会报“jsx”相关错误；
- 各个微应用共享组件库；
- 子应用在打包时去除公用基础模块；
- 项目分开部署，包括测试、上线；
