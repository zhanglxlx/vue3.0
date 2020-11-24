<template>
  <div id="ref">
    <h2>ref理解</h2>
    <p>{{count}}</p> 
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/*
*1 什么是ref
* ref和reactive一样也是用来实现响应式数据的方法
* 由于reactive必须传递一个对象，所以导致在企业开发中
* 如果只想让某个变量实现响应式的时候会非常的麻烦
* 2 ref本质
*  ref低层的本质其实还是reactive
*  当给ref函数传递一个值之后，ref函数系统会自动根据我们给ref传入的将它转换成ref(xx) ->reactive({value:xx})
* 3 ref注意点：
*  在vue中使用ref的值不会通过value获取
*  在js中使用ref的值必须通过value获取
 */
 import {ref} from 'vue'
 
  export default {
    name:"ref",
    setup(){
      let count =ref(0)
      function myFn(){
        count.value=count.value++
        console.log(count.value++)
      }
      return {count,myFn}
    }
  }
</script>

<style scoped>

</style>