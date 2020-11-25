<template>
  <div id="toRef">
    <h2>toRef方法和toRefs方法</h2>
    <!-- <p>toRef:{{state}}</p> -->
    <p>toRefs:{{state}}</p>
    <button @click="myFn">toRef </button>
  </div>
</template>

<script>
/**
 * 1.toRef 用来创建响应式数据的
 * 2.toRefs 用来创建响应式数据的
 */
import {toRef,toRefs,ref} from 'vue'

  export default {
    name:"toRef",
    setup(){
      // let obj={name:"lnj"};
      let obj={name:"lnj",age:18};
      /**
       * ref(obj.name) =>ref(lnj) =>reactive({value:lnj})
      */
    //  ref ->复制
      // let state=ref(obj.name) //将name变成响应式数据
      // toRef的本质是引用
      /**
       * ref和toRef的区别：
       * ref-》复制修改响应式数据不会影响以前的数据
       * toRef-》引用，修改响应式数据会影响以前的数据
       * ref-》数据发生改变，界面就会自动更新
       * toRef-》数据发生改变，界面也不会自动更新
       * 
       * toRef的应用场景
       * 如果想让响应式数据和以前的数据关联起来，并且更新响应式数据之后还不想更新ui界面就可以使用toRef
      */
      // let state=toRef(obj,'name') //将name变成响应式数据
      // let state=toRef(obj,'name') //将name变成响应式数据
      let state=toRefs(obj) //会遍历对象中的所有属性
      console.log(state)
      function myFn(){
        // state.value="zhangsan"
        state.name.valule="zhangsan"
        state.age.valule=666
        /**
         * 结论：如果利用ref将某一个U对象中的属性边成响应式的数据
         * 我们修改响应式的数据是不会影响到原数数据
         */
        /***
         * 结论：如果利用toRe将某一个对象中的属性变成响应式的数据
         * 我们修改响应式的数据是会影响到原数数据的
         * 但是如果响应式的数据是通过toRef创建的，那么修改了数据并不会触发ui界面的更新
         */
        console.log(obj) //{name: "zhangsan"}
        console.log(state)
      }
      return {state,myFn}
    }
  }
</script>

<style scoped>

</style>