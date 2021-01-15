<template>
  <div>
    <CCHeader>
      <template v-slot:nav>
        <CCNav />
      </template>
    </CCHeader>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import CCHeader from './Header.vue'
import CCNav from './Nav.vue'

export default defineComponent({
  components: {
    CCHeader,
    CCNav,
  },
  setup() {
    return {}
  },
})
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
