# react-digitalClock(数字时钟屏保)

> react, webpack构建

## 项目结构 ##

```
.
├── mock  ----------------------------- 本地mock配置文件
├── abc.json  ------------------------- 项目构建配置文件
├── package.json  --------------------- 项目配置
├── README.md  ------------------------ 说明文件
├── build  ---------------------------- 构建代码文件
├── config  --------------------------- 构建配置文件
├── index.html  ----------------------- 入口页面
└── src  ------------------------------ 源码目录
    ├── assets  ----------------------- 项目资源文件目录（图片、字体等）
    ├── components  ------------------- 业务模块集合目录（组件）
    ├── fetch  ------------------------ ajax请求管理文件
    ├──   └── api  -------------------- 请求配置 (axios ajax配置管理文件)
    ├── pages  ------------------------ 页面集合目录
    ├── reducers  --------------------- redux文件目录
    ├── App.js  ----------------------- react公共配置文件
    └── main.js  ---------------------- 项目级入口配置文件
```

## 环境准备

``` bash
# 安装依赖
npm install || yarn install

# 启动本地调试 localhost:8080
npm run dev || yarn dev

# 本地打包压缩
npm run build || yarn build

# 生成page文件
npm run init page `name` # 配置发生改变暂不可用

# 生成component文件
npm run init component `name` # 配置发生改变暂不可用
```
## 反代理配置

本地代码想要访问测试环境接口可以通过以下配置
`/config/index.js` 
``` bash
dev: {
  proxyTable: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: {'^/api': ''}
    }
  }
}
```

## 本地ajax mock 配置

可以直接返回一段json例如
`/mock/users/user.json` 

``` bash
{
  "code|1": [0, 0, 0, 0, 1],
  "data": {
    "list|10": [
      {
        "id|+1": 1,
        "name": "@name",
        "age|20-30": 1,
        "email": "@email",
        "date": "@date"
      }
    ]
  }
}
```

也可以写业务代码自定义返回参数
`/mock/users/user.js` 

``` bash
module.exports = function (req) {
  const uid = req.query.uid;

  if (!uid) {
    return {
      code: -1,
      msg: 'no uid',
    }
  }

  return {
    code: 0,
    data: {
      "uid": +uid,
      "name": "@name",
      "age|20-30": 1,
      "email": "@email",
      "date": "@date",
    },
  };
};
```

引入以上配置在`config/mock.js`文件中添加配置
``` bash
module.exports = {
    'GET::/api/1.json': 'mock::/users/list.json',
    'GET::/test/2.json': 'mock::/users/user.js',
}
```
注：数据mock优先级低于反代理配置同父级，目录会被覆盖

## 引入新的页面

页面统一在`/src/pages`目录中添加<br/>
同事当项目无限大的时候通过router一次性加载全部的页面需要用户非常大耐心<br />
所有我们在代码中统一使用router按需加载配置，在`routes.js`添加page使用如下方式
``` bash
{
    path: '/',
    component: loadableHandler(() => import('./pages/home'))
}
```
命令生成page，routes会自动加入该配置

## 自定义模块组件

页面和组件分开目录编写有益于代码维护，自定义组件或业务公共模块统一在`/src/components/`目录开发结构可与pages相同

## 开发所需技术

* typescript      javascript的超集，扩展javascript的语法
* react           主要架构
* redux           状态管理工具
* react-i18next   国际化插件
* react-router    react路由插件
* axios           ajax异步请求插件   
* css-modules     css模块工具适合react样式开发
* sass            css预处理结合css-modules

## react-i18next国际化

项目已添加国际支持 <br/>
详细情况 https://github.com/i18next/react-i18next

``` bash

@button-primary-bg-color: #ea2f2f;
@button-primary-active-bg-color: #da2f2f;

```