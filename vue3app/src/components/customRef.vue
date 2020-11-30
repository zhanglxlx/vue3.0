<template>
  <div id="customRef">
    <h2>customRef方法使用</h2>
    <p>{{ age }}</p>
    <button @click="myFn">CustomRef</button>
    <ul>
      <li v-for="(state, index) in states" :key="state.id">
        {{ state.id }} ---------{{ state.name }}
      </li>
    </ul>
  </div>
</template>

<script>
/**
* customRef  返回一个ref对象，可以显示地控制依赖追踪和触发响应
 */
 import {customRef, ref} from 'vue'
//  自定义ref
 function myRef(value){
  //  track追踪   trigger触发
   return customRef((track, trigger)=>{
    //  发送网络请求
      fetch(value).then((res)=>{
        return res.json();
      }).then((data)=>{
        console.log(data)
        value=data;
        trigger() 
      }).catch((err)=>{
        console.log(err)
      })
     return {
       get(){
         track() //告诉vue这个数据是需要追踪变化的
         console.log('get',value)
        //注意点：不能再get方法中发送网络请求
        // 渲染界面-》调用get界面-》发送网络请求-》保存数据-》更新借钱-》调用get请求
         return value
       },
       set(newValue){
         console.log('set',newValue)
         value=newValue
         trigger() //告诉vue触发界面更新
       }
     }
   })
 }
  export default {
    name:"customRef",
    //setup函数：只能是一个同步函数而不是一个异步函数
  setup(){
    // let age = ref(18); //reactive({value:18})
      let age = myRef(18); //reactive({value:18})
      function myFn(){
        age.value+=1
      }
    // 异步操作的方法
    // let states=ref([])
    // fetch('../public/data.json').then((res)=>{
    //   return res.json();
    // }).then((data)=>{
    //   console.log(data)
    //   states.value=data
    // }).catch((err)=>{
    //   console.log(err)
    // })
    // return {age,myFn,states}
    //
    // 同步操作的方法
    let states=myRef("../public/data.json")
    return {age,myFn,states}
  } 
}
</script>

<style scoped>
</style>