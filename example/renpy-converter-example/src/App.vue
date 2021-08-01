<template>
  <Converter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Converter from './components/Converter.vue'

export default defineComponent({
  name: 'App',
  components: {
    Converter
  }
})
</script>

<style>

</style>
