import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
// import { Container, Row, Col, Image } from 'react-bootstrap';
import pramod1 from '../components/Image/pramod.jpg';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body scroll-y ">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Pramod Ray</h2>
            <img
              src={pramod1}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>To secure a position where i can efficiently contribute my skills and ability to  the growth of the organization and build my professional career</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+91) 938 007 7253
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (+91) - 848 309 4849 
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    pramodray0215@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem className='margin-bottom-100'>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    pramodray0215@gmail.com
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
