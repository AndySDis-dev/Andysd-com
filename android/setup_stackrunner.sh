#!/data/data/com.termux/files/usr/bin/bash
set -e

REPO_URL="https://github.com/your-user/stackrunner.git"
WORKDIR="$HOME/stackrunner"

if [ ! -d "$WORKDIR" ]; then
  git clone "$REPO_URL" "$WORKDIR"
fi

cd "$WORKDIR"
cp -r /sdcard/Download/StackRunner/* .

git add .
git commit -m "chore: one-shot push from Android" || true
git push
