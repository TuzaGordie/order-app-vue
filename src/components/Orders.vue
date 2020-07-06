<template>
  <Panel title="Orders">
    <div
    class="order mt-2 pl-2"
    v-for="order in orders"
    :key="order.id"
    >
      <v-layout row wrap>
        <v-flex xs9 class="text-xs-left">
            <span v-if="!order.isEditMode">
              {{ order.name }}
            </span>
            <v-text-field
            autofocus
            v-if="order.isEditMode"
            :value="order.name"
            @keyup.enter="saveOrder(order)"
            @input="setOrderName({order, name: $event,})"
            ></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-icon v-if="!order.isEditMode" @click="setEditMode(order)">edit</v-icon>
          <v-icon v-if="order.isEditMode" @click="saveOrder(order)">check</v-icon>
          <v-icon @click="deleteOrder(order)">delete</v-icon>
        </v-flex>
      </v-layout>
    </div>
    <v-text-field placeholder="Place an Order" class="mt-6"
    @keyup.enter="createOrder"
    @input="setNewOrderName" :value="newOrderName"> </v-text-field>
    <v-btn color="blue" dark @click="createOrder">Create</v-btn>
  </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.fetchOrders();
  },
  computed: {
    ...mapState('orders', ['newOrderName', 'orders']),
  },
  methods: {
    ...mapMutations('orders', [
      'setNewOrderName',
      'setEditMode',
      'setOrderName',
    ]),
    ...mapActions('orders', [
      'createOrder',
      'fetchOrders',
      'saveOrder',
      'deleteOrder',
    ]),
  },
};
</script>

<style>
.text-xs-left {
  text-align: left;
}

.order {
  font-size: 20px;
}

.icon {
  cursor: pointer;
}

.icon:hover {
  color: #333;
}
</style>
