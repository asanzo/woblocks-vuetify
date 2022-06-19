<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <HeaderContent />
    </v-app-bar>
    <v-main>
      <BlocklyWorkspace />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import BlocklyWorkspace from './components/BlocklyWorkspace.vue'
import HeaderContent from './components/HeaderContent.vue'

export default Vue.extend({
  name: 'App',

  components: {
    BlocklyWorkspace,
    HeaderContent
  },

  data: () => ({
    //
  })
})
</script>
