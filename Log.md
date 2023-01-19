### 这是设计作品

#### 目前暂定的是 凉山州会理古城旅游景区

####  尧坝古镇旅游景区

1. [bug] 在/checkout结算页添加一条收货地址，当点击新增窗口的确认按钮后，再点击"新增地址"编辑地址，会影响到上一条添加的地址。

解决办法：在Vuex的mutations的对应方法里，对playload进行深拷贝 `JSON.parse(JSON.stringify(playload))` , 就解决了bug
深拷贝的方法：
 1. for..in递归
 2. JSON.parse(JSON.stringify())
 3. structuredClone() **浏览器提供的API**
 4. 函数库 lodash，提供 cloneDeep 实现
 5. 通过jQuery的extend方法实现深拷贝

2. [bug] 在main.js的图片懒加载指令中，要写成函数式的，不然会引起地址复用
