# [Python] in 연산 시간복잡도

## 시간복잡도

자료구조마다 in을 사용할 때 시간복잡도가 다르다는 것이다.

### list, tuple

- Average : O(n)
- 하나하나 순회하기 때문에 O(n)만큼의 시간복잡도를 갖는다

### set, dictionary

- Average : O(1), Worst : O(n)
- 내부적으로 hash를 통해 저장하므로 접근하는 시간은 O(1)이다.
- 해쉬의 충돌이 많아 성능이 떨어지는 경우 O(n)이 걸릴 수도 있다.
