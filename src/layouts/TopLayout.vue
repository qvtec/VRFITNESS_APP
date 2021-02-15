<template>
  <q-layout view="hHh Lpr fFf">

    <q-header class="bg-primary">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn flat size="lg" no-caps :to="{ name: 'top' }">
            <q-avatar square>
              <img src="~assets/qvtec-logo2.png" />
            </q-avatar>
            <div v-if="$q.screen.gt.xs">VRFITNESS WEB</div>
          </q-btn>
        </q-toolbar-title>
        <q-separator dark vertical />
        <q-btn stretch flat type="a" :to="{ name: 'login' }" :label="$t('pages.login.title')" />
        <q-separator dark vertical />
        <q-select
          v-model="lang"
          :options="langOptions"
          borderless
          emit-value
          map-options
        >
          <template v-slot:selected>
            <q-item>
              <q-item-section>
                <q-item-label class="text-white">{{ langSelected.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
              <q-item-section>
                <q-item-label v-html="scope.opt.label" />
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-primary">
      <q-toolbar inset>
        <q-toolbar-title>
          <strong>VRFITNESS</strong> WEB
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar>
        <div class="text-center q-gutter-xs">
          <q-btn flat size="sm" :label="$t('pages.menu.sitepolicy')" />
          <q-btn flat size="sm" :label="$t('pages.menu.terms')" />
          <q-btn flat size="sm" :label="$t('pages.menu.privacy')" />
        </div>
      </q-toolbar>
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
      left: false,
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'en', label: 'English' },
        { value: 'ja', label: '日本語' }
      ]
    }
  },

  watch: {
    lang (lang) {
      this.$i18n.locale = lang
    }
  },

  computed: {
    user () {
      return this.$store.state.auth.user
    },

    langSelected () {
      return this.langOptions.find((v) => v.value === this.lang)
    }
  },

  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
      setTimeout(() => this.$router.replace({ name: 'login' }), 700)
    }
  }
}
</script>
