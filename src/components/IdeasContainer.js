import React, { Component } from 'react'
import Idea from './Idea'
import axios from 'axios'
import update from 'immutability-helper'

class IdeasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/ideas.json')
    .then(response => {
      console.log(response)
      this.setState({ideas: response.data})
    })
    .catch(error => console.log(error))
  }


  render() {
    return (
      <div>
        <div>
          <button className="newIdeaButton"
           onClick={this.addNewIdea} >
            New Idea
          </button>
        </div>

        <div>
          {this.state.ideas.map((idea) => {
            return(<Idea idea={idea} key={idea.id} />)
          })}
        </div>
      </div>
    );
  }

  // Add new idea action
  addNewIdea = () => {
    axios.post(
      'http://localhost:3001/api/v1/ideas',
      { idea:
        {
          title: '',
          body: ''
        }
      }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

}

export default IdeasContainer
