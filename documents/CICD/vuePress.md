# vuePress github actions로 자동 배포

github actions를 이용하면 master 푸시를 하는 순간, github에서 자동으로 빌드 및 배포 할 수 있다.

## personal access token 발급

- <https://github.com/settings/personal-access-tokens> 에서 personal access token 발급

# secrets.ACCESS_TOKEN 저장

Settings > Secrets에서  New repository secret 버튼을 클릭

Name은 ACCESS_TOKEN으로 발급받은 token 입력 후 Add secret 버튼을 클릭
