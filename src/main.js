import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'



// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'



// Import app and components
import app from './components/app.vue'
import info from './components/info/info.vue'
import auth from './components/auth/auth.vue'
import entity from './components/entity/entity.vue'
import entityInfo from './components/entity/info/info.vue'
import entityList from './components/entity/list/list.vue'



// Mixins
import mixins from './mixins'
Vue.mixin(mixins)



// Use packages
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueI18n)



// Register routes
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: info },
        { name: 'auth', path: '/auth', component: auth },
        { path: '/auth/:id', component: auth },
        { path: '/:account', component: entity, children: [
            { name: 'menu', path: '', component: entityInfo },
            { name: 'list', path: ':query', component: entityList }
        ] }
    ]
})



// Set default locale
if (!localStorage.getItem('locale')) {
    localStorage.setItem('locale' ,'et')
}
const i18n = new VueI18n({
    locale: localStorage.getItem('locale')
})



new Vue({
    el: '#app',
    render: h => h(app),
    router: router,
    i18n: i18n
})
