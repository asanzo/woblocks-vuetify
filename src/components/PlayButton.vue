<template>
    <v-dialog v-model="isOpen" fullscreen >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon x-large
          class="playButton"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon x-large >mdi-play</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon @click="isOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Wollok Game</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          Aquí la escena
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PlayButton',

  data: () => ({
    isOpen: false
  })
})
</script>

<style>
  .playButton {
    color: green !important;
    background-color: white;
  }
</style>
