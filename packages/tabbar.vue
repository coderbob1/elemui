<template>
  <div id="bo-tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "boTabBar"
}
</script>

<style scoped>
#bo-tab-bar{
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100,100,100,0.1);
}

</style>
