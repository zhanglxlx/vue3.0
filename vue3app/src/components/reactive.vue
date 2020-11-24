<template>
  <div id="reactive">
    <h2>reactive的理解</h2>
    {{state}} <br>
    对象 {{state.age}}<br>
    数组对象 {{state}} <br>
    时间对象 {{state.time}} <br>
      <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/***
 * 什么是reactive？
 *  reactive是vue3.0中提供的实现响应式数据的方法
 * 在vue2.0中响应式数据是通过defineProperty来实现
 * 而在vue3中响应式数据是通过ES6的proxy来实现
 * reactive注意点：
 *  reactive参数必须是对象（json/arr）
 * 如果给reactive传递了其他对象
 * 默认情况下修改对象，界面不会自动更新
 * 如果想更新，可以通过重新赋值的方式
 */
import {reactive} from 'vue'
  export default {
    name:"reactive",
    setup(){
      // 创建一个响应式数据
      // 本质：就是将传入的数据包装成一个
      // let state=reactive(123)
      // let state=reactive({
      //   age:123
      // });
      // let state=reactive([1,3,5])
      let state=reactive({
        time:new Date()
      })
      function myFn(){
        // state=666
        //state.age=666;//由于在创建响应式数据的时候传递的不是一个对象，所以无法实现响应式
        // state[0]=666
        state.time.setDate(state.time.getDate()+1)
        console.log(state)
      }
      return {state,myFn}
    }
  }
</script>

<style  scoped>

</style>