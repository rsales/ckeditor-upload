/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import App from '../src/App.vue'
import router from "../src/router";
import CKEditor from '@ckeditor/ckeditor5-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import('bootstrap/dist/css/bootstrap.css')
import('bootstrap-vue/dist/bootstrap-vue.css')
import('../src/assets/main.css')

Vue.use( CKEditor );
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})
