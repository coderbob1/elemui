import Vue from 'vue'
import App from './App.vue'
import elemui from '../packages'
Vue.config.productionTip = false
Vue.use(elemui)
new Vue({
  render: h => h(App),
}).$mount('#app')
