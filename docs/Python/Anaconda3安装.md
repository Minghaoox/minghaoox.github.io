# 🐍Anaconda3安装🐍

🧷本文图片插入方式🧷

```
![alt文本](图片链接 "可选标题")
```

## Anaconda3卸载

1. **完全卸载**，先使用Anaconda自带的卸载程序完成卸载，后删除残余文件夹（**在用户文件夹下有隐藏文件夹**）

2. 卸载之后使用电脑管家清理垃圾，删除Anaconda的注册表信息

3. 于官网下载Anaconda安装包，内含Python，且不同的Anaconda版本对应不同的Python版本

4. 下载完成后给Anaconda分配一个独立的存储文件夹（**必须为空文件夹**）

5. 管理员权限运行安装程序

6. 选择用户时：

   （1）一次尝试选择all users，安装成功；

   （2）三次尝试选择just me，安装失败；

   （3）根据目前查阅到的资料，用户选择可能会影响到下一步的自动添加环境变量，暂时还未尝试过。

7. 目前的计划安装方式

   （1）依然使用最新版本，管理员权限运行；

   （2）用户选择all users；

   （3）不添加环境变量。

8. 目前了解到的问题原因

   （1）卡在分配cache部分：可能是因为之前的Anaconda未卸载干净，导致新的Anaconda在安装时需要重新分配cache等资源，一般等待超过20-30分钟就证明无法安装

   （2）卡在setting up a base...，是自己目前遇到的最多的问题：网上查阅到是因为运行安装程序时没授权管理员权限，但是后来尝试过，管理员权限也存在同样的问题，考虑是不是与前面的用户选择和环境变量有关。

9. 成功安装的过程（7.15  12：30）

   （1）先使用Anaconda自带的卸载程序进行卸载，连同根目录一起删除；

   （2）删除注册表项（电脑管家）

   （3）进入用户盘，有一个.anaconda的隐藏文件夹、.condarc文件，删除

   （4）在官网下载安装包，位数与电脑对应（安装不成功跟安装包位数无关）

   （5）管理员权限运行安装包，这一步非常重要

   （6）用户选择界面勾选all users，因为此前勾选just me均未成功，原因可能是程序没有权限写入环境变量，或者选择手动写入应该也可以

   （7）在setting cache那一步会卡十分钟左右，一直等待就可以，在任务管理器页面观察磁盘写入状态，就能知道安装程序是否是死进程

   （8）安装完成后手动配置环境变量

10. 安装成功后，使用conda指令进行下载的时候，需要管理员权限打开cmd，否则会提示没有写入权限。

## 创建环境的问题

在Pycharm中配置interpreter时，选择conda environment，选择existing environment

### Q1

使用conda指令创建的环境不在anaconda目录下，是因为安装时选择的是all users，会导致使用conda创建的环境默认放在C盘的.conda文件夹下，而且没有interpreter、在Pycharm中也只能找到base的interpreter

   ![Anaconda1](https://raw.githubusercontent.com/Minghaoox/pics/main/Anaconda3/Anaconda1.png)

#### 解决方法1

重装Anaconda，在安装时用户选择just me，这样安装之后创建的环境会自动放到D盘的Anaconda目录下

#### 解决方法2

使用conda create -n *** python==*.* 来创建环境，在最后加上python的版本号，就会在env的对应目录下下载相应Python版本的配套包（环境在使用过程中会不断增加新的依赖，放在系统盘会占用大量空间）

​    ![Anaconda2](https://raw.githubusercontent.com/Minghaoox/pics/main/Anaconda3/Anaconda2.png)

​    ![Anaconda3](https://raw.githubusercontent.com/Minghaoox/pics/main/Anaconda3/Anaconda3.png)

### Q2

放在C盘的环境，在下载包时会报错，原因应该是没有C盘的写入权限

#### 解决方法1

使用base环境

#### 解决方法2

重装Anaconda，用户选just me

  ![Anaconda4](https://raw.githubusercontent.com/Minghaoox/pics/main/Anaconda3/Anaconda4.png)

## 在D盘创建环境的问题已解决

1. 前提是安装Anaconda时用户必须选择Just me

2. 管理员权限打开cmd

3. 创建虚拟环境：conda create -n ****(环境名) python=*.*

4. 删除虚拟环境：conda remove -n ****(环境名) --all

5. 上一步操作只能删掉虚拟环境中的各种包，环境根目录需要手动删除

## 新创建环境在C盘的解决方式

在安装时若用户选择Just me，后期可能会出现环境默认创建在C盘的情况，参照下面的博客进行改正

[解决新创建的anaconda环境在C:\Users\xxx\.conda\envs\，而不在anaconda安装目录下的envs中_anaconda创建的新环境在哪里_半岛铁子_的博客-CSDN博客](https://blog.csdn.net/hshudoudou/article/details/126388686)