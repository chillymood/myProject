import React, { PureComponent } from "react";
import { connect } from "react-redux"
import { LoginWrapper, LoginBox, Input, Button, Dialog } from "./style"
import { actionCreators } from "./store"
import { Redirect, Link } from "react-router-dom"

class Register extends PureComponent {
  render() {
    const { registerSuccess, register } = this.props;
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
            <Button onClick={() => register(this.account, this.password)}>
              註冊
            </Button>
            {registerSuccess == 1 ? <Link to="/login"><Dialog>註冊成功，點擊登入</Dialog></Link> : null}
            {registerSuccess == 2 ? <Dialog>失敗，帳號已使用</Dialog> : null}
          </LoginBox>
        </LoginWrapper>
      );
  


    
  }
  componentDidMount() {
    this.props.changeRegisterStatus()
  }
}

const mapStateToProps = (state) => ({
  registerSuccess: state.getIn(["register", "registerSuccess"]),
});

const mapDispatchToProps = (dispatch) => ({
  register(account, password) {
    console.log(account.value) 
    dispatch(actionCreators.register(account.value, password.value))
  },
  changeRegisterStatus() {
    dispatch(actionCreators.registerSuccessAction(0))
  }
  
})


export default connect(mapStateToProps, mapDispatchToProps)(Register);
