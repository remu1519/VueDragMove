<template>
  <div class="container text-center">
    <h1> Vue Drag </h1>
    <button @click="addItem" class="btn btn-primary">add item</button>
    <div class="position-relative text-nowrap">
      <VueDrag v-for="item in itemList" v-bind:key="item.id">
        <div class="card">
          <div class="card-body">
            Drag me.
          </div>
        </div>
      </VueDrag>
    </div>
  </div>
</template>

<script>
import VueDrag from './../src/components/VueDrag';

const Item = class {
  constructor() {
    this._id = Symbol('item id');
  }

  get id() {
    return this._id;
  }
};

export default {
  name       : 'App',
  components : {VueDrag},
  data() {
    return {
      itemList : []
    };
  },
  created() {
    this.addItem();
  },
  methods : {
    addItem() {
      this.itemList.push(new Item());
    }
  }
};
</script>

<style>
</style>
