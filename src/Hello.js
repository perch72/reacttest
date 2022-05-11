import React from 'react'
import InputData from './InputData' 
const  range = n => Array.from({length: n}, (value, key) => key);
  
class DialogContent extends React.Component{
    render(){
      return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="inputText" />
          <input type="submit" />
          <button onClick = {this.props.closeDialog}>Cancel</button>
        </form>
      </div> 
      ) 
    }
  };
  
export default class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state={cm:0,inch:0}
    }
    inchChanged(e){
        const inchValue = e.value;
        const cmValue = inchValue * 2.25;
        this.setState( {cm:cmValue,inch:inchValue});
        console.log(this.state);
    }
    cmChanged(e){
        const cmValue =  e.value;
        const inchValue = cmValue * 2.25;
        this.setState( {cm:cmValue,inch:inchValue});
        console.log(this.state);

    }
    openDialog(e){
        e.preventDefault();
        
        var $dialog = $('<div>').dialog({
            autoOpen: true,
          title: 'Example Dialog Title',
          width: 400,
          
          close: function(e){
            //React.unmountAndReleaseReactRootNode(this);
           // $( this ).remove(); 
          }, 
          buttons: {
			"닫기": function() {
                $dialog.dialog('close');}
            }
        }); 
      }
    render(){
        return (
        <div>
        Inch : <InputData title='Inch' onChange={(e)=>this.inchChanged(e)} value={this.state.inch}/><br/> 
                  Cm : <InputData title='Cm' onChange={(e)=>this.cmChanged(e)} value={this.state.cm}/><br/> 
                  <button onClick={(e)=>this.openDialog(e)}>다이알로그</button>

        </div>)
    }
} 