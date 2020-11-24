<template>
  <div id="toRaw">
    <p>{{state}}</p>
    <button @click="myFn">toraw </button>
  </div>
</template>

<script>
/**
 * 1.toRaw 
 */
import {reactive} from 'vue'

  export default {
    name:"toRaw",
    setup(){
      let obj={name:"lnj",age:18};
      let state=reactive(obj)
      console.log(obj==state)//false
      //state和obj的关系：
        // 引用关系，state的本质是一个proxy对象，在这个proxy对象中引用obj
      function myFn(){
        // obj.name='zs'
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