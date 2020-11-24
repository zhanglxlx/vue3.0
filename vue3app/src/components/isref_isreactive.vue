<template>
  <div id="isrefIsreactive">
    <p>isref和isreactive的区别</p>
    <p>ref: {{age}}</p> 
    <p>reactive: {{age.value}}</p> 
    <button @click="myFn">按钮</button>
  </div>
</template>
<!-- ref和reactive的区别：
    如果在template里使用的是ref类型的数据，那么vue会自动帮我们添加.value
    如果在template里使用的是reactive类型的数据，那么vue不会自动帮我们添加.value 
    
    vue是如何决定是否需要添加.value的
    vue在解析数据之前，会自动判断这个数据是否是ref类型的，如果是就自动添加.value
    如果不是刘不自动添加.value

    vue是如何判断当前的数据是否是ref类型的
    通过当前数据的__v_ref来判断的
    如果有这个私有的属性，并且取值为true，那么就代表是一个ref类型的数据
    
    
  -->
<script>
import {isRef,isReactive} from 'vue'
// import {ref} from 'vue'
import {reactive} from 'vue'
  export default {
    name:"isrefIsreactive",
    setup(){
      // let age=ref(18);
      let age=reactive({value:18});
      function myFn(){
        console.log(isRef(age))
        console.log(isReactive(age))
      }
      return {age,myFn}
    }
  }
</script>

<style  scoped>

</style>