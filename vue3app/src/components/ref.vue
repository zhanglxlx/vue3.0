<template>
  <div id="ref">
    <h2>ref理解</h2>
    <p>{{count}}</p> 
    <button @click="myFn">按钮</button>
    <div ref="box"></div>
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

获取元素
在vue2.x红我们可以通过给元素添加ref=‘xxx’
然后再代码中通过refs.xxx的方法来获取元素
在vue3.0中我们也可以通过ref来获取元素
在vue3中想用那个生命周期，直接导入那个生命周期 如：onMounted
 */
 import {ref,onMounted} from 'vue'
 
  export default {
    name:"ref",
    /**
     * setup 在我们的beforeCreate和Create中间执行 
     */
    setup(){
      let count =ref(0)
      function myFn(){
        count.value=count.value++
        console.log(count.value++)
      }
      // 获取元素
      // console.log(this.$refs.box)
      let box=ref(null) //ref本质还是reactive({value:null})
      console.log(box.value)
      // 调用生命周期
      onMounted(()=>{
        console.log("onMounted",box.value)
      })
      return {count,myFn,box}
    }
  }
</script>

<style scoped>

</style>