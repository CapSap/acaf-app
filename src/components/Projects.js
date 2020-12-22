import { Component } from "react";

class Projects extends Component {
  
  render() {
    return (
      <div className='projects'>
        {this.props.item.title} 
        <br></br>
        <button onClick={this.props.handleClick.bind(this, this.props.item.id)}>
          Vote
          </button>
        {this.props.item.votecount}
      </div>
    );
  }
}

export default Projects;
