//利用Flux去修改数据
//第一步引入派遣者
import {Dispatcher} from 'flux'
//配合事件触发器使用
//引入事件触发器
import eventEmitter from 'events'
//创建一个子类 继承事件触发器的所有属性和方法
class State extends eventEmitter{
    constructor(){
        super() 
        this.msg ='最美不是下雨天'
        this.info='从前从前，有个爱你很久'
    }
}

//实例子类
let state = new State() 
console.log(state,'zilei')

//第二、实例化Dispatcher
let dispatcher = new Dispatcher()
// console.log(dispatcher,'dispatcher')
//第三、创建一个数据源 state
// const state={
//     msg:'最美不是下雨天'
// }


//行动注册，派遣者注册行动
dispatcher.register((action)=>{
    //action 触发行动获取的参数
    // console.log(a,'？？？')
    //你可能有大量的行动，如何区分行动，可以利用条件判断
    switch (action.type) {
        case "changeMsg":
            state.msg = '是和你一起躲过的屋檐'
            //创建一个事件触发
            state.emit('change')
            console.log(state.msg,'bian')
            break;
        case 'CHANGE_INFO':
            state.info = action.payload
             //创建一个事件触发
             state.emit('change')
        default:
            break;
    }
})

//四、 导出变量
export default {
    state,
    dispatcher
}