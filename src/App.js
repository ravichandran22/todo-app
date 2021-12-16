import React from 'react';
import './App.css';
import List from './components/List';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.add = this.add.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  add(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const list = [...this.state.list, newItem];
    this.setState({
      list: list,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.list.filter(list =>
      list.key!==key);
    this.setState({
      list: filteredItems
    })

  }
  setUpdate(text,key){
    console.log("list:"+this.state.list);
    const list = this.state.list;
    list.map(list=>{      
      if(list.key===key){
        console.log(list.key +"    "+key)
        list.text= text;
      }
    })
    this.setState({
      list: list
    })
    
   
  }
 render(){
  return (
    <div className="App">
        <form id="form" onSubmit={this.add}>
          <input type="text" value= {this.state.currentItem.text} onChange={this.handleInput}/>
          <button type="submit">Submit</button>
        </form>
        <h2 style={{marginLeft: "80px"}}>Todo List</h2>
        <p>{this.state.list.text}</p>
      
          <List items={this.state.list} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
    </div>
  );
 }
}


export default App;