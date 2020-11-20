<template>
  <!-- <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p> -->
  <p>
    {{count}}
  </p>
  <button @click="myFn">按钮</button>
  <form>
    <input type="text" v-model="state1.stu.id">
    <input type="text" v-model="state1.stu.name">
    <input type="text" v-model="state1.stu.age">
    <input type="submit" @click="addStu">
  </form>

  <ul>
    <li v-for="(stu,index) in state.stus" :key="stu.id" @click="remStu(index)">{{stu.id}}---------{{stu.name}}---------{{stu.age}}</li>
  </ul>
  <hr>
</template>

<script>
import {ref,reactive} from 'vue'
// 3种写法
// 导入方法文件
import useAddStu from './add'
import useRemoveStu from './remove'
export default {
  name: 'HelloWorld',
  //setup函数是组合api的入口函数
  setup(){
    //定义了一个名称叫count的变量，这个变量的初始值为0
    // 这个变量发生变化之后，vue会自动更新ui
    let count=ref(0);
    // 在组合api中，如果想定义方法，不用定义到methods中，直接定义即可
    function myFn(){
      console.log(count.value++)
    }
    // 注意点：在组合api中定义的变量或方法，需要再外界使用，必须通过return {xxx，xxxx}暴露出去
    // ref函数注意点;
      // ref函数只能监听简单类型的变化，不能监听负责类型的变化（对象、数组）
      // 使用reactive监听负责的变化
    let {state,remStu}=useRemoveStu();
    let {state1,addStu}=useAddStu(state);
  //   let state=reactive({
  //     stus:[
  //       {id:1,name:"zhangsan",age:10},
  //       {id:2,name:"zhang1san",age:60},
  //       {id:3,name:"zhang2san",age:50},
  //       {id:4,name:"zhang3san",age:40}
  //     ],
  //     stu:{
  //       id:"",
  //       name:"",
  //       age:""
  //     }
  //   })
  //   1种写法移除
  //   function remStu(index){
  //     state.stus=state.stus.filter((stu,idx)=> idx!==index);
  //   }
  //   1种写法添加
  //   function addStu(e){
  //     e.preventDefault();
  //     const stu=Object.assign({},state.stu);
  //     console.log(stu)
  //     state.stus.push(stu);
  //     state.stu.id="";
  //     state.stu.name="";
  //     state.stu.age="";

  //   }
    return {count,myFn,state,state1,remStu,addStu}
  },
}
// 2种写法移除
// function useRemoveStu(){
//   let state=reactive({
//     stus:[
//       {id:1,name:"zhangsan",age:10},
//       {id:2,name:"zhang1san",age:60},
//       {id:3,name:"zhang2san",age:50},
//       {id:4,name:"zhang3san",age:40}
//     ],
//   })
//   function remStu(index){
//       state.stus=state.stus.filter((stu,idx)=> idx!==index);
//   }
//   return {state,remStu}
// }
// 2种写法添加
// function useAddStu(state){
//   let state1=reactive({
//     stu:{
//         id:"",
//         name:"",
//         age:""
//       }
//   })
//   function addStu(e){
//     e.preventDefault();
//     const stu=Object.assign({},state1.stu);
//     console.log(stu)
//     state.stus.push(stu);
//     state1.stu.id="";
//     state1.stu.name="";
//     state1.stu.age="";
//   }
//   return {state1,addStu}
// }
</script>
