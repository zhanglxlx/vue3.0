<template>
  <div id="compositionOption">
    <p>{{name}}</p>
    <button @click="myFn">按钮</button>
    <p>{{age}}</p>
    <button @click="myFn1">年龄</button>
  </div>
</template>

<script>
/**
 * composition api 和option api 的混合使用
 * composition api的本质 （组合api 、注入api）
 * setup函数执行时机
 * beforeCreate：表示组件刚刚被创建出来，组件的data和methods还没有初始化好
 * setup：
 * Created ：表示组件刚刚被创建出来，并且组件的data和methods已经被初始化好
 * setup的注意点：
 *  由于在执行setup函数的时候，还没有执行creacted生命周期方法
 * 所以在setup函数中是无法使用data和methods
 *  由于我们不能再setup函数中使用data和methods，
 * 所以vue为了避免我们错误的使用，他直接将setup函数中this修改成了undefined
 *  setup函数只能是同步的，不能是异步的

*/
import {ref} from 'vue'
export default {
  name:"compositionOption",
  data:function(){ //option api的写法
    return{
      name:"zhangsan"
    }
  },
  methods:{
    myFn(){
      alert("aaa")
    }
  },
  setup(){//composition api的写法
    let age = ref(18)
    function myFn1(){
      age.value++
      // alert("bbb")
    }
    console.log(this)
    // console.log(this.name) //: Cannot read property 'name' of undefined
    // this.myFn1()
    return {age,myFn1}
  }
}
</script>

<style>

</style>