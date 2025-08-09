#!/bin/sh

# Replace environment variables in built files
echo "Replacing environment variables..."

# Find all JS files and replace environment variables
find /usr/share/nginx/html -name "*.js" -exec sed -i "s|VITE_APP_NAME_PLACEHOLDER|${VITE_APP_NAME:-Crypto Exchange}|g" {} +
find /usr/share/nginx/html -name "*.js" -exec sed -i "s|VITE_API_BASE_URL_PLACEHOLDER|${VITE_API_BASE_URL:-https://api.cryptoexchange.com}|g" {} +

# Replace in index.html
sed -i "s|%VITE_APP_NAME%|${VITE_APP_NAME:-Crypto Exchange}|g" /usr/share/nginx/html/index.html

echo "Environment variables replaced successfully"

# Start nginx
exec nginx -g "daemon off;"
