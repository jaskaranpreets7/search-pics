import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        term: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    }
    
  render() {
    return (
      <div className="ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
              <div className="field">
                  <label>Image Search</label>
                  <input 
                    type="text"
                    value={this.state.term} 
                    onChange={this.onInputChange}
                    />
              </div>
          </form>
      </div>
    )
  }
}

// Controlled and Uncontrolled 
// input form element is uncontroled element 

//Controlled components : no need to go to the DOM... dom will saye goo look to state to get the value
//Uncontrolled components : we have to go to the DOM to see the value 
//React driving our app and storge the information as well 

//this : this keyword inside in method on a class, we always look where we calling that method.. DON"T LOOK INSIDE THE METHOD
//this value is referring to left to the dot variable (car.drive())