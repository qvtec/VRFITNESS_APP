<template>
  <q-layout view="lHh lpR lFf">

    <q-header class="bg-primary">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-btn flat size="lg" no-caps :to="{ name: 'top' }">
            <q-avatar square>
              <img src="~assets/qvtec-logo2.png" />
            </q-avatar>
            <div v-if="$q.screen.gt.xs">qvtec App</div>
          </q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" content-class="bg-grey-3" bordered>
      <!-- drawer content -->
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-avatar color="secondary" text-color="white" icon="accessibility_new" />
          </q-item-section>
          <q-item-section v-if="user">
            {{ user.name }}
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item :to="{ name: 'home' }">
          <q-item-section avatar>
            <q-avatar color="secondary" text-color="white" icon="home" />
          </q-item-section>
          <q-item-section>
            {{ $t('pages.menu.home') }}
          </q-item-section>
        </q-item>

        <q-item :to="{ name: 'add' }">
          <q-item-section avatar>
            <q-avatar color="secondary" text-color="white" icon="add" />
          </q-item-section>
          <q-item-section>
            {{ $t('pages.menu.create') }}
          </q-item-section>
        </q-item>

        <q-item :to="{ name: 'list' }">
          <q-item-section avatar>
            <q-avatar color="secondary" text-color="white" icon="list" />
          </q-item-section>
          <q-item-section>
            {{ $t('pages.menu.list') }}
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable @click.native="logout()" >
          <q-item-section avatar>
            <q-avatar color="secondary" text-color="white" icon="exit_to_app" />
          </q-item-section>
          <q-item-section>
            {{ $t('pages.menu.logout') }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-primary">
      <q-toolbar>
        <q-item class="col text-center">
          <q-item-section>
            <q-item-label>@2020 qvtec</q-item-label>
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      left: false
    }
  },

  computed: {
    user () {
      return this.$store.getters['auth/user']
    }
  },

  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
        .then(user => {
          setTimeout(() => this.$router.replace({ name: 'login' }), 700)
        })
    }
  }
}
</script>
