import { Component } from "react";

class Projects extends Component {
  
  render() {
    return (
      <div className='projects'>
        {this.props.item.title} 
        <p>
          {this.props.item.description}
        </p>
        <a href={this.props.item.link}>Click here for more info</a>        <br></br>
        <button 
        onClick={this.props.handleClick.bind(this, this.props.item.id)}>
          Vote
          </button>
        {this.props.item.votecount}
      </div>
    );
  }
}

export default Projects;
