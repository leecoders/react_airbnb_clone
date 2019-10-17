## 알게된 내용

### react의 styled component에서는 정적 이미지 파일을 url로 바로 가져다 쓸 수 없다.
- `import`한 뒤 사용해야 한다.
```javascript
import logo from "../assets/images/logo.png";
...
const Logo = styled.div`
...
background: url(${logoImage}) no-repeat 50% 50%;
`
```

### cross-env
- 코드 내에서 파일 경로 지정을 쉽게 할 수 있다.

### Sequelize CLI를 사용하여 User API 만들기
- [참고](https://velog.io/@jeff0720/Sequelize-CLI%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B0%84%EB%8B%A8%ED%95%9C-User-API-%EB%A7%8C%EB%93%A4%EA%B8%B0-vdjpb8nl0k)

#### ORM
- ORM이란 객체를 관계형 DB에 매핑해 DB의 기능들을 추상적으로 사용할 수 있게 해준다.
- 장점
  - 비즈니스 로직에 집중할 수 있다.
  - 특정 데이터베이스에 대한 종속성이 사라져 데이터베이스가 바뀌는 상황에도 유연하게 대처할 수 있다.
  - 데이터베이스 마이그레이션을 쉽게 할 수 있다.
- 단점
  - Raw Query를 사용하는것 보다 성능이 떨어진다.
- Sequelize는 Node.js에서 사용할 수 있는 ORM이다.
#### Sequelize CLI(The Sequelize command line interface)
- 명령어를 통해 데이터베이스 작업을 할 수 있는 툴이다.

#### MySQL에 Sequelize 적용해보기
- sequelize, sequelize-cli, mysql2 설치
  - 글로벌 설치 시 `sequelize ~` 명령 가능
  - 로컬 설치 시 `./node_modules/.bin/sequelize ~`로 명령해야 함
- Sequelize CLI 초기화 : `sequelize init`
  - config, migration, models, seeders 폴더 생성
    - config : db에 연결하여 Sequelize를 생성하기 위한 설정 폴더
    - migration : 코드 -> 테이블의 실제 생성을 위한 마이그레이션 파일들이 위치하는 폴더
    - models : `index.js`가 `config`의 설정값을 읽어 Sequelize를 생성한 뒤 db 모델(테이블)들의 정보를 로딩하는 역할, `index.js`와 함께 각 모델(테이블)들에 대한 파일들도 위치함
    - seeders : 초기 정적 데이터 생성을 위한 시드 관리 파일들이 위치함
- `config.json`에 db 연결 정보 설정
- Sequelize CLI 모델(테이블) 정의 : `sequelize model:generate --name User --attributes userId:string,userPassword:string,userName:string`
  - migrations, models에 정의한 모델 관련 파일 생성
    - migrations : 마이그레이션을 위한 모델(테이블) 정의 파일 생성됨 (**id, createAt, updateAt 필드가 자동 생성되며 id는 Sequelize가 필수적으로 사용하는 값으로 지우면 안됨. 나머지는 실제 테이블 생성을 위해 정의하는 코드 부분이므로 수정해서 사용**)
    - models : 모델 생성 시 정의했던 부분으로 Sequelize가 `index.js`를 읽을 때 로딩됨
- 마이그레이션 : `sequelize db:migrate`
  - 실제 테이블 생성됨
  - 정의는 단수, 실제 테이블은 복수형으로 생성됨
    - ex) `User`로 정의 -> `Users` 테이블이 생성됨
- Sequelize CLI Seed 정의 : `sequelize seed:generate --name userData`
  - seeders 폴더에 파일 생성 -> 삽입할 row 지정
- Seed 생성 : `sequelize db:seed:all`
- API 정의 후 사용
  - `models.User.findAll()`
  - `models.User.create({userID: '유저ID', password: '유저PW'})`
  - `models.User.update({password: '새로운 유저PW'}, {where: {userID: '유저ID'}})`
  - `models.User.destroy({where: {userID: '유저ID'}})`