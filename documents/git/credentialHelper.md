# Credential.helper

## Cache

Git 작업 시 사용자 이름과 암호를 반복 입력하는 불편함을 피하기 위한 유용한 기능입니다.

 cache credential helper를 활성화하려면 다음 명령을 실행하세요:

```bash
git config --global credential.helper cache
```

활성화한 후에는 자격증명이 15분 동안 메모리에 저장됩니다. 시간 제한을 늘리려면 다음 명령을 사용하세요:

```bash
git config credential.helper 'cache --timeout=3600'
```

이렇게 하면 자격증명이 3600초 또는 1시간 동안 캐시됩니다.

## Store

사용자 이름과 암호를 디스크에 저장하고 싶을 때 유용합니다.

저장 자격증명 도우미를 활성화하려면 다음 명령을 실행하세요:

```bash
git config --global credential.helper store
```

한 번 활성화하면 로그인 정보가 자동으로 저장되어 다시 묻지 않게 됩니다. 저장된 로그인 정보는 `~/.git-credentials` 파일에 저장됩니다.

## Keychain

더 안전한 자격증명 저장을 원한다면 OS에서 지원하는 Keychain 시스템을 사용할 수 있습니다. Mac과 Windows에서 약간 다른 방법을 사용합니다.

### Mac

Mac에서 Keychain을 사용하려면 다음 명령을 실행하세요:

```bash
git config --global credential.helper osxkeychain
```

Keychain을 관리하려면 다음 단계를 따르세요:

1. 런치패드 -> 기타(폴더) -> 키체인 접근
or
2. 파인더 -> 응용 프로그램 -> 유틸리티 -> 키체인 접근.app 실행

Keychain 접근에서 '인터넷 암호' 아래에서 'github.com' 항목을 수동으로 찾아 삭제하면 저장된 자격증명이 제거됩니다.

그 후에 Git 사용자 정보를 새로운 자격증명으로 업데이트하세요:

```bash
git config --global user.name "YourUserName"
git config --global user.email "YourGitHubEmail@example.com"
```

원격 리포지토리에 푸시할 때 새로운 자격증명을 입력하라는 메시지가 표시됩니다. 성공적인 푸시 이후에 Keychain은 새로운 계정 정보를 자동으로 저장합니다.

### Windows

Windows에서 Windows 자격증명 관리자를 사용하려면 다음 명령을 실행하세요:

```bash
git config --global credential.helper wincred
```

Windows "자격증명 관리자"에서 등록된 정보를 관리할 수 있습니다. 원격 리포지토리의 암호나 토큰을 업데이트했다면 이전 자격증명을 삭제하고 새 자격증명을 추가해야 합니다.

---