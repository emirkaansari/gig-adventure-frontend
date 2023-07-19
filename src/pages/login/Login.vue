<template>
  <v-container class="fill-height">
    <v-layout align-center justify-center>
      <v-row align="center">
        <v-col >
          <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-tabs
              v-model="tab"
              align-tabs="center"
            >
              <v-tab value="one">{{$t('Login.Login')}}</v-tab>
              <v-tab value="two">{{$t('Login.Signup')}}</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <v-window-item value="one">
                  <v-form
                    v-model="form"
                    @submit.prevent="onSubmitLogin"
                  >
                    <v-text-field
                      v-model="email"
                      :readonly="loading"
                      :rules="[required]"
                      class="mb-2"
                      clearable
                      label="Email"
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      :readonly="loading"
                      :rules="[required]"
                      clearable
                      label="Password"
                      placeholder="Enter your password"
                    ></v-text-field>

                    <br>

                    <v-btn
                      :disabled="!form"
                      :loading="loading"
                      block
                      color="success"
                      size="large"
                      type="submit"
                      variant="elevated"
                    >
                      {{$t('Login.Login')}}
                    </v-btn>
                  </v-form>
                </v-window-item>

                <v-window-item value="two">
                  Two
                  <v-form
                    v-model="form"
                    @submit.prevent="onSubmitSignUp"
                  >
                    <v-text-field
                      v-model="email"
                      :readonly="loading"
                      :rules="[required]"
                      class="mb-2"
                      clearable
                      label="Email"
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      :readonly="loading"
                      :rules="[required]"
                      clearable
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                    ></v-text-field>

                    <br>

                    <v-btn
                      :disabled="!form"
                      :loading="loading"
                      block
                      color="deep-purple"
                      size="large"
                      type="submit"
                      variant="elevated"
                    >
                      {{$t('Login.Signup')}}
                    </v-btn>
                  </v-form>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      form: false,
      email: null,
      password: null,
      loading: false,
    };
  },
  methods: {
    onSubmitLogin () {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    onSubmitSignUp () {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    required (v) {
      return !!v || 'Field is required'
    },
  },
};
</script>
