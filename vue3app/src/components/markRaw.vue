<template>
  <div id="MarkRaw">
    <h2>markRaw方法</h2>
    <p>{{state}}</p>
    <button @click="myFn">markRaw </button>
  </div>
</template>

<script>
/**
 * 1.MarkRaw 
 */
import {reactive,markRaw,ref} from 'vue'

  export default {
    name:"MarkRaw",
    setup(){
      let obj={name:"lnj",age:18};
      obj=markRaw(obj) //这个数据不要被追踪
      let state=reactive(obj)
     
      console.log(obj==state)//false
     
      function myFn(){
        state.name="zhangsan"
        console.log(obj) //{name: "zhangsan", age: 18}
        console.log(state)//{name: "zhangsan", age: 18}
      }
      return {state,myFn}
    }
  }
</script>

<style scoped>

</style>