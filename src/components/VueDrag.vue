<template>
    <div class="vue-drag-wrapper"
        :style="{ top, left }"
        @mousedown="handleStartDrag"
        @touchstart="handleStartDrag">
        <slot></slot>
    </div>
</template>

<script>
const userSelectNone = new class {
  constructor() {
    this.defaultUserSelect = 'auto'
    this.defaultMozUserSelect = 'auto'
    this.defaultMsUserSelect = 'auto'
    this.defaultWebkitUserSelect = 'auto'
  }

  enable() {
    this.defaultUserSelect = document.body.style.userSelect
    this.defaultMozUserSelect = document.body.style.mozUserSelect
    this.defaultMsUserSelect = document.body.style.msUserSelect
    this.defaultWebkitUserSelect = document.body.style.webkitUserSelect
    document.body.style.userSelect = 'none'
    document.body.style.mozUserSelect = 'none'
    document.body.style.msUserSelect = 'none'
    document.body.style.webkitUserSelect = 'none'
  }

  disable() {
    document.body.style.userSelect = this.defaultUserSelect
    document.body.style.mozUserSelect = this.defaultMozUserSelect
    document.body.style.msUserSelect = this.defaultMsUserSelect
    document.body.style.webkitUserSelect = this.defaultWebkitUserSelect
  }
}()

const Position = class {
  constructor() {
    this._prevY = 0
    this._prevX = 0
    this._isDragging = false
  }

  set prevY(val) {
    this._prevY = parseInt(val, 10)
  }

  set prevX(val) {
    this._prevX = parseInt(val, 10)
  }

  set isDragging(val) {
    this._isDragging = !!val
  }

  get prevY() {
    return this._prevY
  }

  get prevX() {
    return this._prevX
  }

  get isDragging() {
    return this._isDragging
  }
}

export default {
  data() {
    return {
      x        : 0,
      y        : 0,
      position : new Position()
    }
  },
  computed : {
    top() {
      return `${this.y}px`
    },
    left() {
      return `${this.x}px`
    }
  },
  created() {
    document.addEventListener('pointermove', this.handleDoDrag.bind(this))

    document.addEventListener('mouseup', this.handleStopDrag.bind(this))
    document.addEventListener('touchend', this.handleStopDrag.bind(this))
  },
  methods : {
    handleStartDrag(e) {
      this.$emit('start', e)
      userSelectNone.enable()

      this.position.isDragging = true
      this.position.prevY = e.clientY
      this.position.prevX = e.clientX
    },
    handleStopDrag(e) {
      this.position.isDragging = false
      this.$emit('stop', e)
    },
    handleDoDrag(e) {
      if (!this.position.isDragging) {
        return
      }

      this.$emit('dragging', e)
      userSelectNone.disable()

      const diffY = e.clientY - this.position.prevY
      const diffX = e.clientX - this.position.prevX

      this.position.prevY = e.clientY
      this.position.prevX = e.clientX

      this.y += diffY
      this.x += diffX
    }
  },
  destroyed() {
    document.removeEventListener('pointermove', this.handleDoDrag.bind(this))

    document.removeEventListener('mouseup', this.handleStopDrag.bind(this))
    document.removeEventListener('touchend', this.handleStopDrag.bind(this))
  }
}
</script>

<style scoped>
.vue-drag-wrapper {
    position: absolute;
}
</style>
