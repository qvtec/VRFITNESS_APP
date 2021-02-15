<template>
  <q-layout view="hHh Lpr fFf">

    <q-header class="bg-primary">
      <q-toolbar>
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

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
