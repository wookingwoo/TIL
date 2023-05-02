# Redis Docker, 외부 접속 세팅

## redis.conf 파일 생성

``` conf
bind 0.0.0.0
port 6379
```

## Dockerfile 작성

``` dockerfile
FROM redis

COPY redis.conf /usr/local/etc/redis/redis.conf

VOLUME /data

CMD [ "redis-server", "/usr/local/etc/redis/redis.conf" ]
```

컨테이너가 실행되면 내부적으로 redis-server /usr/local/etc/redis/redis.conf 명령 실행하도록 함.

## Build image

``` bash
docker build -t redis-server .
```

## Run container

``` bash
docker run --rm -d -p 6379:6379 --name binredis -v /home/ubuntu/redis_data:/data redis-server
```
