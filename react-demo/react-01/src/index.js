import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';


  //渲染单个列表
  class Lesson extends Component {
    render () {
      const { list } = this.props;
      //const styl = {backgroundImg:'url('+list.img+')'};
      //console.log(styl);
      return (
          //以背景图片的形式插入图片
        <div style={{backgroundImage: `url(${list.img})`}} className="box">
            <div className= 'distance'>{list.distance}km</div>
            <div className= 'box-content'>
                <h2>{list.name}</h2>
                <p>
                    <span>最多{list.number}人</span>
                    <i>·</i>
                    <span>{list.local}</span>
                </p>
            </div>
            <div className= 'price'>{list.price}元/小时</div>
        </div>
      )
    }
  }
  
  class Lessons extends Component {
      constructor(){
          super();
          //模拟后台传入数据
          this.lists = [
            {distance:'1',name:'Herely3号空间',number:'80',local:'江南大道',price:'72-120',img:'http://www.0564zs.com/uploads/case/nbsj_20061112173536774.jpg'},
            {distance:'2.5',name:'Herely2号空间',number:'80',local:'江南大道',price:'72-120',img:'http://www.0564zs.com/uploads/case/nbsj_20081121224423672.jpg'},
            {distance:'3',name:'Herely3号空间',number:'80',local:'江南大道',price:'72-120',img:'http://www.0564zs.com/uploads/case/nbsj_20081121224250405.jpg'}
          ]

      }
    render () {
      //通过map函数渲染列表  
      return (
        <div>
          {this.lists.map((list,i) => <Lesson list={list} key={i}/>)}
        </div>
      )
    }
  }

ReactDOM.render(
    <Lessons />
, document.getElementById('root'));


registerServiceWorker();
