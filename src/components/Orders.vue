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
