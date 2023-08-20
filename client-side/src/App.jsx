import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  useEffect(() => {
    const circleElement = document.querySelector('.circle')
    const vlpElement = document.querySelector('.vlp')
    const vlpElaborateElement = document.querySelector('.vlpElaborate')

    circleElement.style.animation = 'circleRollOut 1s forwards'
    setTimeout(() => {
      vlpElement.style.animation = 'vlpFadeIn 1s forwards'
      vlpElaborateElement.style.animation = 'vlpFadeIn 1s forwards'
    }, 500) // after 1 second
  }, [])

  const openLoginForm = () => {
    setShowLogin(true)
    setShowSignUp(false)
  }

  const openSignUpForm = () => {
    setShowSignUp(true)
    setShowLogin(false)
  }

  const closeForm = () => {
    setShowLogin(false)
    setShowSignUp(false)
  }

  return (
    <div className='app-container'>
      <div className='main-content'>
        <div className='vlp-container'>
          <div className='circle'></div>
          <span className='vlp'>VLP</span>
          <div className='vlpElaborate'>Virtual Learning Platform</div>
        </div>
        <div className='btn-group'>
          <button className='login-btn' onClick={openLoginForm}>
            Log In
          </button>
          <button className='signup-btn' onClick={openSignUpForm}>
            Sign Up
          </button>
          <button className='info-btn'>
            <i className='info-icon'>i</i>
          </button>
        </div>
      </div>
      {/* End of .main-content */}
      <div className='section' id='teachings'>
        <div className='content-area'>
          <h2>What We Offer</h2>
          <p>The Real World view to Finance, Economics, Business & Education</p>
        </div>
        <div className='image-area'>
          <img
            src='https://images.pexels.com/photos/5797903/pexels-photo-5797903.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Description for What We Teach'
          />
        </div>
      </div>
      <div className='section' id='platforms'>
        <div className='content-area'>
          <h2>Our Platforms</h2>
          <p>
            Our office is located in my reading desk. Where I'm building it as a
            test run to make my skills better.
          </p>{' '}
        </div>
        <div className='image-area'>
          <img
            src='https://images.pexels.com/photos/17794649/pexels-photo-17794649/free-photo-of-man-having-online-business-presentation.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Description for What We Teach'
          />
        </div>
      </div>
      <div className='section' id='goal'>
        <div className='content-area'>
          <h2>Our Goal</h2>
          <p>
            We want to give everyone the knowledge of the real world. Which will
            people to grow in a fashion that'll help to succeed in the real
            world, not in the systematic cage
          </p>{' '}
        </div>
        <div className='image-area'>
          <img
            src='https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Description for What We Teach'
          />
        </div>
      </div>
      <div className='section' id='members'>
        <div className='content-area'>
          <h2>Members</h2>
          <p>It's just me</p>{' '}
        </div>
        <div className='image-area'>
          <img
            src='https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Description for What We Teach'
          />
        </div>
      </div>
      <footer>
        <div className='footer-top'>
          <div className='footer-logo'>
            <img src='/path_to_logo.png' alt='VLP Logo' />
            <p>Virtual Learning Platform</p>
          </div>
          <div className='footer-links'>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Courses</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='footer-social'>
            <a href='#'>
              <i className='social-icon facebook-icon'></i>
            </a>
            <a href='#'>
              <i className='social-icon twitter-icon'></i>
            </a>
            <a href='#'>
              <i className='social-icon linkedin-icon'></i>
            </a>
            <a href='#'>
              <i className='social-icon instagram-icon'></i>
            </a>
          </div>
          <div className='footer-contact'>
            <p>Email: support@vlp.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>© 2023 Virtual Learning Platform. All rights reserved.</p>
        </div>
      </footer>
      {showLogin && (
        <div className='form-popup'>
          <form className='login-form'>
            <h2>Login</h2>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Log In</button>
            <p>
              Don't have an account?{' '}
              <span onClick={openSignUpForm}>Sign up</span>
            </p>
            <button className='close-btn' onClick={closeForm}>
              <i className='fas fa-times'></i> {/* Font Awesome close icon */}{' '}
            </button>
          </form>
        </div>
      )}

      {showSignUp && (
        <div className='form-popup'>
          <form className='signup-form'>
            <h2>Sign Up</h2>
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='Last Name' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Sign Up</button>
            <p>
              Already have an account?{' '}
              <span onClick={openLoginForm}>Log in</span>
            </p>
            <button className='close-btn' onClick={closeForm}>
              <i className='fas fa-times'></i> {/* Font Awesome close icon */}{' '}
            </button>
          </form>
        </div>
      )}
    </div>
  )

}

export default App
