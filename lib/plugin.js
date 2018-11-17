import Vue from 'vue'

const options = <%= JSON.stringify(options) %>
Vue.prototype.$stripe = window.Stripe(options.publishableKey)
