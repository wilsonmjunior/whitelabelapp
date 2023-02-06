APP_NAME=$1
ENV=$2

echo "module.exports = {
  APP_NAME: \"$APP_NAME\",
};" > config.js

echo \"$(cat .env.$APP_NAME.$ENV)\" > .env
