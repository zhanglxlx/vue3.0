/**
 * vue3 响应式数据本质
 * 在vue2.0中是通过defineProperty来实现响应式数据
 * 详见：手写vue全家桶视频
 * 在vue3.0中是通过proxy来实现响应式数据的
 */
// let obj={name:"lnj",age:18};
let arr=[1,3,5]
// let state=new Proxy(obj,{
let state=new Proxy(arr,{
  get(obj,key){
    console.log(obj,key) //{name:"lnj",age:18}
    return obj[key]
  },
  set(obj,key,value){
    console.log(obj,key,value)//{ name: 'lnj', age: 18 } name zhagnsan
    obj[key]=value;
    console.log("更新ui界面")
    return true;
  }
})
// console.log(state.name)
// state.name="zhagnsan";
console.log(state[1])
// console.log(state)
state.push(7);