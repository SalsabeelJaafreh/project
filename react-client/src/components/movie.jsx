import React from 'react';
 // var movies = require('../database-mongo');
import $ from 'jquery';
class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states:{ name:'',
      type:''
    }
    }

    this.onChange=this.onChange.bind(this)
     this.search=this.search.bind(this)
     this.get=this.get.bind(this)


  }

  onChange (e) {
   
    var states=this.state.states
    var name=e.target.name;
    var value=e.target.value;
    states[name]=value;
    this.setState({states})
   
  }

  search() {
    this.props.search(this.state.states);
  }

  get(){
    //console.log(data)
    $.ajax({
      type: "GET",
     url:"/movies",
    // data: {name:data.name,type:data.type},
     // dataType: "JSON",
      success: function(data) {
        console.log(data) }
    })
 }
  

//   movies.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.send(data);
//     }
//   });
// });

  render() {
    return (<div>
      <h4 >Add your movies!</h4>
      Enter amovie name: <input name="name" value={this.state.name} onChange={this.onChange}/> <br></br>
            Enter amovie type: <input name="type" value={this.state.type} onChange={this.onChange}/>       
      
      <br></br>
      <button onClick={this.search}>Add movies</button>
      <br></br>

      <button onClick={this.get}>Show my movie list</button>
    </div>) 
  }
}

export default Movie;