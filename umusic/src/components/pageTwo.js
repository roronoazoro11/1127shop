import React from "react";
//引入仓库
import Store from "../store";
import "../App.css";
class Home extends React.Component {
  componentDidMount() {
    //装一个事件监听
    Store.state.on("change", () => {
      //重新渲染
      this.setState({});
    });
  }
  bian(payload){
    Store.dispatcher.dispatch({
      type:'CHANGE_INFO',
      payload
    })
  }
  render() {
    return (
      <div className="box">
        <h1>我是组件22222</h1>
        <h2>接收到仓库的数据---{Store.state.msg}</h2>
        <h3>{Store.state.info}</h3>
        <button onClick={this.bian.bind(this,'但风渐渐什么什么')}>巴拉巴拉小魔仙</button>
      </div>
    );
  }
}
export default Home;
