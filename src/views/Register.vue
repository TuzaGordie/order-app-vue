<template>
  <v-container class="register">
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Regsiter</h1>
        <v-text-field label="Email" placeholder="Email" :value="registerEmail"
        @input="setRegisterEmail"
        >
        </v-text-field>

        <v-text-field label="Password" placeholder="Password" auto-complete="new-password"
        :value="registerPassword" @input="setRegisterPassword" type="password">
        </v-text-field>

        <v-alert type="error" :value="registerError"> {{registerError}} </v-alert>

        <v-btn color="blue" dark @click="register">Register</v-btn>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('authentication', ['registerEmail', 'registerPassword', 'registerError']),
  },
  methods: {
    ...mapMutations('authentication', ['setRegisterEmail', 'setRegisterPassword']),
    ...mapActions('authentication', ['register']),
  },
};
</script>

<style scoped>
.register {
  margin-top: 10rem;
}
</style>
