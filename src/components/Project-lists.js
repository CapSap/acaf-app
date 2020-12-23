import { Component } from "react";
import Projects from "./Projects";
import "../App.css";

class Projectlist extends Component {
  state = {
    project: [
      {
        id: 1,
        title: "Project Green Kangaroo",
        description:
          "Project Green Kangaroo is a sustainable investment solution which allows investors to align their financial objectives with net zero emission targets, while supporting the financing of low emissions energy transition.",
        link: "https://australianclimatetransition.bnpparibas.com/#",
        votecount: 0,
      },
      {
        id: 2,
        title: "Fight For Our Reef",
        description:
          "Our beautiful Great Barrier Reef is one of the world’s most biologically diverse ecosystems - home to turtles, corals and clownfish like Nemo. But its future is threatened by colossal new coal mines, carbon pollution and creeping industrialisation.",
        link: "https://www.marineconservation.org.au/fight-for-our-reef/",
        votecount: 0,
      },
      {
        id: 3,
        title: "Project Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "www.inpellentesquemassa.org",
        votecount: 0,
      },
    ],
  };

  handleClick = (id) => {
    this.setState({
      project: this.state.project.map((x) => {
        if (x.id === id) {
          x.votecount += 1;
        }
        return x;
      }),
    });
  };

  render() {
    return (
      <div>
        <div className="project-head-title">Our Projects:</div>
        <div className="project-container">
          {this.state.project.map((x) => (
            <div className="projects">
              <Projects item={x} handleClick={this.handleClick} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projectlist;
