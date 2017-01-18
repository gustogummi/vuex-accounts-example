# vuex-accounts-example
Example app for Meteor + Vue, setting up Accounts with Vuex

## Usage

Just follow standard path of installing any Meteor project:

In console:
```
$ git clone https://github.com/gustogummi/vuex-accounts-example.git
$ cd vuex-accounts-example
$ meteor npm install
$ meteor
```
In browser:
```
http://localhost:3000
```

## Details

This is a basic example of how Meteor Accounts packages can play with Vue and Vuex. No validation and other goodies.

There are more ways to make it work, f.e. utilizing Vuex getters, mapState or by making method calls directly in components instead of the store actions. You can follow my way or decide on whatever you want.

But there is one thing you have to pay attention to. When you return in a Meteor helper, you can pass the cursor (actually you have to, if you want the helper to stay reactive), but data passed to the store have to be a fetched array. Here's one way to achieve it:

```
  meteor: {
    subscribe: {
      'users': []
    },
    usersHelper() {
      return this.$store.commit('updateUsers', Meteor.users.find({}).fetch())
    }
  },
```

I provide separate store module for authentication as I believe this will become a part of Meteor+Vue best practices.

Remember that instead of passing the state to computed properties, you can use the state directly in your templates, like that:
```
<p v-for="user in $store.state.auth.users">{{user.username}} ({{user.emails[0].address}})</p>
```
