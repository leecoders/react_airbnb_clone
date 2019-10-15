# 마스터 클래스

## DAY1

### 멘탈 관리가 중요해, 즐겨라

### 이번주는 sequelize가 핵심!

### Batch Job

### JWT 기반 인증 -> session 대체 가능

### 검색 기능

- elastic search (DB 구현보다 빠를 수도 있다.)

### GraphQL, Apollo

- React 와 잘 어울림

### JWT

- 임의 변조가 불가능하다.
- ex) admin인지 아닌지 등의 권한 -> 쿠키에 담으면 안됨(쿠키는 클라이언트에서 변조가 가능함)
- 디코딩해서 읽을 수는 있지만 변조가 불가능하기 때문에 사용한다!
- JWT를 통한 회원가입, 로그인, 로그아웃 등의 인증을 구현해도 괜찮은가?
- 장점
  - 세션, 세션 DB 없이 클라이언트에 전부 저장하면 된다.
- 운영 상의 장점
  - 웹 서버가 여러 대가 되어도 세션 공유를 신경쓰지 않아도 된다. -> 개발하기 쉽다.
- 저장 방식
  - 쿠키가 무난하게 많이 사용된다.
- 인증 방식
  - 설정을 마쳤다면 모든 요청에 토큰이 담겨올 것이다.
- 만료
- DB에 있는 값과 토큰이 다를 때 어떻게 처리할 것인가?

### Sequelize

- 공식 문서 정리 잘 되어있다. [링크](https://sequelize.org/master/manual/getting-started)

### Transaction

#### Lost Update Problem

- Lock 없이 트랜잭션을 동시에 실행
- 두 개의 트랜잭션이 동시에 한 아이템의 데이터를 변경했을 때 발생하는 문제점
- 트랜잭션을 지원하는 데이터베이스에서는 발생하면 안됨

#### 트랜잭션에서 발생할 수 있는 문제

- (p1)Dirty Read Problem : 한 트랜잭션에서 변경한 값을 다른 트랜잭션에서 읽을 때 발생하는 문제
- (p2)Non-repeatable Read Problem : 한 트랜잭션에서 같은 값을 두 번 읽었을 때 각각 다른 값이 읽히는 경우
- (p3)Phantom Read Problem : 주로 통계나 분석, aggregation function 등을 수행하는 쿼리에서 잘못된 값이 들어오는 경우

#### Transaction Isolation Level

![Transaction Isolation Level](https://user-images.githubusercontent.com/47619140/66735132-795fa480-eea0-11e9-8ecb-9aedf3aa550c.png)

1. READ UNCOMMITTED : 속도는 엄청 빨라짐
2. READ COMMITTED
3. REPEATABLE READ
4. SERIALIZABLE : 느리지만 어떤 문제도 발생하지 않음

- Isolation Level 확인 및 변경

```sql
SELECT @@GLOBAL.transaction_isolation, @@transaction_isolation;
SET GLOBAL transaction_isolation='REPEATABLE-READ';
SET SESSION transaction_isolation='SERIALIZABLE';
```

- MySQL default: Repeatable Read
