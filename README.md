# myNative
react-native项目记录

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
##### 问题1：
SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.
##### 问题1解决方案：
https://blog.csdn.net/qq_30613075/article/details/78095156