<template>
  <div id="ShallowRef">
    <h2>ShallowRef 组件</h2>
    <p>shallowRef: {{state1.a}}</p> 
    <p>shallowRef: {{state2.value.a}}</p> 
  </div>
</template>

<script>
import {shallowReactive} from 'vue';
import {shallowRef} from 'vue'
  export default {
    name:"ShallowRef",
    setup(){
      //ref-->reactive
      //ref(10) -->reactive({value:"10"})
      //shallowRef ->shallowReactive
      // shallowRef(10) ->shallowReactive({value:10})
      // 所以如果是通过shallowRef创建的数据，他监听的是.value的变化
        // 因为低层本质上value才是第一层
       let state1=shallowRef({
        a:'a',
        gf:{
          b:'b',
          f:{
            c:'c',
            s:{
              d:'d'
            }
          }
        }
      });
      let state2=shallowReactive({
        value:{
          a:'a',
          gf:{
            b:'b',
            f:{
              c:'c',
              s:{
                d:'d'
              }
            }
          }
        }
      });
      function myFn(){

      }
      return {state1,state2,myFn}
    }
  }
</script>

<style scoped>

</style>