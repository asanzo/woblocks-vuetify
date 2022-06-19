<template>
    <div>
        Blockly acá
        <v-btn icon large class="workspaceButton">
          <v-icon>mdi-save</v-icon>
        </v-btn>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BlocklyWorkspace',

  data: () => ({})
})
</script>

<style lang="scss">
.workspaceButton {
  color: "red"
}
</style>
