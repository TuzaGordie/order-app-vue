<template>
  <Panel title="Orders">
    <div
    class="order mt-2 pl-2"
    v-for="order in orders"
    :key="order.id"
    >
    <Editable
      :isEditMode="order.isEditMode"
      :name="order.name"
      @onInput="setOrderName({ order, name: $event })"
      @onClick="orderClicked(order)"
      @onEdit="setEditMode(order)"
      @onSave="saveOrder(order)"
      @onDelete="deleteOrder(order)"
    />
    </div>
    <Create
      placeholder= "Place an Order"
       @onInput= "setNewOrderName"
       :value="newOrderName"
       @create="createOrder"
    />
  </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import Create from '@/components/Create.vue';
import Editable from '@/components/Editable.vue';

export default {
  mounted() {
    this.fetchOrders();
  },
  components: {
    Create,
    Editable,
  },
  computed: {
    ...mapState('orders', ['newOrderName', 'orders']),
  },
  methods: {
    orderClicked(order) {
      this.setCurrentOrder(order);
      this.fetchItemsForOrder(order);
    },
    ...mapMutations('orders', [
      'setNewOrderName',
      'setEditMode',
      'setOrderName',
      'setCurrentOrder',
    ]),
    ...mapActions('orders', [
      'createOrder',
      'fetchOrders',
      'saveOrder',
      'deleteOrder',
    ]),
    ...mapActions('items', [
      'fetchItemsForOrder',
    ]),
  },
};
</script>

<style>
.order {
  font-size: 20px;
  cursor: pointer;
}

.icon {
  cursor: pointer;
}

.icon:hover {
  color: #333;
}
</style>
