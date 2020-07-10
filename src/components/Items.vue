<template>
  <panel title="Items">
    <div class="items mt-2 pl-2" v-for="item in items" :key="item.id">
      <Editable
      :isEditMode="item.isEditMode"
      :name="item.title"
      @onInput="setItemTitle({ item, title: $event })"
      @onEdit="setEditMode(item)"
      @onSave="saveItem(item)"
      @onDelete="deleteItem(item)"
    />
    </div>

    <Create
    placeholder="Add new item.."
    @onInput="setNewItemTitle"
    :value="newItemTitle"
    @create="createItem"
    />
  </panel>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Create from '@/components/Create.vue';
import Editable from '@/components/Editable.vue';

export default {
  components: {
    Create,
    Editable,
  },
  computed: {
    ...mapState('items', [
      'items',
      'newItemTitle',
    ]),
  },
  methods: {
    ...mapActions('items', [
      'createItem',
      'saveItem',
      'deleteItem',
    ]),
    ...mapMutations('items', [
      'setNewItemTitle',
      'setItemTitle',
      'setEditMode',
    ]),
  },
};
</script>

<style>
.items {
  font-size: 16px;
}
</style>
