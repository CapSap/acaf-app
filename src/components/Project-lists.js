import { Component } from "react";
import Projects from "./Projects";

class Projectlist extends Component {
  state = {
    project: [
      
      {
        id: 1,
        title: 'Project Green Kangaroo',
        decription: 'Project Green Kangaroo is a sustainable investment solution which allows investors to align their financial objectives with net zero emission targets, while supporting the financing of low emissions energy transition.',
        link: 'https://australianclimatetransition.bnpparibas.com/#',
        votecount: 0,

      },
      {
        id: 2,
        title: 'Fight For Our Reef',
        decription: 'Our beautiful Great Barrier Reef is one of the world’s most biologically diverse ecosystems - home to turtles, corals and clownfish like Nemo. But its future is threatened by colossal new coal mines, carbon pollution and creeping industrialisation.',
        link: 'https://www.marineconservation.org.au/fight-for-our-reef/',
        votecount: 0,

      },
      {
        id: 3,
        title: 'Project Lorem ipsum',
        decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'www.inpellentesquemassa.org',
        votecount: 0,

      }
    ]
  }
  render() {
  return (
    this.state.project.map((x) => (
      <Projects item={x}/>
    ))
  )
  }
}

export default Projectlist;