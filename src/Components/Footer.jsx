import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

function Footer() {
  return (
      <div>
          <Row className='mt-5 d-flex align-items-center justify-content-between width-100 bg-dark'>
              <Col className='text-center border border-dark' lg={4}>
                  <h6>   <img
                      alt=""
                      src="https://icons.iconarchive.com/icons/ahdesign91/media-player/512/Adobe-Media-Player-icon.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top me-1 "
                  />{' '}
                     <p style={{ color: 'orange',marginTop:'2px' }}><i >Media Player</i></p> </h6>
                  <div style={{ textAlign: 'justify', margin: '5px', padding: '5px',color:'lightblue',fontStyle:'italic' }}><p>Media player is a software application used to play audio and video files on electronic devices. Allowing users to enjoy multimedia content seamlessly. Many media players also offer features like playlists, subtitles, and streaming capabilities for enhanced user experience.</p></div></Col>

                  <Col lg={4}>
<h6 style={{ textAlign: 'center', color: 'orange' }}>Contact Us</h6>
<div className="contact d-flex flex-column align-items-center mt-3">
  <input
    type='text'
    placeholder='Enter your Email'
    className='form-control mb-2'
    style={{
      borderRadius: '20px',
      width: '80%',
      maxWidth: '300px'
    }}
  />
  <Button variant="dark">Submit</Button>
</div>
<div className='final d-flex justify-content-center gap-2 mt-3'>
<i className="fa-brands fa-whatsapp fa-xl text-white"></i>
<i className="fa-brands fa-instagram fa-xl text-white"></i>
<i className="fa-brands fa-x-twitter fa-xl text-white"></i>
<i className="fa-brands fa-linkedin fa-xl text-white"></i>
<i className="fa-brands fa-facebook fa-xl text-white"></i>
</div>

</Col>
              <Col style={{height:'220px'}} className=' border border-dark  d-flex justify-content-between ' lg={4}><h6 style={{color:'orange'}}>Links:</h6>
            <div style={{display:'flex',flexDirection:'column', gap: '30px',marginTop:'20px'}}>
              <a style={{textDecoration:'none',color:'lightblue',fontStyle:'italic'}} href='http://localhost:5174/home'>Home</a>
             <a style={{textDecoration:'none',color:'lightblue',fontStyle:'italic'}}  href='http://localhost:5174/watch-history'>Watch History</a>
             <a style={{textDecoration:'none',color:'lightblue',fontStyle:'italic'}}  href='http://localhost:5174/'>Landing Page</a></div> 
            <div style={{marginTop:'1px'}} className='   d-flex justify-content-between '><h6 style={{color:'orange',marginTop:'3px',margin:'2px'}}>Guides:</h6>
            <div style={{display:'flex',flexDirection:'column',color:'lightblue', gap:'14px',marginTop:'20px'}}>
              <p><i>React</i></p>
              <p><i>ReactBootstrap</i></p>          
              <p><i>Bootswatch</i></p>       </div> </div>
            </Col>
          </Row>
          <Row className='mt-1 d-flex align-items-center justify-content-between width-100 bg-secondary'><Col className="text-center text-warning" lg={12}>Copyright@Mediaplayer distributions2025pvtlimited</Col></Row>
      </div>
  )
}

export default Footer
