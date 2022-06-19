<template>
    <v-dialog v-model="isOpen">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Crear o Editar Objeto</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text @click="okClicked">
            Ok
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            v-model="objectName"
            label="Nombre*"
            required
          ></v-text-field>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AddObjectButton',

  props: ['addObject'],

  data: () => ({
    isOpen: false,
    objectName: ''
  }),

  methods: {
    okClicked () {
      this.addObject(this.objectName)
      this.close()
    },
    close () {
      this.isOpen = false
      this.objectName = ''
    }
  }
})
</script>

<style lang="scss">
  .plus {
    min-width: 0 !important;
    padding: 0 8px !important;
  }
</style>
