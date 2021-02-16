<template>
  <div class="bo-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "boCheckBoxGroup",
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>