# Anaconda3🐍

由于笔记是在重装Anaconda3过程中整理，所以不止包含安装过程。

## 1 Anaconda3卸载及安装🧷

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

## 2 配置镜像源

由于使用conda下载的依赖需要访问外网，在没有代理的情况下，可以配置国内源提供的下载渠道

首先在用户文件夹（ `C:\Users\username` ，将 `username` 更换为自己的用户名）下找到 `.condarc` 文件，这是 `conda` 的配置文件，若没有找到这个文件，将文件夹中“查看隐藏文件”选项打开，若还是没有这个文件，在命令行或者Anaconda prompt中使用如下命令生成

```powershell
conda config --set show_channel_urls yes
```

此时使用记事本打开 `.condarc` 文件，将以下内容复制进去替代原内容。需要注意的是，不同设备、不同Anaconda版本**可能**会存在不同的镜像源配置，这一点是之前偶然发现的，例如我自己只能使用 `http` 源，而有些人可以使用 `https` 源，这是潜在问题的排查方式之一

```
channels:
  - defaults
show_channel_urls: true
default_channels:
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud

# envs_dirs:
#  - D://Anaconda3//envs
```

这里可以注意一下上面代码内容中的 `envs_dirs` 属性，下文创建环境（遇到问题）时会用到。

## 3 创建环境

### 3.1 作用

Anaconda本质上是一个集成环境，除了Python支持外，还包括众多Python项目中经常使用的依赖、编程支持等（如NoteBook）。如果了解过足够多的资料就会知道，电脑配置Python环境其实只需要一个很小很独立的包就可以完成，但这样的配置方式会导致在本地编程时，只能通过命令行操作，对编程人员的能力要求较高。

所以大多推荐新手安装Anaconda集成环境来开始Python编程的学习（VScode也是一种方便、易上手的Python编程方式）

### 3.2 创建流程

（1）在命令行或者Anaconda Prompt中创建环境

```powershell
conda create -n 'envname' python='py.version'
```

![image-20230426175519712.png](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/image-20230426175519712.png)

其中 `envname` 为环境名称， `py.version` 为想配置的环境的Python版本

### 3.3 创建成功

![环境创建1](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/%E7%8E%AF%E5%A2%83%E5%88%9B%E5%BB%BA1.png)

在保证镜像源配置正确（或使用代理）的前提下，这里的下载都会成功，提示如下

![环境创建成功](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/%E7%8E%AF%E5%A2%83%E5%88%9B%E5%BB%BA%E6%88%90%E5%8A%9F.png)

此时即代表环境创建成功

### 3.4 问题及解决方法

**问题**

创建环境时可能会遇到创建的环境在系统盘下的情况

![环境在C盘示例](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/环境在C盘示例.png)

**原因**

创建conda环境时没有找到anaconda安装目录下的 `envs` 路径,一般为节省系统盘的空间，要保证创建的环境在D盘

**解决方法**

找到上文中提到的 `.condarc` 文件，用记事本打开，在其末尾添加如下内容

```
envs_dirs:
  - E://Env//anaconda//envs
```

其实上文给出的配置已经提到这一点，记得将路径更改为自己的对应路径

此时再创建环境，发现还是在C盘的目录中，但是通过如下命令查看的话

```powershell
conda config --show
```

看到配置已经生效，如下图所示：

![envs配置生效](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/envs%E9%85%8D%E7%BD%AE%E7%94%9F%E6%95%88.png)

![envs配置生效2](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/envs%E9%85%8D%E7%BD%AE%E7%94%9F%E6%95%882.png)

所以未能在配置路径下成功创建环境的问题原因是文件访问权限问题，需要给envs目录设置权限

右击 `envs` ，选择属性

![为envs设置权限](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/%E4%B8%BAenvs%E8%AE%BE%E7%BD%AE%E6%9D%83%E9%99%90.png)

依次进行如下操作：安全---->编辑---->Users---->全选Users的权限---->确定

