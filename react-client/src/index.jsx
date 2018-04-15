import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import List from './components/List.jsx';
import Movie from './components/movie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
     movies: ""
    }
  }
  
  search(data){
    //console.log(data)
    $.ajax({
      type: "POST",
     url:"/movie",
     data: {name:data.name,type:data.type},
     dataType: "JSON",
      success: function(data) {console.log(data) }
    })
 }
  
  // componentDidMount() {
  //   $.ajax({
  //     url: '/movies', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (<div>
      <h1>Movie Must watch</h1>
      <Movie search ={this.search} movies={this.state.movies}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));