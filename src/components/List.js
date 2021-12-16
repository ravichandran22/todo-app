import React from 'react';
import './List.css';

function List(props){
    const list = props.items;
    const listItems = list.map(list =>
   {
       return <div className="list" key={list.key}>
     <p>
         <input type="text" id={list.key} value={list.text} onChange={(e)=>{
             props.setUpdate(e.target.value,list.key)}}/>
        <span>
       <i class="check icon" style={{color: "green"}} />
        <i style={{color: "red"}} class="close icon" onClick={() => {
            props.deleteItem(list.key)
        }}/>
        </span>
     </p>
     
    </div>})
    return <div>
        {listItems}
    </div>;
  }

  export default List;