![envs权限更改](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/envs%E6%9D%83%E9%99%90%E6%9B%B4%E6%94%B9.png)

此时就添加好了权限，创建的环境的路径也已经添加，重新再创建环境，发现已经不在C盘，而在我们自定义的anaconda的安装目录下了。如下图所示

![环境路径修改成功示例](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/%E7%8E%AF%E5%A2%83%E8%B7%AF%E5%BE%84%E4%BF%AE%E6%94%B9%E6%88%90%E5%8A%9F%E7%A4%BA%E4%BE%8B.png)

**问题解决**

## 4 使用环境

### 4.1 激活环境

创建环境成功后，根据命令行提示可以使用如下命令激活环境，在命令行或Anaconda Prompt中均可

```powershell
conda activate 'envname'
```

 `'envname'` 为环境名

![激活环境](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/%E6%BF%80%E6%B4%BB%E7%8E%AF%E5%A2%83.png)

当用户名前面显示环境名时，代表已经激活当前环境，可以进行环境内操作

如果忘记自己创建的环境名，使用如下命令查看现有所有环境

```powershell
conda env list
```

![查看现有环境](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/%E6%9F%A5%E7%9C%8B%E7%8E%B0%E6%9C%89%E7%8E%AF%E5%A2%83.png)

各个conda环境都是独立的，环境内的操作互不影响，所以建议为不同需求的项目创建不同环境，且要尽量避免在 `base` 环境下操作

### 4.2 退出环境

环境使用结束或需要更换环境时，使用如下命令

```powershell
conda deactivate 'myenv'
```

### 4.3 删除依赖

如果错误安装了某一个依赖，可以使用如下命令删除

```powershell
# 先激活环境
conda activate 'myenv'
# 再把这个环境下的my_dependency删除
conda remove 'my_dependency'
```

### 4.4 删除环境

如果环境不再使用，为释放内存空间，可以直接删除整个环境

```powershell
conda remove -n 'myenv' --all
```

**注意**这是删除整个子环境，而不是某一个依赖。此外，在某些情况下此操作只能删掉虚拟环境中的各种包，环境根目录需要手动删除

## 5 在Pycharm中使用conda环境

### 5.1 创建项目

这一部分比较简单，可以先看5.2中的操作

新建项目后现选择项目保存位置，后选择先前配置的解释器，在此选择现有的解释器

![创建项目时配置环境](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE%E6%97%B6%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83.png)

完成后点击创建即可

### 5.2 已有项目

打开已有项目时也可以为项目配置本地已有环境

打开Pycharm设置，不同版本Pycharm可能打开方式不同，但都大同小异，另外Pycharm现已支持使用扩展汉化包，不用再去下载第三方汉化包手动汉化（其实汉化后可能存在诸多直译带来的问题，建议英语基础好的不要汉化）。

![Pycharm设置](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/Pycharm%E8%AE%BE%E7%BD%AE.png)

在设置中选择Project，打开Python interpreter

![设置Python解释器](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/%E8%AE%BE%E7%BD%AEPython%E8%A7%A3%E9%87%8A%E5%99%A8.png)

初次使用本地环境时，需要手动添加一下，点击右侧的Add Interpreter添加解释器，选择添加本地解释器

![添加本地解释器](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/%E6%B7%BB%E5%8A%A0%E6%9C%AC%E5%9C%B0%E8%A7%A3%E9%87%8A%E5%99%A8.png)

左侧选择Conda环境，右侧配置一下Conda可执行文件的位置，按照图中目录寻找即可，很好找。在下方选择使用现有环境，此时Pycharm会自动加载出本地的所有现有环境，

![环境选择](https://cdn.jsdelivr.net/gh/Minghaoox/pics@main/typora-pics/%E7%8E%AF%E5%A2%83%E9%80%89%E6%8B%A9.png)

在此处选择自己所需要的环境后点击右下角的确定，即完成配置环境

