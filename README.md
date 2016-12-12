# GIT

初始化一个Git仓库，使用`git init`命令。

使用命令`git add <file>`，注意，可反复多次使用，添加多个文件

使用命令 `git commit -m "说明"`，完成。

`git status` 掌握工作区的状态，`git diff`可以查看修改内容

`HEAD`指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`。

穿梭前，用`git log`可以查看提交历史，以便确定要回退到哪个版本。

要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。
