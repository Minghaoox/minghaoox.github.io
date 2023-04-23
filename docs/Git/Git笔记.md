# test
# Git笔记

push为同步文件到远端，pull为拉取远端文件至本地。

下文以正在进行的blog项目为例子，记录git流程。

**生成静态文件**

npm run build

**进入生成的文件夹**

cd build

git init

git branch -m main

git add .

git commit -m 'deploy'

**与远程库建立连接**

git push --set-upstream git@github.com:Minghaoox/mypage.git main

（补充这一条的原因是：在用git push -f的时候经常出现报错，是因为没有跟远端仓库进行连接，这条指令支持连接远端仓库）

**发布到GitHub仓库**

git push -f git@github.com:Minghaoox/mypage.git



**存在问题**

1. 如果远端存在一个现有版本的文件，本地存在远端没有的新增文件的话，会导致push失败；

   解决方法：强制push：git push --force git@github.com:Minghaoox/mypage.git main

2. git push -f无法连接远程仓库的问题始终存在，一直智能使用git push --set-upstream的方式完成push；