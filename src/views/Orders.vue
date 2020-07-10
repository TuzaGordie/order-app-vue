 <template>
  <v-container class="home">
    <v-layout>
      <v-flex xs4>
        <Orders></Orders>
      </v-flex>

      <v-flex xs8 class="pl-4" v-if="currentOrder">
        <Items></Items>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import Orders from '@/components/Orders.vue';
import Items from '@/components/Items.vue';
import { mapGetters, mapState } from 'vuex';
// eslint-disable-next-line import/no-cycle
import router from '../router';

export default {
  components: {
    Orders,
    Items,
  },

  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
  },
  computed: {
    ...mapState('orders', ['currentOrder']),
    ...mapGetters('authentication', ['isLoggedIn']),
  },
};
</script>

<style>
.home {
  margin-top: 100px;
}
</style>
