## Web APIs

### APIs

프로그램 내부를 몰라도 해당 프로그램에서 제공하는 인터페이스로 프로그램과 소통할 수 있는 방식

예) 키보드 내부가 어떻게 동작하는지 몰라도 키보드가 제공하는 버튼들이 키보드의 API라고 볼 수 있다.

### Web APIs 개요

웹 브라우저가 제공하는 API

다양한 웹 APIs가 존재 하며 어떻게 사용하는것인지 모든 내용을 알필요는 없고 해당 하는 것들이 무엇이 있는지만 알아도 좋다.

- DOM API
- Network API
- Graphics API
- Audio / Video API
- Device API
- File API
- Storage API

https://developer.mozilla.org/ko/docs/Web/API

브라우저는 사용자의 정보를 보호할 의무가 있다.

API에 따라 사용자 권한 요청이나 https에서만 사용이 가능한 API가 있다.

### Browser 구조 분석

`window` : 브라우저 전체 창을 의미 (닫기 / 크게보기 / 최소화 포함), 객체 형태

`document` : 브라우저 창에서 페이지가 표기되는 화면을 의미, 객체 형태

`navigator` : 보이진 않지만 브라우저와 관련된 정보를 담긴 객체

- **window Object 구조** (최상위 Object / Global Object)
  - DOM (Document Object Model)
    - document
    - ...
  - BOM (Browser Object Model) : browser API가 존재한다.
    - navigator
    - location
    - fetch
    - storage
    - ...
  - JavaScript
    - Array
    - Map
    - Data
    - ...

https://developer.mozilla.org/ko/docs/Web/API/Window

window 객체에서 주로 사용하는 부분

- size : 윈도우의 사이즈, 사이즈 관련된 부분들
- scroll : 스크롤
- load

### Window 객체에서 size 배워보기

window.scree : 모니터의 사이즈 (리사이즈가 되어도 변경이 되지 않는다.)

window.outer : 브라우저의 사이즈

window.inner : 스크롤바를 포함한 문서가 표기되는 화면 사이즈

documentElement.clientWidth : inner에서 스크롤을 제외한 사이즈
