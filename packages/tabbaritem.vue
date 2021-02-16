<template>
  <div class="bo-tab-bar-item" @click="tabClick()">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "boTabBarItem",
  props:{
    path: String,
    activeColor:{
      type: String,
      default:'red'
    }
  },
  data(){
    return {
      // isActive:false
    }
  },
  methods:{
    tabClick(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  }
}
</script>

<style scoped>
.bo-tab-bar-item{
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.bo-tab-bar-item img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>
