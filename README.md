# vue-easy-bus
npm install vue-easy-bus 

#use
import Vue from 'vue'
import vueEasyBus from 'vue-easy-bus'
Vue.use(vueEasyBus)

#for page
this.$bus.on('eventName', (obj)=> {
	console.log(obj.name) //xiaoming
});

this.$bus.emit('eventName', {
	name: 'xiaoming'
});

this.$bus.off('eventName')

