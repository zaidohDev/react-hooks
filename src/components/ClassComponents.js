import React, { Component } from 'react'

export default class ClassComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    document.title = this.state.count
  }

  componentDidUpdate(prevProps, prevState){

    if (prevState.count !== this.state.count){
      document.title = this.state.count
    }
  }

  handleClick = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>add + 1</button>
      </div>
    )
  }
}