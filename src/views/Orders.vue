 <template>
  <v-container class="home">
    <v-layout class="order">
      <v-flex class="left-order">
        <Orders class="order"></Orders>
      </v-flex>
      <v-flex class="right-order" v-if="currentOrder">
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

.left-order {
  width: 2%;
  min-width: 2%;
  margin-right: 1rem;
}

@media only screen and (max-width: 650px) {
  .order {
    justify-content: space-between;
    flex-direction: column;
  }

  .left-order {
    margin-bottom: 1rem;
    width: 100%;
  }

    .right-order {
    margin-bottom: 1rem;
    width: 100%;
  }

}
</style>
