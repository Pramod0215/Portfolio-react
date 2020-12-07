import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import pramod1 from '../components/Image/pramod.jpg';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid scroll-y">
          <Cell col={12}>
            <img
              src={pramod1}
              alt="Pramod"
              style={{width:"200px" ,height:"200px" ,marginTop:'70px', borderRadius:'50%'}}
              // className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>ReactJs | JavaScript | HTML/CSS | Python | Django | PostgreSql | Mysql | Java/C#</p>

        <div className="social-links margin-bottom-100">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/pramod-ray-2b7662192/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Pramod0215/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
