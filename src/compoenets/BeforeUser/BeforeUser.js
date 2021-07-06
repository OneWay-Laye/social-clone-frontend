import React, { Fragment } from 'react'
import style from './BeforeUser.scss'
import { Button } from 'react-bootstrap'

const BeforeUser = () => {

  return (
    <Fragment>
    <div className="beforeUser-Page">
      <section id='beforeUserHero' className=""><img  src='https://images.unsplash.com/photo-1513118172236-00b7cc57e1fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2380&q=80' alt='hashtag'/></section>
      <section className="beforeUser-Interactions">
        <div className='landingLogo'>#</div>
        <h1 className="beforeUser-Heading1">Happening Now</h1>
        <h3 className="beforeUser-Heading3">Join Clone Today</h3>
        <Button className="button beforeUser-SignUp-Button">Sign Up</Button>
        <Button className="button beforeUser-SignIn-Button">Sign In</Button>
      </section>
      </div>
    </Fragment>
  )
}

export default BeforeUser
