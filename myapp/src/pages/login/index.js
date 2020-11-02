import React, { PureComponent } from "react";
import { connect } from "react-redux"
import { LoginWrapper, LoginBox, Input, Button } from "./style"
import { actionCreators } from "./store"
import { Redirect } from "react-router-dom"

class Login extends PureComponent {

  BackHom() {
    if (this.props.login) {
      return <Redirect to={{ pathname: "/" }} />;
    }
  }


  render() {
    const { login, loginStatus } = this.props;
    
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="帳號"
              ref={(dom) => {
                this.account = dom;
              }}
            />
            <Input
              placeholder="密碼"
              type="password"
              ref={(dom) => {
                this.password = dom;
              }}
            />
            <Button onClick={() => login(this.account, this.password)}>
              登入
            </Button>
          </LoginBox>
        </LoginWrapper>        
      );
    } else {
      return <Redirect to="/" />
    }


    
  }
  componentDidMount() {}
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(["login","login"])
})

const mapDispatchToProps = (dispatch) => ({
  login(account, password) {
    dispatch(actionCreators.login(account.value, password.value))
  }
  
})


export default connect(mapStateToProps,mapDispatchToProps)(Login);
