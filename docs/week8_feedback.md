## 알게된 내용

### input 태그의 type을 `number`로 하면 숫자 또는 `+`, `-`, `.`만을 입력 받을 수 있다.
- 하지만 `+`, `-`, `.` 또한 쓸모 없는데.. 해결 방법을 찾아봐야 함
- (추가) `e`도 입력된다..

### input 태그의 type을 `number`로 했을 때 input 안에 up, down 버튼이 생긴다.
- 제거하는 법 : 전역 css 파일에 아래 코드를 추가해준다.
```css
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
```

### `draggable="true"` 시 드래깅되는 이미지 없애기

- 고스트 이미지(?)를 사용하여 안보이게 한다.

```javascript
const box = document.querySelector(".box");
box.addEventListener("dragstart", e => {
  console.log("start");
  var img = new Image();
  img.src =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
  e.dataTransfer.setDragImage(img, 0, 0);
});
```
