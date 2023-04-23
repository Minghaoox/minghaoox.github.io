# 生成静态文件
npm run build

# 进入生成的文件夹
cd build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git branch -m main
git add .
git commit -m 'deploy'

# 与远程库建立连接
git push --set-upstream git@github.com:Minghaoox/mypage.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Minghaoox/mypage.git