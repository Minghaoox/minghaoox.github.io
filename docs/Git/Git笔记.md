## Git笔记

push为同步文件到远端，pull为拉取远端文件至本地。

下文以正在进行的blog项目为例子，记录git流程。

### 生成静态文件

```powershell
npm run build
# 这一步只针对自己的Docusaurus2项目
```

### 进入生成的文件夹

```bash
cd build
# 进入编译后的项目文件夹
```

### 初始化Git环境

```bash
git init
```

### 切换本地分支

```bash
git branch -m main
# 这里的main代表分支名称，切换到自己需要的分支
```

### 将当前文件夹的所有文件添加至本地仓库

```bash
git add .
# '.'表示所有文件
```

### 提交本地更改

```bash
git commit -m 'deploy'
# 'deploy'为备注,按照自己的需求填写
```

### 发布到GitHub仓库

```
git push -f git@github.com:Minghaoox/minghaoox.github.io.git
```

### 与远程库建立连接并发布

```bash
git push --set-upstream git@github.com:Minghaoox/minghaoox.github.io.git main
# 不知道是不是前面少了哪一步,这条命令的成功率反而更高
```

补充这一条的原因是：在用 `git push -f` 的时候经常出现报错，是因为没有跟远端仓库进行连接，这条指令支持连接远端仓库

### 强制push

```bash
git push --force git@github.com:Minghaoox/minghaoox.github.io.git main
```