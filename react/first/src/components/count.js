import React, { Component } from 'react'
 class count extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }
  render() {
    return (
        <>
      <div>count-{this.state.count}</div>
      <button onClick={()=>this.increment()}> incre</button>
      </>
    )
  }
}

export default count