import React,{Component} from "react";

export class SearchForm extends Component{

    constructor(){
        super();
        this.state={
            fname: 'Ram',
            users:['Shyam', 'John']};
    }
    render(){
        return (
            <div>
                <input value= {this.state.fname} onChange={this.upadateModel.bind(this)}></input>
                <button onClick={()=>{
                    this.state.users.push(this.state.fname)
                    this.setState({
                        users:this.state.users
                    })
                }}>Search</button>
                <ol>
                    {this.state.users.map((user)=><li>{user}</li>)}
                </ol>
            </div>
        )
    }
    upadateModel(event){
        console.log(event.target.value);
        this.setState({
            fname: event.target.value
        }, ()=>console.log(this.state))
    }

}