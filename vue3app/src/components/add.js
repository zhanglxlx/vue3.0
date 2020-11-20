// 3种写法
import {reactive} from 'vue'
function useAddStu(state){
  let state1=reactive({
    stu:{
        id:"",
        name:"",
        age:""
      }
  })
  function addStu(e){
    e.preventDefault();
    const stu=Object.assign({},state1.stu);
    console.log(stu)
    state.stus.push(stu);
    state1.stu.id="";
    state1.stu.name="";
    state1.stu.age="";
  }
  return {state1,addStu}
}
export default useAddStu;