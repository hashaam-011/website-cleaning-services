# Set environment variables
$env:GIT_AUTHOR_NAME = "hashaam-011"
$env:GIT_AUTHOR_EMAIL = "hashaamkhan975@gmail.com"
$env:GIT_COMMITTER_NAME = "hashaam-011"
$env:GIT_COMMITTER_EMAIL = "hashaamkhan975@gmail.com"

# Run the filter-branch command
git filter-branch -f --env-filter '
if [ "$GIT_AUTHOR_NAME" = "Aghashezi" -o "$GIT_AUTHOR_NAME" = "Shahzad" ]
then
    export GIT_AUTHOR_NAME="hashaam-011"
    export GIT_AUTHOR_EMAIL="hashaamkhan975@gmail.com"
    export GIT_COMMITTER_NAME="hashaam-011"
    export GIT_COMMITTER_EMAIL="hashaamkhan975@gmail.com"
fi
' HEAD