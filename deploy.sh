#!/bin/sh

echo "🚚 Dploying application"

echo "⬇️ Updating base code: main branch"

git pull

echo "📦 Installing Npm dependencies"

npm install

echo "🏗️ Compiling assets"

npm run build:prod

echo "🎉 Deployed application"
