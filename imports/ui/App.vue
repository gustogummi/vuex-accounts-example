<template>
<div>
	<h1>Vuex + Meteor Accounts Example</h1>
	<auth></auth>
  <users></users>
</div>
</template>

<script>
import { Meteor } from 'meteor/meteor'
import store from '/imports/vuex/store'
import Auth from '/imports/ui/auth/Auth.vue'
import Users from '/imports/ui/Users.vue'

export default {
  name: 'app',
  store,
  components: {
    auth: Auth,
    users: Users
  },
  meteor: {
    meteorUser() {
      this.$store.commit('updateUser', Meteor.user())
    }
  }
}
</script>