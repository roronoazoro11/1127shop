import React from "react";
//引入仓库
import Store from "../store";
import "../App.css";
class Home extends React.Component {
  componentDidMount(){
    //装一个事件监听
    Store.state.on('change',()=>{
      //重新渲染
      this.setState({})
    })
  }
    //修改方法
    changeMsg(){
        console.log(Store,'触发')
        Store.dispatcher.dispatch({
            type:'changeMsg',//行动名称
        })
        //重新渲染
        // this.setState({})
    }
  render() {
    console.log(Store, "仓库");
    return (
      <div className="box">
        <h1>我是组件一一一一</h1>
        <button onClick={this.changeMsg.bind(this)}>点我点我</button>
        <h2>接收到仓库的数据---{Store.state.msg}</h2>
        <hr/>
        <h2>接收到仓库的数据---{Store.state.info}</h2>
      </div>
    );
  }
}
export default Home;
