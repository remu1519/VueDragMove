<template>
  <div>
    <VueDrag>
      <div class="card">
        <div class="card-body">
          Drag me.
        </div>
      </div>
    </VueDrag>
  </div>
</template>

<script>
import VueDrag from './../../src/components/VueDrag';
console.log(VueDrag);

export default {
  name: 'App',
  components: { VueDrag }
}
</script>

<style>
</style>
