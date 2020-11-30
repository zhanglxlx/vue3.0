<template>
  <div id="readonly">
    <h2>readonly方法使用</h2>
    <p>{{ state.name }}</p>
    <p>{{ state.attr.age }}</p>
    <p>{{ state.attr.height }}</p>
    <button @click="myFn">readonly</button>
  </div>
</template>

<script>
/**
* Readonly  返回一个ref对象，可以显示地控制依赖追踪和触发响应
 */
 import {readonly, isReadonly,shallowReadonly} from 'vue'
  export default {
    name:"customRef",
    //setup函数：只能是一个同步函数而不是一个异步函数
  setup(){
    //readonly ：用于创建一个只读的数据，并且是递归数据
    let state=readonly({name:"zhangsan",attr:{age:18,height:1.8}})
    //shallowReadonly ：用于创建一个只读的数据，但是不是递归只读，第一次不能修改，其他层可以修改
    // let state=shallowReadonly({name:"zhangsan",attr:{age:18,height:1.8}})
    // const和readonly的区别：
    // const ：赋值保护，不能重新赋值
    // readonly：属性保护，不能给属性重新赋值
    console.log(isReadonly(state))
    const value=123;
    const value1={name:"zhangsan",age:123}
    function myFn(){
      state.name="ls";
      state.attr.age=666;
      state.attr.height=1.98;
      // value=456;
      // console.log(value) //报错，不能被修改
      value1.name='ls';
      value1.age=456;
      console.log(value1)
    }
    return {state,myFn}
  } 
}
</script>

<style scoped>
</style>