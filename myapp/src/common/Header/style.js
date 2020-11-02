import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: relative;
  width: 960px;
  margin: 0 auto;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
     position: absolute;
     height: 56px;
     top:0;
     left:0;
     display:block;
     width:100px;
     height:56px;
     background-size:contain;
`;

export const Nav = styled.div`
     width:960px;
     height:100%;
     margin:0 auto;
`     
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;

  .noPoint{
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
     position:relative;
     float:left;
     
     .zoom{
          width:30px;
          height:30px;
          line-height:30px;
          text-align:center;
          border-radius:15px;
          position:absolute;
          right:5px;
          bottom:4px;
          &.focused{
               background:#777;
               color:white;
          }
     }
     
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  font-size: 14px;
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  margin-top: 10px;
  margin-left: 20px;
  padding: 0 35px 0 20px;
  border-radius: 19px;
  background: #eee;
  box-sizing: border-box;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
     transition: all 0.2s ease-out;
  }
  &.slide-exit-active{
       width:160px;
  }
`;

export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow:0 0 8px rgba(0,0,0, .2);
    background:white;
    z-index:1;
`

export const SearchInfoTitle = styled.div`
   margin-top:20px;
   margin-bottom: 15px;
   font-size:14px;
   line-height: 20px;
   color:#969696;
`;

export const SearchInfoSwitch = styled.span`
  float:right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  .spin { 
    display:inline-block;
    margin-right: 2px;
    font-size:25px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding:0 5px;
  line-height:20px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius:3px;
  margin-right:10px;
  margin-bottom:15px;
`;


export const Addition = styled.div`
  position: absolute;
  height:56px;
  top: 0;
  right: 0;
`;

export const Button = styled.div`
  cursor: pointer;
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;


