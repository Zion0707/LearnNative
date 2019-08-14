# LearnNative
react-native项目记录

该项目创建目的，是为了方便直接拿来用，只是搭建了骨架，应用了react-navigation（页面跳转）、redux（状态管理）、fetch(数据请求)基本功能。只要环境没有问题的话，那该项目就能正常运行在ios和andirod模拟器中。

该react-native版本为 v0.59.2

### 主要代码文件都放在src文件夹里面

### ios启动
$ react-native run-ios

### android启动
$ react-native run-android

### 安卓配置模拟器
$ adb devices //查看连接设备    
$ adb connect 127.0.0.1:5555 //连接网易mumu模拟器   
$ react-native run-android //启动安卓项目

### 浏览器调试地址
http://localhost:8081/debugger-ui/

### 问题解决方案
##### 1、找不到安卓环境变量（安卓环境报错描述）：
SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.
##### 1、找不到安卓环境变量（解决方案）：
https://blog.csdn.net/qq_30613075/article/details/78095156


### 模块实用文章
### 1、react-native redux详解及实战
https://blog.csdn.net/qq_40962320/article/details/85852687

### 2、模拟json在线数据
http://myjson.com/