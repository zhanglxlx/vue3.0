<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <ToRef/>
  <hr>
  <MarkRaw/>
  <hr>
  <ToRaw/>
  <hr>
  <ShallowRef/>
  <hr>
  <Diguijianting/>
  <hr>
  <IsrefIsreactive/>
  <hr>
  <Ref/>
  <hr>
  <Reactive/>
  <hr>
  <CompositionOption/>
  <hr>
  <h2>vue3.0的使用方法</h2>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <p>
    {{msg}}
  </p>
  <button @click="myFn">按钮</button>
  <form>
    <input type="text" v-model="stu.id" />
    <input type="text" v-model="stu.name" />
    <input type="text" v-model="stu.age" />
    <input type="submit" @click="addStu"/>
  </form>
  <ul>
      <li v-for="(stu,index) in stus" :key="stu.id" @click="remStu(index)"> {{stu.id}}-------{{stu.name}} ---{{stu.age}}</li>
  </ul>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CompositionOption from './components/Composition_option.vue'
import Reactive from './components/reactive.vue'
import Ref from './components/ref.vue'
import IsrefIsreactive from './components/isref_isreactive.vue'
import Diguijianting from './components/diguijianting.vue'
import ShallowRef from './components/shallowRef.vue'
import ToRaw from './components/toRaw.vue'
import MarkRaw from './components/markRaw.vue'
import ToRef from './components/toRef.vue'

export default {
  name: 'App',
  data:function(){
    return {
      msg:"直播鱼",
      stus:[
        {id:1,name:"zhangsan",age:10},
        {id:2,name:"zhang1san",age:60},
        {id:3,name:"zhang2san",age:50},
        {id:4,name:"zhang3san",age:40}
      ],
      stu:{
        id:"",
        name:"",
        age:""
      }
    }
  },
  methods:{
    myFn(){
      alert("www.166.com")
    },
    remStu(index){
      // 移除数据
      this.stus=this.stus.filter((stu,idx)=>idx !== index)  
    },
    addStu(e){
      // 添加数据
      // 阻止默认行为
      e.preventDefault();
      console.log(this.stu)
      const stu=Object.assign({},this.stu);
      this.stus.push(stu);
      this.stu.id="";
      this.stu.name="";
      this.stu.age="";
    }
  },
  components: {
    HelloWorld,
    CompositionOption,
    Reactive,
    Ref,
    IsrefIsreactive,
    Diguijianting,
    ShallowRef,
    ToRaw,
    MarkRaw,
    ToRef
  }
}
</script>
