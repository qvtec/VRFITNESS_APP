<template>
  <q-page padding class="fit row justify-center q-pa-md items-baseline">
    <div class="col-xs-12 col-sm-7 col-lg-5">
      <q-card flat bordered>
        <q-card-section class="bg-grey-2">
          <div class="text-h6">{{ $t('pages.login.title') }}</div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-form
            class="q-gutter-md"
            ref="form"
            @submit="login"
          >

            <q-input
              outlined
              v-model="credentials.email"
              label="Email"
              type="email"
              lazy-rules
              :rules="[val => !!val || $t('errors.required')]"
            >
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>

            <q-input
              outlined
              v-model="credentials.password"
              label="Password"
              type="password"
              lazy-rules
              :rules="[val => !!val || $t('errors.required')]"
            >
              <template v-slot:prepend>
                <q-icon name="vpn_key" />
              </template>
            </q-input>

            <div>
              <q-btn
                class="full-width"
                :label="$t('pages.login.submit')"
                :loading="submitting"
                type="submit"
                color="primary"
                size="lg" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      },
      submitting: false
    }
  },

  created () {
    if (this.$store.getters['auth/isAuthenticated']) {
      this.$router.replace({ name: 'home' })
    }
  },

  methods: {
    login () {
      this.$refs.form.validate().then(success => {
        if (!success) return
        this.submitting = true

        this.$store.dispatch('auth/login', this.credentials)
          .then(user => {
            this.$store.dispatch('auth/setUser')
            this.$q.notify({
              type: 'positive',
              message: this.$t('pages.login.success')
            })
            setTimeout(() => this.$router.replace({ name: 'home' }), 700)
          })
          .catch(error => {
            this.$q.notify({
              type: 'negative',
              message: this.$t('pages.login.invalid')
            })
            this.submitting = false
            console.error(`Not signed in: ${error.message}`)
          })
      })
    }
  }
}
</script>
