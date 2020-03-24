<template>
  <div class="container text-center">
    <h1> Vue Drag </h1>
    <button @click="addItem" class="btn btn-primary">add item</button>
    <div class="position-relative text-nowrap">
      <VueDragMove v-for="item in itemList" v-bind:key="item.id">
        <div class="card">
          <div class="card-body">
            Drag me.
          </div>
        </div>
      </VueDragMove>
    </div>
  </div>
</template>

<script>
import VueDragMove from './../src/components/VueDragMove';

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
  components : {VueDragMove},
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
