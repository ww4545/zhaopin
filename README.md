**总页面**
```

```
|文件名|功能类|
|--|--|
|LOGIN |登录页|
|register |注册页|
|info |详细信息注册|
|dashboard |公共页面：用来存放公用头部和底部，中间内容|
|listinfo|列表页：根据不同的type渲染不同的列表|
|msg|消息栏：展示消息数和最新消息|
|msgText|详细信息展示以及聊天功能|
|me|个人中心：展示基本资料和简介|
|img文件夹|存放需要用到的图片|
|layui文件夹|用来存放公共的UI组件|

|packjson|开发功能需要依赖的第三方|
|--|--|
|antd-mobile|蚂蚁金服UI库|
|babel-plugin-import|按需加载需要的第三方plugins|
|less|antd按需加载需要的第三方less|
|less-loader|antd按需加载需要的第三方|
|react-app-rewired|按需加载，改版后已经无法使用了，需要使用customize-cra|
|customize-cra|按需加载核心组件|
|react-router-dom|4.0经过封装的router|
|redux||
|react-redux||
|redux-thunk|异步数据处理工具，|
|redux-devtools-extension|redux数据流查看工具，浏览器需要安装redux插件，查看reactDOM可以下载react插件，推荐使用opera浏览器|
|redux-persist|redux数据持久化工具，防止强制刷新后，store丢失导致页面无法访问，这个数据持久如果细致的做也非常麻烦|
|@babel/plugin-proposal-decoreators|老版本的是（babel-plugin-transform-decorators-legacy）这个是装饰器插件，可以节省代码量，使用前需要配置按需加载|
|Umi|这个是推荐使用的，一个专门配置路由的第三方很强大，不过没有用，哈哈哈|
|axios|ajax请求工具|
|qs|form提交或者数据提交用来格式化上传下载数据|