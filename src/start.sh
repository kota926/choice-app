#!/usr/bin/env bash
php artisan migrate --force

# cmdの後もコンテナが実行状態にあるようにするために必要
. /usr/local/bin/docker-php-entrypoint apache2-foreground