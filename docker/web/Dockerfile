FROM php:8.2-apache-bullseye

# apt install iputils-ping net-tools で ping を導入
RUN apt-get update \
 && apt-get install -y zlib1g-dev libzip-dev unzip vim iputils-ping net-tools sudo\
 && docker-php-ext-install zip

# node と npm をインストール
RUN apt-get install -y gnupg
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -\
 && apt-get install -y nodejs\
 && npm install npm@10.8.2 --global


# a2emod rewrite をして apache に rewrite モジュールを追加
# これをしないと Laravel でルート以外にアクセスできない
RUN a2enmod rewrite

# docker php には mysql 用のドライバが未インストールのため追加する
RUN docker-php-ext-install pdo_mysql

COPY --from=composer:2.4.1 /usr/bin/composer /usr/bin/composer

ADD docker/web/php.ini /usr/local/etc/php/

# Apache の conf は seites-available に作成し
# a2ensite コマンドでシンボリックリンクを sites-enabled に作成する
ADD docker/web/000-default.conf /etc/apache2/sites-available/
RUN a2ensite 000-default

# COPY ./docker/web/start.sh /var/www/html/start.sh
# RUN chmod 744 ./var/www/html/start.sh

WORKDIR /var/www/html

COPY ./src /var/www/html

RUN chown www-data storage/ -R \
 && composer install\
 && npm install

ARG MYSQL_PASSWORD \
    MYSQL_ROOT_PASSWORD \
    MYSQL_USER \
    MYSQL_DATABASE \
    MYSQL_HOST


ENV COMPOSER_ALLOW_SUPERUSER=1 \
    COMPOSER_HOME=/composer \
    PATH=$PATH:/composer/vendor/bin \
    DB_DATABASE=${MYSQL_DATABASE} \
    DB_USERNAME=${MYSQL_USER} \
    DB_PASSWORD=${MYSQL_PASSWORD} \
    DB_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} \
    DB_CONNECTION=mysql \
    DB_HOST=${MYSQL_HOST} \
    DB_PORT=3306 \
    TZ=Asia/Tokyo

# RUN composer global require "laravel/installer=~11.9"

# RUN npm run production

# RUN chmod -R 775 /var/www/laravel_docker/storage/logs

# ENTRYPOINT ["php", "artisan"]
# CMD ["migrate", "--force"]

CMD ["bash", "start.sh"]