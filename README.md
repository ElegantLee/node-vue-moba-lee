# node-vue-moba-lee
仿王者荣耀移动端官网，整个项目包括了移动端、后台管理端和服务端，是一个较全面的全栈项目。感谢B站up主—[全栈之巅](https://space.bilibili.com/341919508/video?tid=0&page=1&keyword=&order=pubdate)制作的视频。

项目在线体验地址：

* [前台](https://moba.elegantlee.top/web)
* [后台](https://moba.elegantlee.top/admin/#/items/list)

**项目效果图**

前台：

![image-20220711193134947](https://typora-lee.oss-cn-chengdu.aliyuncs.com/img-typora/20220711193143.png)

后台：

![image-20220711193239347](https://typora-lee.oss-cn-chengdu.aliyuncs.com/img-typora/20220711193241.png)

![image-20220711193318544](https://typora-lee.oss-cn-chengdu.aliyuncs.com/img-typora/20220711193320.png)

---
## 技术栈
**移动端：**
* 前端框架：Vue2+VueRouter；
* UI组件库：ElementUI；
* 网络请求：Axios；
* css预处理语言：sass(最新的一代sass也称为scss)；
* 其他组件：
  * vue-awesome-swiper: 移动端幻灯片滑动组件；
  * dayjs: 日期转换插件；
  

**后台管理端：**
* 前端框架：Vue2+VueRouter；
* UI组件库：ElementUI；
* 网络请求：Axios；
* 原生css；
* 其他组件：
  * vue2-editor: 基于Vue2实现的富文本编辑器组件；
  * cross-env: 消除不同操作系统使用环境变量的差异；

**服务端：**
* JavaScript 运行时环境：Node.js；
* Web框架：Express；
* 数据库：mongodb；
* 反向代理服务器：nginx；
* 开启https：[Let’s Encrypt](https://letsencrypt.org/zh-cn/getting-started/),  [Certbot](https://certbot.eff.org/instructions?ws=nginx&os=ubuntubionic), [snapd](https://snapcraft.io/docs/getting-started)
* 其他依赖库：
  * cors: 用于express的跨域中间件；
  * multer: 一个express的中间件，用于处理 `multipart/form-data` 类型的表单数据，它主要用于上传文件；
  * bcrypt: 一个加密password的库；
  * jsonwebtoken: 生成token的库；
  * http-assert: 使用状态码断言，抛出http请求异常；
  * inflection: 用于字符串转换的库，如大小写等；
  * require-all: 将目录下的所有文件一次引入；
  * multer-aliyun-oss(可选): 配置阿里云OSS；

**全局安装的库：**
* nodemon: 热启动server下的index.js，即自动检查文件更改并重新启动index.js，开发环境下的利器。
* nrm: 快速切换npm镜像源。

**服务器上安装的软件**
* nginx
* pm2: 生产环境下在后台开启服务器端进程，保持进程常驻，功能类似nodemon；
* Certbot, snapd
---
## 启动项目
1. 克隆项目到本地
```bash
gti clone git@github.com:ElegantLee/node-vue-moba-lee.git
```
2. 安装项目依赖
```bash
cd web
npm i
```
```bash
cd admin
npm i
```
```bash
cd server
npm i
```
3. 启动项目
```bash
cd web
npm run serve
```
```bash
cd admin
npm run serve
```
```bash
cd server
npm run serve
```
---
## 实现的主要功能
### 移动端
**功能点：**
  1. 首页轮播图（swiper）；
  2. 精灵图；
  3. 新闻资讯（数据接口+界面展示）；
  4. 英雄列表；
  5. 精彩视频；
  6. 百态王者；
  7. 英雄详情页；

### 后台管理端
**功能点：**
1. 物品管理；
2. 英雄管理；
3. 内容管理（文章，视频）；
4. 运营管理（广告位）；
5. 后台页面管理（侧边栏导航菜单，后台页面）；
6. 权限管理（接口权限，角色）；
7. 分类管理；
8. 管理员管理；
9. 登录与注销；

### 服务端
**功能点：**
1. 通用CRUD接口（符合RESTful架构的API）；
2. JWT登录验证；
3. 图片上传；
4. 用户密码加密；
---
## 前端优化
**CDN** <br>
1. 先通过webpack社区提供的`webpack-bundle-analyzer`分析build后，项目中第三方库文件，插件和组件的引用情况和大小；
2. 对于比较大的JS库、CSS库或Vue插件，使用CDN来引入，减小项目的大小。

**路由懒加载** <br>
webpack提供的代码分离功能，配合动态导入（import）、配置`webpackChunkName`命名chunk实现对不同模块进行代码分割，将同一个路由下的不同子路由打包到一个文件中。在首屏加载时，用到哪个模块再加载哪个模块，实现懒加载进行页面的优化。

---
## References
**参考的其他实现：**

* http://wzry.thainl.xyz/admin/
* https://juejin.cn/post/6844904170839900168

**404页面**

* https://github.com/Kian-404/vue-admin/blob/master/src/views/error/404.vue

**nginx配置**

* 简化配置：https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN
* 使用免费的SSL证书开启HTTPS：
  * https://letsencrypt.org/zh-cn/getting-started/
  * https://certbot.eff.org/instructions?ws=nginx&os=ubuntubionic
  * https://snapcraft.io/docs/getting-started
  

**开发文档**

* [MongoDB 中的关联查询MongoDB : aggregate/lookup 对比 Mongoose : ref / populate](https://blog.csdn.net/sinat_31057219/article/details/119140589)
* [MonGoDB中文手册](https://mongodb.net.cn/manual/reference/operator/aggregation/lookup/)
* [MongoDB 菜鸟教程](https://www.runoob.com/mongodb/mongodb-aggregate.html)