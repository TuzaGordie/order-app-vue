<template>
  <div class="toolbar">
    <v-toolbar color="blue lighten-2" dark>
      <v-toolbar-title class="mr-4">ORDER APP</v-toolbar-title>
      <v-toolbar-items>
        <v-btn color="blue lighten-2" v-if="isLoggedIn">
          orders
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items flat>
        <v-btn color="blue lighten-2" to="/register" v-if="!isLoggedIn">Register</v-btn>
        <v-btn color="blue lighten-2" to="/login" v-if="!isLoggedIn">Login</v-btn>
        <v-btn color="blue lighten-2" v-if="isLoggedIn" @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('authentication', ['isLoggedIn']),
  },
  methods: {
    ...mapActions('authentication', ['logout']),
  },
};
</script>

<style scoped>
.toolbar {
    height: 56px;
    width: 100%;
    position: fixed;
}
</style>
