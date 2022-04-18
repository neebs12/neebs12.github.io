```html
<div id="parent">
  <div class="box first">First</div>
  <div class="box second">Second</div>
  <div class="box third">Third</div>
  <div class="box fourth">Fourth</div>
</div>
```

```css
#parent {
  background-color: gray;
  width: 400px;
  height: 130px;
  position: absolute;
}

.box {
  width: 100px;
  height: 100px;
  display: inline-block;
}

.first { background-color: red; }
.second {background-color: blue;}
.third { background-color: green; }
.fourth { background-color: orange; }
```