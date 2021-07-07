import React, { Fragment, useState } from 'react'
import style from './BeforeUser.scss'
import { Button, Modal } from 'react-bootstrap'
import SignUpForm from './../SignUpForm/SignUpForm'

const BeforeUser = () => {

  // This block of code is for the SignUp Modal state
  const [showSignUp, setShowSignUp] = useState(false)
  const handleShowSignUp = () => {
    setShowSignUp(true)
  }
  const handleCloseSignUp = () => {
    setShowSignUp(false)
  }

  // This block of code is for the SignIn Modal state
  const [showSignIn, setShowSignIn] = useState(false)
  const handleShowSignIn = () => {
    setShowSignIn(true)
  }
  const handleCloseSignIn = () => {
    setShowSignIn(false)
  }

  return (
    <Fragment>
    <div className="beforeUser-Page">
      <section id='beforeUserHero'><img  src='https://images.unsplash.com/photo-1513118172236-00b7cc57e1fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2380&q=80' alt='hashtag'/></section>
      <section className="beforeUser-Interactions">
        <div className='landingLogo'>#</div>
        <h1 className="beforeUser-Heading1">Happening Now</h1>
        <h3 className="beforeUser-Heading3">Join Clone Today</h3>
        <Button className="button beforeUser-SignUp-Button" onClick={handleShowSignUp}>Sign Up</Button>
        <Button className="button beforeUser-SignIn-Button" onClick={handleShowSignIn}>Sign In</Button>
      </section>
      </div>

      <div className='modal-container'>
        <div className='modal-header'>
          <h2>SignUp</h2>
          <Button className='close-Modal-Button' onClick={handleCloseSignUp}>X</Button>
        </div>

        <div className="modal-body">
          <SignUpForm />
        </div>

        <div className="modal-footer">
          <Button className="cancelModal" onClick={handleCloseSignUp}>Cancel Signup</Button>
        </div>

      </div>


    </Fragment>
  )
}

export default BeforeUser
