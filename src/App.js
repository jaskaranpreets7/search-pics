import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import axios from 'axios';
import ImageList from './Components/ImageList';

class App extends Component {

  state = { images : []}

  onSearchSubmit = async (term) =>{

    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: { 
        query: term
      },
      headers:{
        Authorization: 'Client-ID d20004307674a9cd5bf23d9b47c1bb2526b6a77305fe49fa5afc432dc28c1518'
      }
    })

    this.setState({images:response.data.results})
    
  }
  
  render() {
    return (
      <div className="ui container" style={{marginTop:'10PX'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
