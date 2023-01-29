# vue-easy-bus

```javascript
npm install vue-easy-bus 
```

#use

```javascript
import Vue from 'vue'
import vueEasyBus from 'vue-easy-bus'
Vue.use(vueEasyBus)
```

#for page

```javascript
this.$bus.on('eventName', (obj)=> {
	console.log(obj.name) //xiaoming
});

this.$bus.emit('eventName', {
	name: 'xiaoming'
});

this.$bus.off('eventName')
```
