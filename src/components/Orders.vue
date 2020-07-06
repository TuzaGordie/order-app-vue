<template>
  <Panel title="Orders">
    <div v-for="order in orders" :key="order.id">
      {{ order.name }}
    </div>
    <v-text-field placeholder="Place an Order"
    @input="setNewOrderName" :value="newOrderName"> </v-text-field>
    <v-btn color="blue" dark @click="createOrder">Create</v-btn>
  </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('orders', ['newOrderName', 'orders']),
  },
  methods: {
    ...mapMutations('orders', ['setNewOrderName']),
    ...mapActions('orders', ['createOrder']),
  },
};
</script>

<style></style>
