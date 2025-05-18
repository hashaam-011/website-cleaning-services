$env:GIT_AUTHOR_NAME = "hashaam-011"
$env:GIT_AUTHOR_EMAIL = "hashaamkhan975@gmail.com"
$env:GIT_COMMITTER_NAME = "hashaam-011"
$env:GIT_COMMITTER_EMAIL = "hashaamkhan975@gmail.com"

git filter-branch --env-filter '
if [ "$GIT_AUTHOR_NAME" = "Aghashezi" ]
then
    export GIT_AUTHOR_NAME="hashaam-011"
    export GIT_AUTHOR_EMAIL="hashaamkhan975@gmail.com"
    export GIT_COMMITTER_NAME="hashaam-011"
    export GIT_COMMITTER_EMAIL="hashaamkhan975@gmail.com"
fi
' -- --all