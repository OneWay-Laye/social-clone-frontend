import React, { Fragment } from 'react'

const BeforeUser = () => {

  return (
    <Fragment className="row">
    <div className="row">
      <section id='beforeUserHero' className="col-7"><img src='https://images.unsplash.com/photo-1513118172236-00b7cc57e1fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2380&q=80' alt='hashtag'/></section>
      <section className="col-5">
        <h1 className="beforeUser-Heading1">Happening Now</h1>
        <h3 className="beforeUser-Heading3">Join Clone Today</h3>
        <button className="beforeUser-SignUp-Button">Sign Up</button>
        <button className="beforeUser-SignIn-Button">Sign In</button>
      </section>
      </div>
    </Fragment>
  )
}

export default BeforeUser
