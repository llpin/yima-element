# yima-element

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 权限表
只有center 系统 可查询或修改
# 角色表
不同系统 获取的 数据不同

#map key 
复制：shift + alt + 方向键 
代码格式化： alt + shift + f
返回上一个页面： Ctrl + -

center:
  home
    user(center 系统下 查看所有的 用户信息，包括其他系统的用户)
      roleTabs
        base
        admin
        law
        data
        role
        permission
        
props 的type属性 不要用boolean 用Boolean，使用对象写法

##行业：
Center Factory Seller LawFirm
