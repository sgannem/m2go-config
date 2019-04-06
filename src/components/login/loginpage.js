import React from 'react';
import './loginpage.css';

const Welcome = ({user, onSignOut})=> {
    // This is a dumb "stateless" component
    return (
      // <div>
      // <div className="test-corner">
      //   Welcome <strong>{user.username}</strong>!<a href="javascript:;" onClick={onSignOut}>Sign out</a>
      // </div>
      //   <div class="test-header">
      //   Welcome <strong>m2go-mifarehcedemoportal</strong>
      // </div>
      // </div>

      <div class="table">
      <div class="row">
          <div class="cell">
              <p>Side Navigation</p>
              <div id="page-content-wrapper" class="align-main-content">
                  <div class="container-fluid">
                      <div class="row">
                          <div class="col-lg-12 dashboard-container style-3 remove-right-left-padding">
                            <div class="panel">
                                <div className="test-corner">
                                  Welcome <strong>{user.username}</strong>!<a href="javascript:;" onClick={onSignOut}>Sign out</a>
                                </div>
                                <div class="test-header">
                                  Welcome <strong>m2go-mifarehcedemoportal</strong>
                                </div>
                            </div>
                          </div>
                      </div>
                  </div> 
              </div>
          </div>
      </div>
    </div>

    )
  }
  
  class LoginForm extends React.Component {
    
    // Using a class based component here because we're accessing DOM refs
   
    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      this.props.onSignIn(username, password)
    }
    
    render() {
      return (
        // <div className="test">
        // <form onSubmit={this.handleSignIn.bind(this)}>
        //   <h3>Sign in</h3>
        //   <input type="text" ref="username" placeholder="enter you username" />
        //   <input type="password" ref="password" placeholder="enter password" />
        //   <input type="submit" class="btn-primary" value="Login" />
        // </form>
        // </div>
        <div class="table">
          <div class="row">
              <div class="cell">
                  <p>Side Navigation</p>
                  <div id="page-content-wrapper" class="align-main-content">
                      <div class="container-fluid">
                          <div class="row">
                              <div class="col-lg-12 dashboard-container style-3 remove-right-left-padding">
                                <div class="panel">
                                  <form onSubmit={this.handleSignIn.bind(this)}>
                                    <h3>Sign in</h3>
                                    <div class="form-group">
                                      <input type="text" class="form-control login-input-element-width" ref="username" placeholder="enter you username" />
                                    </div>
                                    <br/>
                                    <div class="form-group">
                                      <input type="password" class="form-control login-input-element-width" ref="password" placeholder="enter password" />
                                    </div>
                                    <br/>
                                    <div class="form-group">
                                      <input type="submit" class="btn-primary" value="Login" />
                                    </div>
                                  </form>
                                </div>
                              </div>
                          </div>
                      </div> 
                  </div>
              </div>
          </div>
        </div>
      )
    }
  
  }
  
  
  class App extends React.Component {
    
    constructor(props) {
      super(props)
      // the initial application state
      this.state = {
        user: null
      }
    }
    
    // App "actions" (functions that modify state)
    signIn(username, password) {
      // This is where you would call Firebase, an API etc...
      // calling setState will re-render the entire app (efficiently!)
      this.setState({
        user: {
          username,
          password,
        }
      })
    }
    
    signOut() {
      // clear out user from state
      this.setState({user: null})
    }
    
    render() {
      // Here we pass relevant state to our child components
      // as props. Note that functions are passed using `bind` to
      // make sure we keep our scope to App
      return (
        <div className="test">
          <h1>HCE Demo Portal</h1>
          { 
            (this.state.user) ? 
              <Welcome 
               user={this.state.user} 
               onSignOut={this.signOut.bind(this)} 
              />
            :
              <LoginForm 
               onSignIn={this.signIn.bind(this)} 
              />
          }
        </div>
      )
      
    }
    
  }

  export default App;
  