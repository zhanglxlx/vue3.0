<template>
  <div id="toRaw">
    <h2>toRaw方法</h2>
    <p>{{state}}</p>
    <button @click="myFn">toraw </button>
  </div>
</template>

<script>
/**
 * 1.toRaw 
 * 从reactive或ref中得到原始数据
 * toRaw作用
 * 做一些不想被监听的事情，（提升性能）
 */
import {reactive,toRaw,ref} from 'vue'

  export default {
    name:"toRaw",
    setup(){
      let obj={name:"lnj",age:18};
      /**
       * ref 、reactive 数据类型的特点：
       *  每次修改都会被追踪，都会更新ui界面，但是这样其实是非常消耗性能
       * 所以如果我们有一些操作不需要追踪，不需要更新ui界面，那么这个时候我们就可以通过toRaw方法拿道他的原始数据
       * 对原始数据进行修改
       * 这样就不会诶追踪，这样就不会更新ui界面，这样性能就好了
       */
      // let state=reactive(obj)
      /**
       * ref 本质：reactive
       * ref（obj） ->reactive({value:obj})
       */
      let state=ref(obj)
      /**
       * 注意点：如果想通过toRaw拿道ref类型的原始数据（创建时传入的那个数据） 
       *  那么就必须明确的告诉toRaw方法，要获取的是.value的值
       *  因为经过vue处理之后，.value中保存的才是当初创建是传入的那个原始数据
       */
      // let obj2=toRaw(state)
      let obj2=toRaw(state.value)
      console.log(obj==state)//false
      console.log(obj==obj2)
      //state和obj的关系：
        // 引用关系，state的本质是一个proxy对象，在这个proxy对象中引用obj
      function myFn(){
        // 如果直接修改obj，那么是无法触发界面更新
        // 只有通过包装之后的对象来修改才会触发界面的更新
        // obj.name='zs'
        state.name="zhangsan"
        obj2.name="zhangsan"
        console.log(obj) //{name: "zhangsan", age: 18}
        console.log(state)//{name: "zhangsan", age: 18}
        console.log(obj2)
      }
      return {state,myFn}
    }
  }
</script>

<style scoped>

</style>