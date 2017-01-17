<template>
<div>
  <h2>List of users</h2>
  <div v-if="users.length">
    <p v-for="user in users">{{user.username}} ({{user.emails[0].address}})</p>
  </div>
  <p v-else>There are no users yet. Why don't you register some?</p>
</div>
</template>

<script>
export default {
  meteor: {
    subscribe: {
      'users': [],
    },
    usersHelper() {
      let value = Meteor.users.find({})
      this.$store.commit('updateUsers', value.fetch())
      return value
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  }
}
</script>
