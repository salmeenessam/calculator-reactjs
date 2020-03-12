import React from 'react';
import logo from './logo.svg';
import './App.css';

const OutputScreenRow = (props) => { 
  return ( 
    <div className="screen-row"> 
      <input type="text" readOnly value = {props.value}/> 
    </div> 
  ) 
}
const OutputScreen = (props) => { 
  return ( 
    <div className="screen"> 
      <OutputScreenRow value = {props.value.question}/> 
      <OutputScreenRow value = {props.value.answer}/> 
    </div> 
  ) 
} 

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
      
    </button>
    
  );
}

class Board extends React.Component {
   constructor(props){
    super(props);
    this.state = {
     question: '',
     answer:'',
    }
     
  }
  
   handleClick (value) {
    switch (value) {
      case '=':{
        var ans = '';
        ans= eval (this.state.question);
        this.setState({answer: ans , question: ''});
        break;
      }
      case 'C':{
        this.setState({question: '' , answer: ''});
        break;
    }
      case 'D':{
        var str= this.state.question;
        str= str.substr(0,str.length-1)
        this.setState({question: str});
        break
      }
      default:{
        this.setState({question: this.state.question += value})
        break
      }
        
    }
  }
  renderSquare(i) {
        return (<Square value={i}
        onClick={() => this.handleClick(i)} />);
    }

  render() {
    return (
      <div>
        <OutputScreen value={{ question: this.state.question, answer: this.state.answer }} />
        
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare('x')}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare('/')}
         
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare('+')}
        </div>
        <div className="board-row">
          {this.renderSquare('.')}
          {this.renderSquare(0)}
          {this.renderSquare('=')}
          {this.renderSquare('-')}
         
        </div>
        <div className="board-row">
          {this.renderSquare('')}
          {this.renderSquare('C')}
          {this.renderSquare('D')}
          {this.renderSquare('')}
        </div>
      </div>
    );
  }
}


// ========================================



export default Board;
