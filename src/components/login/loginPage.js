//GENERAL
import React           from 'react'
import GoogleLogin     from 'react-google-login'
import PropTypes       from 'prop-types'
import ReactLoading    from 'react-loading'

import '../../stylesheets/flex.css'
import '../../stylesheets/login.css'

const LoginPage = ({user, response, getUserData }) => (
  <div className="flex flex-center login-holder">
    <div className="flex flex-column">
      <h1>Study.js</h1>
      <p>
        <span className="declaration">const </span><span className="variable">topic </span>= (<span>study</span>){' => { '}<span className="return">return </span>{'success }'}
      </p>
      {
        !user.isFetching ?
        <div className="oauth-holder">
            <GoogleLogin
              clientId="185479231839-jon0c9p5seej5qd2jfsc2aal6idobsi1.apps.googleusercontent.com"
              buttonText="googleLogin()"
              onSuccess={response}
              onFailure={response}
              className="login-button"
            />
        </div> :
        <div className="flex flex-center loading-holder">
          <ReactLoading type={'spokes'} height={40} width={40} />
        </div>
      }

    </div>
  </div>
)

LoginPage.propTypes = {
  user: PropTypes.object,
  response: PropTypes.func,
    getUserData: PropTypes.func
}

export default LoginPage
