# 원티드 프리온보딩 프론트엔드 챌린지 3월 사전과제 - TODO LIST
## 프로젝트 개요
본 프로젝트는 원티드 프리온보딩 사전과제로 CRUD 기능을 갖춘 투두리스트입니다.

과제는 Create, Read, Delete, 전역상태관리로 쉬운 내용이었지만 하는 김에 조금 더 기능을 추가해봤습니다.

![원티드 프리온보딩 프론트엔드 챌린지](https://github.com/KimPra2989/wanted-pre-onboarding-frontend-challenge-19/assets/106394183/3c8a2e3a-14a3-40a0-bd62-1120c5587a0d)
[:chicken:직접 해보기:chicken:](https://kimpra2989.github.io/wanted-pre-onboarding-frontend-challenge-19/)
### 기술
- TypeScript
- React
- Vite
- Redux-toolkit
- Emotion



## 주요 기능
### CRUD
  #### Read
  전역상태에서 받아온 list 데이터를 통해 list를 랜더링합니다.
  
  list 초기값은 ["사전과제2 조사하기", "read me 작성하기"] 입니다.
  ```ts
  // App.tsx
  const { list, theme } = useSelector((state: RootState) => state)
  {
    list.map((item, idx) => (
      <List idx={idx} text={item} key={item + idx}></List>
    ))
  }
 ```

  할일목록이 없는 경우를 대비하여 Header와 input의 UI에 예외처리를 했습니다.
 ```ts
  //Header.tsx
  export default function Header() {
  const list = useSelector(( { list } : {list : string[]}) => list)
  const hasList = !!list.length

  return (
    <header>
      <h1>{hasList ? "You Should Do This" : "You have nothing to do"}</h1>
    </header>

  ```
  #### Create
  input 창과 submit 버튼을 엮어 Input 컴포넌트로 만들었습니다.
  
  유저가 빈칸을 전송하려는 경우에 대비하여 예외처리를 진행했습니다.
  
  ```ts
  // input.tsx
    const dispatch = useDispatch()
    const onClick: MouseEventHandler = () => { //submit 버튼의 onClick
    if (inputRef.current) {
      const value = inputRef.current.value
      if (value) {
        dispatch(add(inputRef.current?.value))
      } else {
        alert("내용이 없습니다.")
      }
    }
  }

  //listSlice.ts
    reducers: {
      add: (state, action: PayloadAction<string>) => {
        state.push(action.payload)
      },
    ...
    }
  
  ```
  #### Update
  우선 list 내부의 Edit 버튼을 클릭시 로컬 state를 통해 수정모드로 바뀌게 했습니다.
```ts
//List.tsx
export default function List({ text, idx }: ListProps) {
const [isEdit, setEdit] = useState<boolean>(false)

return (
  <List>
    { isEdit? 수정중에 보여줄 UI : 초기 UI }
  </List>
)
```

  props로 받아온 idx를 payload로 dispatch하여 전역 state를 수정했습니다.
  
 ```ts
 // 수정 버튼 onClick
 const updateHandler = (idx: number) => {
   if (inputRef.current?.value) {
     dispatch(updateList({ idx, value: inputRef.current?.value }))
   } else {
     alert("입력값이 없어요.")
   }
 }

 //listSlice.ts
 reducers: {
   updateList: (state, action: PayloadAction<{idx : number, value: string}>) => {
     state[action.payload.idx] = action.payload.value
   },
   ...
 }
 ```
  
  #### Delete
  update와 비숫한 논리로 delete 버튼을 누르면 idx를 payload로 dispatch하여 state 배열의 idx번째 요소를 삭제했습니다.

  ### 테마 설정
  list 상단의 원들을 통해 테마를 변경할 수 있습니다.
  
  |테마1|테마2|
  |--|--|
  |![원티드 프리온보딩 프론트엔드 챌린지 - Chrome 2024-02-29 오후 6_12_55](https://github.com/KimPra2989/wanted-pre-onboarding-frontend-challenge-19/assets/106394183/7d67d4f5-757f-486b-9fe2-9f615871d65b)|![원티드 프리온보딩 프론트엔드 챌린지 - Chrome 2024-02-29 오후 6_13_17](https://github.com/KimPra2989/wanted-pre-onboarding-frontend-challenge-19/assets/106394183/e596335d-f863-4ef4-ab05-d56b7897d7c1)|
  
  테마 설정 버튼을 누르면 버튼은 각 테마명을 payload로 하여 dispatch하고 이를 로컬 스토리지에 저장하여 추후 방문시에도 설정이 저장될 수 있게 했습니다.
  ```ts
  // themeSelectButton.tsx
  const onClick = () => {
    dispatch(switchTheme(themeName))
    localStorage.setItem('theme', themeName)
  }

  // themeSlice.ts
  export const themeSlice = createSlice({
    initialState: localTheme ? themeSet[localTheme] : 초기테마,
    reducers: {
      switchTheme: (state, action: PayloadAction<ThemeSet>) => {
        state
        return themeSet[action.payload]
      },
    },
  })
```

## 후기
과제가 간단한 편이어서 낮선 기술들을 연습해볼 기회라고 생각했습니다. CRA / Vite 중 안 해본 Vite를, scss / Styled-Component / Emotion 중 안 해본 Emotion을 택하여 도전하기로 했습니다. 켜놓고 화장실 한 번 갔다와야하는 CRA에 비해 Vite는 build 속도가 현저히 빨라서 놀랐습니다. 다만 build 이후에 dist/html를 열어도 cors떄문에 css/js를 못 불러와서 live server를 통해 진입하는 번거러움이 있었습니다. Emotion의 경우 styled-component와 큰 차이가 없어서 비교적 수월하게 익힐 수 있었습니다. git hub 페이지 배포시에 경로 설정을 잘못해서 5시간 정도 날렸습니다. 하는 내내 왜안돼만 반복했는데...이젠 잘 할 수 있어요..증말로

### 아쉬운 점
초기 기획 단계에서 사용자에 대한 고민, UI와 디자인에 대한 고민, 구현할 기능에 대한 고민 등 많은 고민을 했었습니다. 그 중 몇 가지 해결하지 못한 부분이 있어서 아쉽습니다.

우선, 이 앱의 사용자에 대한 고민입니다. 투두리스트의 디자인과 기능을 조사차 구글과 플레이스토어에서 투두리스트 관련 검색을 해보던 중 다음과 같은 생각이 들었습니다. '웬만한 사람은 투두리스트 앱을 쓰지 웹페이지에 찾아와서 쓰는 사람은 어떤 사람들일까?' 아무리 잘 만든 앱이나 서비스도 사용자가 없으면 그 의미가 없습니다. 그에 따라 고민해본 문제인데 여전히 모르겠습니다. 아쉽지만 고민만하다 출발도 못할까봐 재쳐두고 개발을 시작했습니다.

둘재로 UI와 디자인에 대한 고민입니다. 입력창이 상단에 둬야할지 하단에 둬야할지부터 디자인에 대한 고민을 많이했지만 돌이켜 생각해보니 사용자를 특정하는 게 우선이었던 것 같습니다. 결국 이것도 시간 관계상 가장 클레식한 모습으로 결정이 됐습니다.

마지막은 기능 구현에 대한 것입니다. 기획단계에서 생각했던 기능들이 여러가지 있었습니다. 드레그 앤 드롭으로 정렬하는 기능과 우선 순위에 따라 정렬 되는 기능, 일괄 삭제 등입니다. 이건 단순히 시간이 없어서 구현을 못한 점이 아쉬움으로 남네요.

### 맺는 말
여러가지로 처음 해보는 게 많은 프로젝트였습니다. 이 read me 쓰는 법도 몰라서 찾고 해보면서 그럴싸하게는 써진 것 같아 기쁩니다. 한동안 Next만 다루다가 react를 다시금 해보니 실력이 많이 죽은 느낌이 들어 이번 챌린지에서 다시금 실력을 끌어올릴 수 있는 계기가 됐으면 좋겠습니다. 감사합니다. 

