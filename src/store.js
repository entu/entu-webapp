'use strict'

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    background: 'bg-' + Math.ceil(Math.random() * 12),
    menu: document.body.clientWidth > 768,
    list: document.body.clientWidth > 576,
    locales: ['et', 'en'],
    activeLocale: localStorage.getItem('locale') || 'et',
    activeRequests: 0
  },
  getters: {
    background: state => state.background,
    showMenu: state => state.menu,
    showList: state => state.list,
    showEntity: state => !state.list || document.body.clientWidth >= 576,
    locales: state => state.locales.filter(l => l !== state.activeLocale),
    locale: state => state.activeLocale,
    requests: state => state.activeRequests
  },
  mutations: {
    toggleMenu: state => {
      state.menu = !state.menu
    },
    toggleList: (state, visible) => {
      state.list = visible
    },
    setLocale: (state, locale) => {
      state.activeLocale = locale
      localStorage.setItem('locale', locale)
    },
    setRequests: (state, count) => {
      state.activeRequests += count
    }
  }
})
