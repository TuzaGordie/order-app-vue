<template>
  <div class="toolbar">
    <v-toolbar color="blue lighten-2" dark>
      <v-toolbar-title class="mr-4">ORDER APP</v-toolbar-title>
      <v-toolbar-items>
        <v-btn color="blue lighten-2">
          orders
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items flat>
        <v-btn color="blue lighten-2" to="/register">Register</v-btn>
        <v-btn color="blue lighten-2">Login</v-btn>
        <v-btn color="blue lighten-2">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.toolbar {
    height: 56px;
    width: 100%;
    position: fixed;
}
</style>
