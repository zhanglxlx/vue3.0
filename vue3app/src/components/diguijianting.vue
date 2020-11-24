<template>
  <div id="isrefIsreactive">
    <h2>递归监听</h2>
    <p>reactive: {{state.a}}</p> 
    <p>reactive: {{state.gf.b}}</p> 
    <p>reactive: {{state.gf.f.c}}</p> 
    <p>reactive: {{state.gf.f.s.d}}</p> 
    <p>ref: {{state.a}}</p> 
    <p>ref: {{state.gf.b}}</p> 
    <p>ref: {{state.gf.f.c}}</p> 
    <p>ref: {{state.gf.f.s.d}}</p> 
    <button @click="myFn">按钮</button>
    <h2>非递归监听</h2>
    <p>shallowReactive: {{state.a}}</p> 
    <p>shallowReactive: {{state.gf.b}}</p> 
    <p>shallowReactive: {{state.gf.f.c}}</p> 
    <p>shallowReactive: {{state.gf.f.s.d}}</p> 
     <button @click="myFn">非递归监听</button>
    <p>shallowRef: {{state.a}}</p> 
    <p>shallowRef: {{state.gf.b}}</p> 
    <p>shallowRef: {{state.gf.f.c}}</p> 
    <p>shallowRef: {{state.gf.f.s.d}}</p> 
     <button @click="myFn">非递归监听</button>
  </div>
</template>

<script>
/**
 * 1.递归监听
 * 默认情况下，无论是通过ref还是reactive都是递归监听
 * 
 * 2.递归监听存在的问题.
 * 如果数据量比较大，非常消耗性能
 * 
 * 非递归监听
 * shallowRef 、 shallowReactive
 * 如何触发非递归监听属性更新界面？
 *  如果是shallowRef类型的数据可以通过triggerRef来触发
 * 
 * 应用场景
 *  一般情况下我们使用ref和reactive即可
 *  只有在需要监听的数据量比较大的时候，我么才使用shallowRef/shallowReactive
 * 
 */
import {shallowReactive, triggerRef} from 'vue';
import {shallowRef} from 'vue'
import {ref} from 'vue'
// import {reactive} from 'vue'
  export default {
    name:"isrefIsreactive",
    setup(){
      // let state=reactive({
      //   a:'a',
      //   gf:{
      //     b:'b',
      //     f:{
      //       c:'c',
      //       s:{
      //         d:'d'
      //       }
      //     }
      //   },

      // });
      // let state=ref({
      //   a:'a',
      //   gf:{
      //     b:'b',
      //     f:{
      //       c:'c',
      //       s:{
      //         d:'d'
      //       }
      //     }
      //   },

      // });
      //  let state=shallowReactive({
      //   a:'a',
      //   gf:{
      //     b:'b',
      //     f:{
      //       c:'c',
      //       s:{
      //         d:'d'
      //       }
      //     }
      //   },

      // });
      let state=shallowRef({
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
      // function myFn(){
      //   state.a='1';
      //   state.gf.b='2';
      //   state.gf.f.c='3';
      //   state.gf.f.s.d='4';
      // }
      // 注意点：如果是通过shallowref创建数据，那么vue监听的是.value的变化，并不是第一层的变化
      
      function myFn(){
      //   state.value={
      //   a:'1',
      //   gf:{
      //     b:'2',
      //     f:{
      //       c:'3',
      //       s:{
      //         d:'4'
      //       }
      //     }
      //   },
      // }
        // state.value.a='1';
        // state.value.gf.b='2';
        // state.value.gf.f.c='3';
        state.value.gf.f.s.d='4';
        // 注意点：vue3只提供了triggerRef方法，没有提供triggerReactive的方法
        // 所以如果是reactive类型的数据那么是无法主动触发界面更新的
        triggerRef(state)
        console.log(state.value)
        console.log(state.value.gf)
        console.log(state.value.gf.f)
        console.log(state.value.gf.f.s)
      }
      // function myFn(){
      //   // state.a='1';
      //   state.gf.b='2';
      //   state.gf.f.c='3';
      //   state.gf.f.s.d='4';
      //   console.log(state)
      //   console.log(state.gf)
      //   console.log(state.gf.f)
      //   console.log(state.gf.f.s)
      // }
      return {state,myFn}
    }
  }
</script>

<style  scoped>

</style>