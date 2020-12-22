import { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        {this.props.item.title} 
        <br></br>
        
        <button>Vote</button>
        {this.props.item.votecount}
      </div>
    );
  }
}

export default Projects;
