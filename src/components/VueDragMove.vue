<template>
    <div class="vue-drag-move-wrapper"
        :style="{ top, left, position: 'absolute' }"
        @mousedown="handleStartDrag"
        @touchstart="handleStartDrag">
        <slot></slot>
    </div>
</template>

<script>
import Position from './../classes/position';
import userSelectNone from './../classes/user-select-none';

export default {
  data() {
    return {
      x        : 0,
      y        : 0,
      position : new Position()
    };
  },
  computed : {
    top() {
      return `${this.y}px`;
    },
    left() {
      return `${this.x}px`;
    }
  },
  created() {
    document.addEventListener('pointermove', this.handleDoDrag.bind(this));

    document.addEventListener('mouseup', this.handleStopDrag.bind(this));
    document.addEventListener('touchend', this.handleStopDrag.bind(this));
  },
  methods : {
    handleStartDrag(e) {
      this.$emit('start', e);
      userSelectNone.enable();

      this.position.isDragging = true;
      this.position.prevY = e.clientY;
      this.position.prevX = e.clientX;
    },
    handleStopDrag(e) {
      userSelectNone.disable();
      this.position.isDragging = false;
      this.$emit('stop', e);
    },
    handleDoDrag(e) {
      if (!this.position.isDragging) {
        return;
      }

      this.$emit('dragging', e);

      const diffY = e.clientY - this.position.prevY;
      const diffX = e.clientX - this.position.prevX;

      this.position.prevY = e.clientY;
      this.position.prevX = e.clientX;

      this.y += diffY;
      this.x += diffX;
    }
  },
  destroyed() {
    document.removeEventListener('pointermove', this.handleDoDrag.bind(this));

    document.removeEventListener('mouseup', this.handleStopDrag.bind(this));
    document.removeEventListener('touchend', this.handleStopDrag.bind(this));
  }
};
</script>
