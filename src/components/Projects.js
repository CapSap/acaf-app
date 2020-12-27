import { Component } from "react";
import "../App.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="project-title">
          {this.props.item.title}
        </div>
        <div className="vote-count">Vote count: {this.props.item.votecount}</div>

        <p className="project-description">{this.props.item.description}</p>
        <a href={this.props.item.link}>Read more</a> <br></br>
        <button onClick={this.props.handleClick.bind(this, this.props.item.id)}>
          Vote
        </button>
      </div>
    );
  }
}

export default Projects;
