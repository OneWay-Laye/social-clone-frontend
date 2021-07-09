import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'

import style from './SignInForm.scss'

const SignInForm = () => {

  return (
    <div className='signIn-Form'>
      <form>
        <div className='group signIn-Name'>
          <label for='name'>Name</label>
          <input type="name" placeholder='Enter Full Name' />
        </div>

        <div className='group signIn-Email'>
          <label for='email'>Email</label>
          <input type="email" placeholder='Enter your email' />
        </div>

        <Button className='submit-SignIn'>Submit</Button>
      </form>
    </div>
  )
}

export default SignInForm
