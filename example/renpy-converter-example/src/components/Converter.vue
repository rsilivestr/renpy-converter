<template>
  <div class="converter">
    <div class="row json-picker">
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option v-for="json in jsons" :key="json.name" v-bind:value="json">
          {{ json.name }}
        </option>
      </select>
    </div>
    <div class="row">
      <div class="col">
        <h3>json</h3>
        <pre>{{ getJsonValue(selected) }}</pre>
      </div>
      <div class="col">
         <h3>rpy</h3>
         <pre>{{ converted }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import plainTextDialogSingleLine from '../../../dialogs-json/1-plain-text-dialog-single-line.json'
import { convertToRenpyScript } from '../index'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Converter',
  data () {
    return {
      selected: null as any,
      jsons: [
        {
          name: '1-plain-text-dialog-single-line',
          jsonValue: plainTextDialogSingleLine
        }
      ]
    }
  },
  created () {
    this.selected = this.jsons[0]
  },
  computed: {
    converted () : string {
      return convertToRenpyScript(this.selected)
    }
  },
  methods: {
    getJsonValue (json: any) {
      if (json == null) return ''
      return json.jsonValue
    }
  }
})
</script>

<style scoped>
.json-picker{
  justify-content: center;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.col {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
</style>
