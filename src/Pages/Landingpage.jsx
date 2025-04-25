import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

  const navigateByUrl = useNavigate()

  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={6}>
          <h1 style={{ color: 'green', fontSize: '40px' }}>Welcome to <span className='text-info'>Media Player</span></h1>
          <p className='text-warning'>media player is a software application used to play audio and video files on electronic devices. It supports various file formats like MP3, MP4, AVI, and more, allowing users to enjoy multimedia content seamlessly. Many media players also offer features like playlists, subtitles, and streaming capabilities for enhanced user experience.</p>

          <Button onClick={() => navigateByUrl('/home')}>Get Started</Button>

        </Col>
        <Col lg={5}>
        <img style={{ width: '480px', height: '510px' }} src='https://media.tenor.com/QTO6zbUExD4AAAAi/lp-single.gif'></img>
        </Col>
        <Col></Col>
      </Row>

      <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">

        <h5 className='text-info' style={{ fontSize: "40px" }}>Features</h5>
        <div className='cards mb-5 mt-5 d-flex  align-items-center justify-content-between w-100 '>
          <Card style={{ width: '18rem', backgroundColor: 'rgba(73, 89, 130, 0.58)', }}>
            <Card.Img variant="top" src="https://i.pinimg.com/474x/f3/fd/02/f3fd029316dc49ace89dabbd12dc9a95.jpg" width={'300px'} height={'300px'} />
            <Card.Body className='text-center'>
              <Card.Title><i className='text-info'>Managing Videos</i></Card.Title>
              <Card.Text className='text-secondary'>
            you can manage our videos like adding or deleting in mediaplayer. 
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', marginLeft: '20px', backgroundColor: 'rgba(73, 89, 130, 0.58)' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmtekvD21fevzDyDe8I_9ycNvMJ4qylvQgg&s" width={'300px'} height={'300px'} />
            <Card.Body className='text-center'>
              <Card.Title><i className='text-info'>Categorized Video</i></Card.Title>
              <Card.Text  className='text-secondary'>
               In mediaplayer you can catgorize the vedio according to their genre.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', marginLeft: '20px', backgroundColor: 'rgba(73, 89, 130, 0.58)' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/d6/68/ab/d668abc72809303852c27275e6a56775.gif" width={'300px'} height={'300px'} />
            <Card.Body className='text-center'>
              <Card.Title><i  className='text-info'>Watch History</i></Card.Title>
              <Card.Text className='text-secondary'>
                watch history section is available in this Mediaplayer.
              </Card.Text>

            </Card.Body>
          </Card>

        </div>

      </div>

      <div className="container border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center">

        <div className="col-lg-5">
          <h4 className='text-warning'>Simple, Powerful & Fast</h4>
          <h6 className='mb-5 mt-4'> <span className='text-warning'>Play Everything</span> :You can play every youtube videos in it.
   

          </h6>
          <h6 className='mb-5 mt-4'> <span className='text-warning'>Categorize Videos</span> : In this you can categorize the videos according to your likings.
          </h6>
          <h6 className='mb-5 mt-4'> <span className='text-warning'>Managing Videos</span> : In this the user can manage the videos ,you can add new videos and you can delete the ones you dont want, according to your likings.
          </h6>
        </div>
        <div className="col-lg-5 ">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/PGqltBCo6cU?si=Kam6-UA8Ei60ikE5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    </div>
      </div>
    </>
  )
}

export default Landingpage
