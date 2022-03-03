# observer [click](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

# transition [click](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)

```CSS
    transition: background-color 300ms linear;
    transition: all 200ms ease;
```

애니메이션 효과 [click](https://cubic-bezier.com/)

# transform

```CSS
    transform: scale(1.2); 1.2배 커짐
    trnasform: rotate(45deg); 돌아간다.
    transform: translate(20%, 20%); 자신의 크기에서 20%

```

# position [click](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

- relative -> 부모 컨테이너 안에서 적용 다른 요소들의 레이아웃에 변화를 주지 않는다.
- absolute -> 스테틱이 아닌 컨테이너 안에서 적용. 기존 요소들의 레이아웃에 변화를 준다.
- sticky -> 현재 컨테이너 안에서 적용 (top, left 필수)
- fixed -> body안에서 적용

# background

```CSS
    .box1 {
        background-image: url();
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .box2 { //위에 효과들을 한번에 적용
        background: center/cover no-repeat url();
    }
```

공부자료 1.[click](https://developer.mozilla.org/en-US/docs/Web/CSS/background) 2.[click](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)

# translate을 이용하여 가운데 정렬

```CSS
.box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    background-color: black;
    transform: translate(-50%, -50%);
}
```

# BEM (Block, Element, Modifier)

- 클래스 이름을 작성하는 방법에 대해서 정의한 규칙
- Block\_\_Element--Modifier

# css 커스텀 프로퍼티 (변수 지정)

```JavaScript
:root {
    --background-color: thistle;
    --text-color: white;
    --base-space: 8px
}

.first-list {
    background-color: var(--background-color);
    color: var(--text-color);
    margin-left: var(--base-space);
}
@media screen and (max-width: 768px) {
    :root {
        --background-color: green;
        --text-color: white;
        --base-space: 6px
    }
}

지정된 값이 없다면 (--base-space, 8); 이렇게 사용할 수 있다.
```

# 포트폴리오 사이트 제작 구상

- 싱글페이지
- 클릭을 작게 할 수 있게
- 깔끔하지만 나의 개성을 살려서
- 전문가, 전문 지식, 개발 관련
- 개발에 대한 나의 열정
- 나의 기술 스택
- 내가 가지고 있는 기술, 언어, 툴
- 프로젝트들 (카테고리, 우선순위)
- 추천서

# contents

- 소개 (경력, 열정 등등)
- 주요 스택 (프론트엔드(React, Vue, Web Basic:HTML,CSS,JavaScript), 백엔드, 모바일 등등)
- 경력 (회사 - 기간, 학교 - 학원)
- 기술 (언어, 툴, 기타)
- 프로젝트 (뭔지? 주요기능? 깃허브)
- 추천서
- 연락처
