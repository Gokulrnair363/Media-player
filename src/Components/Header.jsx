import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand >
          <Link to={'/'} style={{textDecoration:'none',color:'orange'}}>  
            <img
              alt=""
              src="https://icons.iconarchive.com/icons/ahdesign91/media-player/512/Adobe-Media-Player-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />{' '}
          <i>Media Player</i></Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
