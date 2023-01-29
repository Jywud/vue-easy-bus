# vue-easy-bus

```javascript
npm install vue-easy-bus 
```

# use

```javascript
import Vue from 'vue'
import vueEasyBus from 'vue-easy-bus'
Vue.use(vueEasyBus)
```

# for page

```javascript

// 注册事件
this.$bus.on('eventName', (obj)=> {
	console.log(obj.name) //xiaoming
});

// 注册一次 不需要调用 off 销毁
this.$bus.once('eventName', (obj)=> {
	console.log(obj.name)
});

// 触发事件
this.$bus.emit('eventName', {
	name: 'xiaoming'
});

// 注销事件
this.$bus.off('eventName')
```
