## npm run build出现warning

### warning内容

> ```npm
> npm run build
> 
> > meoo-space@0.0.0 build
> > docusaurus build
> 
> 
> [INFO] [zh-Hans] Creating an optimized production build...
> [WARNING] Error: Failed to retrieve the git history for file "D:\MyInterestProjs\meoo.space-main\docs\hackfun\hackfun.md" with exit code 128: fatal: your current branch 'master' does not have any commits yet
> 
> [WARNING] Error: Failed to retrieve the git history for file "D:\MyInterestProjs\meoo.space-main\docs\notes\notes.md" with exit code 128: fatal: your current branch 'master' does not have any commits yet
> ...（有多少个md就会有多少报错，也可能不仅仅是md文件）
> ```

这个错误提示表明在执行 **npm run build**的过程中，**docusaurus** 需要访问 Git 历史记录，但是因为当前分支（branch，GitHub默认的branch为main，但是本地默认可能是master，这一点记得检查）没有任何提交记录，所以无法获得 Git 历史记录。

------

**这可能是因为项目是一个全新的项目**，或者在一个空的分支上进行工作

### 😶‍🌫️解决方法

1. 进入项目目录，使用以下命令创建一个新分支：

```bash
git checkout -b new-branch
```

将‘new-branch’换为自己想要创建的branch名称。

2. 将要提交的文件添加到Git中，并进行提交：

```bash
git add .
git commit -m "Initial commit"
```

在上面的命令中，**git add .**将添加所有文件到Git中，**git commit -m "Initial commit"** 将提交所有更改，并创建一条提交记录，消息为**Initial commit**。

3. 切换回主分支，并将新分支合并到主分支中：

```bash
git checkout master
git merge new-branch
```

在上面的命令中，`git checkout master` 将切换回主分支，`git merge new-branch` 将将新分支合并到主分支中。

4. 最后，尝试再次运行 `npm run build` 命令，看看是否还会出现相同的错误。（经测试，上述错误已不再出现）



### 后续测试

因为上面的解决方案（From ChatGPT）主要思想是将自己的更改提交到Git中（这里应该是本地库的意思），所以在保证本地存在一个库（即解决方案中的`1`）的前提下，先尝试`git add .`，后提交`git commit -m "description"`。

经验证上述思路正确。