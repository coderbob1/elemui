<template>
  <button class="bo-button" :class="[`bo-button-${type}`,{'is-plain':plain,'is-round': round}]"
  @click="btnClick">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "BoButton",
  props:{
    type:{
      type:String,
      default:"default"
    },
    plain:{
      type:Boolean,
      default: false
    },
    round:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    btnClick(e){
      this.$emit('click',e)
    }
  }
}
</script>

<style scoped>
.bo-button{
  display: inline-block;
  background: #ffffff;
  text-align: center;
  line-height: 1;
  border: 1px solid #dcdfe6;
  font-weight: 500;
  margin-right: 10px;
  transition: 0.1s;
  box-sizing: border-box;
  padding: 12px 18px;
  font-size: 14px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  color: black;
}
.bo-button:hover{
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.bo-button-normal{
  background: lightskyblue;
  color: #fff;
}
.bo-button-normal:hover{
  background: #66b1ff;
  background-color: #66b1ff;
  color: #fff;
}
/*plain属性*/
.bo-button.is-plain{
  background: #ffffff;
  border-color: #dcdfe6;
  color: black;
}
.bo-button.is-plain:hover{
  color: #409eff;
  border-color: #c6e2ff;
}
.bo-button-normal.is-plain{
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.bo-button-normal.is-plain:hover{
  background: lightskyblue;
  color: #fff;
}
/*round属性*/
.bo-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}
</style>