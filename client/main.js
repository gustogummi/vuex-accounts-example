import { Meteor } from 'meteor/meteor'
import { Vue } from 'meteor/akryum:vue'

import App from '/imports/ui/App.vue'

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('app')
})