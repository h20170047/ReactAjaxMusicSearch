import React,{Component} from "react";
import SearchList from "./searchlist";

export default class SearchForm extends Component{

    constructor(){
        super();
        this.state={
            // user:[{fname:'Shyam', age:7}, {fname:'John', age:11}]};
           searchtrack:{tname: 'jagjit',tid:10},
        }
        this.updateModel= this.updateModel.bind(this);
    }
    render(){
        return (
            <div>
                <input name='tname' class="form-control" value= {this.state.searchtrack.tname} onChange={this.updateModel}></input><br/>
                <input name='tid' class="form-control" value= {this.state.searchtrack.tid} onChange={this.updateModel}></input><br/>
                <button class="btn btn-primary btn-block" onClick={()=>{
                    // this.updateModel();
                    {console.log('state searchtrack is ', this.state.searchtrack.tname  )}
                }}>Search</button>
                <SearchList />
            </div>
        )
    }
    updateModel(event){
        this.setState({
            searchtrack:Object.assign({}, this.state.searchtrack, { [event.target.name]:event.target.value})
        })
    }

}

// export default SearchForm;