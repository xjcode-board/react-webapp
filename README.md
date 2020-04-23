## 项目基于[Create React App](https://github.com/facebook/create-react-app).纯净版未eject暂不支持任何UI框架

## 

在项目中，你可以执行:

### `yarn start`

开发模式启动本地服务.<br />
打开浏览器访问 [http://localhost:3000](http://localhost:3000).

### `yarn test`

在交互式监视模式下启动测试运行程序.<br />
详见 [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `yarn build`

打包构建将生产应用程序生成到`build`文件夹.<br />

```
yarn build:test   //自定义测试环境
yarn build:pre   //自定义预发布环境
yarn build:pro   //自定义正式环境

```
 
### 关于项目

1. components文件夹里面包含常用自定义组件

    例如：toast (仿照antd)
```
        Toast.info("hello") //文字提示toast
        Toast.loading("加载中...",0, () => {}) //加载loading
```
2. .env-cmdrc.json文件中可配置自定义环境变量




 
