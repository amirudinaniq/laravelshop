/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import mitt from 'mitt';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Toaster from '@meforma/vue-toaster';
import shared from "./sharedmethod.js";
window.shared = shared;
import moment from 'moment';



const emitter = mitt();


/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});


app.config.globalProperties.emitter = emitter;
app.use(Toaster, {
    // One of the options
    position: 'top'
  })
  app.use(VueAxios, axios)


  //import components
import ExampleComponent from './components/ExampleComponent.vue';
import AddToCart from './components/AddToCart.vue';
import Cart from './components/Cart.vue';
import checkout from './components/checkout.vue';

app.component('add-to-cart-button', AddToCart);
app.component('cart', Cart);
app.component('checkout', checkout);


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.globEager('./**/*.vue')).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
