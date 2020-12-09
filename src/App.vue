<template>
  <div class="box corona-bar-graph">
    <graph></graph>
  </div>
</template>

<script>
import Graph from './components/Graph.vue'
export default {
  name: 'App',
  components: {
    Graph
  }
}
</script>

<style scoped>
.corona-bar-graph {
  width: 300px;
}
</style>