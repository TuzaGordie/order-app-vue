<template>
  <v-layout class="mt-6">
    <v-flex xs8>
      <v-text-field
        :placeholder="placeholder"
        :value="value"
        @input="$emit('onInput', $event)"
        @keyup.enter="$emit('create')"
      >
      </v-text-field>
    </v-flex>
    <v-flex xs4 class="text-xs-right">
      <v-btn
      color="blue"
      dark
      @click="$emit('create')"
      >Create</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'placeholder',
    'value',
  ],
};
</script>

<style></style>
