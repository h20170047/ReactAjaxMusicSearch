import React,{Component} from "react";
import axios from 'axios';

export default class SearchList extends Component{

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            // https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music4/v4/3c/a5/1a/3ca51a7a-768f-5f56-f3a0-35a62b02da43/mzaf_8754338071729397064.plus.aac.p.m4a
            track:{tname: props.trackSearch,tid:10, musicUrl:''}, //some initial value. This field is used to search for track
            tracks:[]
        }
        this.updateModel= this.updateModel.bind(this);
      }
      componentDidMount () {
        // axios.post( 'https://itunes.apple.com/search?term=jack+johnson&limit=25' )
        var trackname= 'https://itunes.apple.com/search?term='+ this.state.track.tname;
        axios.post( trackname )
            .then( response => {
                this.setState({
                    tracks:response.data.results
                })
                // var currTracks = response.data.results;
                    // for (var i = 0; i < currTracks.length; i++)
                    //     console.log(currTracks[i].trackName, "\n");
                });
                // this.changeState();
                console.log("Url is "+trackname);
            } 

    render(){
        return (
            <div class="form-group">
                <audio controls autoPlay>
                <source src={this.state.track.musicUrl} ></source>
                </audio><br/>
                <input name='tname' class="form-control"  value= {this.state.track.tname} onChange={this.updateModel}></input><br/>
                Got {this.state.tracks.length} records<br/>
                <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Track Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Play</th>
                            </tr>
                        </thead>
                        {this.state.tracks.map(track => (
                            <tbody>
                            <tr>
                            <th scope="col">{track.trackName}</th>
                            <th scope="col">{track.trackPrice}</th>
                            <th scope="col"><img src={track.artworkUrl60}/></th>
                            <th scope="col"><button  name='musicUrl'  onClick={this.updateModel}
                            // {this.setMusic}
                            >Play</button></th> {/* type="button" class="btn" */}
                            </tr>
                        </tbody>
                                            ))}
                            
                </table>
            </div>
        )
    }
    updateModel(event){
        this.setState({
            track:Object.assign({}, this.state.track, { [event.target.name]:event.target.value})
        });
        // console.log(this.state.track.tname);
    }
    
    changeState(){
        this.setState({
            tracks:this.state.tracks
        });
    }
    setMusic(event){
        this.setState({
            musicUrl:event.target.value
        });
    }
    

}