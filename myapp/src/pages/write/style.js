import styled from "styled-components";

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`;

export const LoginBox = styled.div`
    width:960px;
    height:600px;
    margin:100px auto;
    padding-top:20px;
    background:#fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1)
`

export const Input = styled.input`
    display: block;
    width:600px;
    height:30px;
    line-height:30px;
    padding: 0 10px;
    margin: 10px auto;
    color: #777;
`
export const Textarea = styled.textarea`
  display: block;
  width: 600px;
  height:430px;
  line-height: 20px;
  padding: 0 10px;
  margin: 10px auto;
  color: #777;
`;

export const Button = styled.div`
  cursor: pointer;
  width: 220px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #1cc283;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
`;

export const Dialog = styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #ea6f5a;
  border-radius: 15px; 
  margin: 10px auto; 
  text-align: center;
  text-decoration: none;
  z-index:2;
`;