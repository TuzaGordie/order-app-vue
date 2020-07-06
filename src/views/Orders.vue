 <template>
  <v-container class="home">
    <v-layout>
      <v-flex xs4>
        <Orders></Orders>
      </v-flex>

      <v-flex xs8 class="pl-4">
        <Panel title="Items">
          <h1>Testing</h1>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable import/no-cycle */
import Orders from '@/components/Orders.vue';
import { mapGetters } from 'vuex';
import router from '../router';

export default {
  components: {
    Orders,
  },

  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
  },
  computed: {
    ...mapGetters('authentication', ['isLoggedIn']),
  },
};
</script>

<style>
.home {
  margin-top: 100px;
}
</style>
