/***
 * shallowRef shallowReactive  非递归监听
 *  reactive ref   递归监听
 *  shallowReadonly
 *  readonly
 */

function shallowRef(value) {
  return shallowReactive(obj, { value: value })
}
// shallowReactive
// function shallowReactive(obj) {
  // shallowReadonly
function shallowReadonly(obj) {
  return new Proxy(obj, {
    get(obj, key) {
      return obj[key]
    },
    set(obj, key, value) {
      // obj[key] = value;
      // console.log("更新ui界面")
      // return true;
      console.warn(`message:${key}是只读的，不能赋值`)
    }
  })
}
// reactive
// let obj={name:"lnj",age:18};

function reactive(obj) {
  if (typeof obj === 'object') {
    if(obj instanceof Array){
      // 如果是一个数组，那么取出数组中的每一个元素，判断每一个元素有是否又是一个兑现个，如果又是一个对象，那么也需要包装成Proxy
      obj.forEach((item,index)=>{
        if(typeof item=='object'){
          obj[index]=reactive(item)
        }
      })
    }else{
      // 如是一个对象，那么取出对象属性的取值，判断对象属性的取值是否又是一个对象，那么也需要包装成proxy
      for(let key in obj){
        let item =obj[key];
        if(typeof item ==='object'){
          obj[key]=reactive(item)
        }
      }
    }
    return new Proxy(obj, {
      get(obj, key) {
        return obj[key]
      },
      set(obj, key, value) {
        obj[key] = value;
        console.log("更新ui界面")
        return true;
      }
    })
  } else {
    console.warn({ message: `${obj}is not object` })
  }
}
let obj = {
  a: 'a',
  gf: {
    b: 'b',
    f: {
      c: 'c',
      s: {
        d: 'd'
      }
    }
  }
};
/**
let state=shallowReactive(obj);
state.a="1"
state.gf.b="2"
state.gf.f.c="3"
 */
// let state = shallowRef(obj)
// state.value.a="1"
// state.value.gf.b="2"
// state.value.gf.f.c="3"
// state.value = {
//   a: 1,
//   gf: {
//     b: 2,
//     f: {
//       c: 3,
//       s: {
//         d: 4
//       }
//     }
//   }
// }
// let state=reactive(obj)
// state.a="1"
// state.gf.b="2"
// state.gf.f.c="3"
// let arr=[{id:1,name:'zhangsan'},{id:2,name:'ls'}]
// let state=reactive(arr)
// state[0].name='wangw'
// state[1].name='aaa'
let state=shallowReadonly(obj)
state.a=1;

