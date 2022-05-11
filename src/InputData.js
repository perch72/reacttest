import React from 'react' 
export default class InputData extends React.Component{
    constructor(props){
        super(props);
        this.state={value:this.props.value};
    }
    handleChange(e){
        const v = e.target.value;
        const newValue = v.replace(/[^0-9.]+/g,'');
        this.setState({value:newValue});
        if(this.props.onChange){
            this.props.onChange({
                target:this,
                value:newValue
            });
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({value:nextProps.value});
    }
    render(){
        return (<input type='text' onChange={e => this.handleChange(e)} value={this.state.value}></input>)
    }
}