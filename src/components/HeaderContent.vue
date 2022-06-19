<template>
    <v-container fluid class="d-flex toolbar">
        <v-btn class="appname" text x-large>
          Woblocks
        </v-btn>
        <v-tabs background-color="primary">
            <v-tab>
              <v-icon>$wollok</v-icon>
            </v-tab>
            <v-tab
                v-for="userObject in userObjects"
                :key="userObject"
            >
                {{ userObject }}
            </v-tab>
        </v-tabs>
        <AddObjectButton :addObject="addUserObject" />
        <v-spacer></v-spacer>
        <PlayButton />
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import AddObjectButton from './AddObjectButton.vue'
import PlayButton from './PlayButton.vue'

export default Vue.extend({
  name: 'HeaderContent',

  components: { AddObjectButton, PlayButton },

  data: () => ({
    userObjects: []
  }),

  methods: {
    removeUserObject () {
      this.userObjects.pop()
    },

    addUserObject (objName: string) {
      this.userObjects.push(objName)
    }
  }
})
</script>

<style lang="scss">
  .v-tabs {
    flex-grow: 0 !important;
    width: auto !important;
  }
  .v-tab, .appname {
    text-transform: none !important;
  }
  .appname {
    vertical-align: middle !important;
  }
  .toolbar {
    justify-content: space-between;
  }
  hr {
    border-right-width: 2px !important;
  }
</style>
