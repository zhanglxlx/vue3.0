// 3种写法
import {reactive} from 'vue'
function useRemoveStu(){
  let state=reactive({
    stus:[
      {id:1,name:"zhangsan",age:10},
      {id:2,name:"zhang1san",age:60},
      {id:3,name:"zhang2san",age:50},
      {id:4,name:"zhang3san",age:40}
    ],
  })
  function remStu(index){
      state.stus=state.stus.filter((stu,idx)=> idx!==index);
  }
  return {state,remStu}
}
export default useRemoveStu;