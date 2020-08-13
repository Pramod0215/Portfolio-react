import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import pramod1 from '../components/Image/pramod1.jpg';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img
              src={pramod1}
              alt="pramod"
              style={{width:"200px" ,height:"300px"}}
              // className="avatar-img"
              />
             
            </div>

            <h2 style={{paddingTop: '2em'}}>Pramod Ray</h2>
            <h4 style={{color: 'grey'}}>Full-Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Full Stack Developer with proficiency in the following programs: React Js, Javascript, SQL, Python,  and Python, expertise with HTML and CSS seeks to establish a career as the Full Stack Developer for Real Time Skills Private Limited. I am very familiar with Web Application Architecture and have worked with a good number of successful development teams.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>#08 Arun Niwas, 1st cross, Tawrekere Bus stand Bengaluru-560029</p>
            <h5>Phone</h5>
            <p>(91) 8483094849</p>
            <h5>Email</h5>
            <p>pramodray0215@gmail.com</p>
            <h5>Web</h5>
            <p>GitHub: https://github.com/Pramod0215</p>
          
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>

          <h2>Experience</h2>
              <Experience
              startYear={'03/2020'}
              endYear={'current'}
              jobName="Full-stack Developer"
              jobDescription="Pedals Up
             Ahmedabad, Gujrat • 03/2020 - Current"
            />
            <Experience
              startYear={'09/2019'}
              endYear={'03/2020'}
              jobName="Full-stack Trainee"
              jobDescription="Real Time Skills Private Limited - Full Stack Engineer
              in Training
              Bengaluru, KA • 09/2019 - Current"
            />
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Visvesvaraya Technological University"
              schoolDescription="I have completed graduation in 2018 from Bheemanna Khandre Institute of Technology, Bhalki. My stream is Electronics and Communications Engineering. I got 57% marks."
               />
               
               <Education
                 startYear={2011}
                 endYear={2014}
                 schoolName=" Bihar School Examination Board"
                 schoolDescription="I have completed intermediate in 2014 from C.p Thakur collage, Naibatpur, Patna(Bihar) I got 57% marks."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              {/* <hr style={{borderTop: '3px solid #e22947'}} /> */}
              <h2>Skills</h2>
              <Skills
                skill="Reactjs"
                progress={80}
                />
                <Skills
                  skill="JavaScript/Ajax"
                  progress={70}
                  />
                    <Skills
                      skill="Html/CSS"
                      progress={70}
                      />
                      <Skills skill="Python/Django" progress={60}/>
                     
                      <Skills skill="PostgreSql/Mysql" progress={70}/>
                      <Skills skill="Java/c#" progress={30}/>


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
