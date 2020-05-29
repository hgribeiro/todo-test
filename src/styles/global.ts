import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
  }
  body {
    background-color:#312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiazed;
  }
  body, input, button   {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4,h5, h6, strong {
    font-weight: 500;
  }
  button{
    cursor: pointer;
    
  }
  button {
   background: #455568;
   background-image: -webkit-linear-gradient(top, #455568, #000000);
   background-image: -moz-linear-gradient(top, #455568, #000000);
   background-image: -ms-linear-gradient(top, #455568, #000000);
   background-image: -o-linear-gradient(top, #455568, #000000);
   background-image: linear-gradient(to bottom, #455568, #000000);
   -webkit-border-radius: 20px;
   -moz-border-radius: 20px;
   border-radius: 20px;
   color: #FFFFFF;
   font-family: Open Sans;
   font-size: 15px;
   font-weight: 100;
   padding: 16px;
   box-shadow: -3px 1px 29px 0px #4F5358;
   -webkit-box-shadow: -3px 1px 29px 0px #4F5358;
   -moz-box-shadow: -3px 1px 29px 0px #4F5358;
   text-shadow: 1px 1px 20px #000000;
   border: solid #337FED 1px;
   text-decoration: none;
   display: inline-block;
   cursor: pointer;
   text-align: center;
}

button:hover {
   border: solid #337FED 1px;
   background: #1E62D0;
   background-image: -webkit-linear-gradient(top, #1E62D0, #3D94F6);
   background-image: -moz-linear-gradient(top, #1E62D0, #3D94F6);
   background-image: -ms-linear-gradient(top, #1E62D0, #3D94F6);
   background-image: -o-linear-gradient(top, #1E62D0, #3D94F6);
   background-image: linear-gradient(to bottom, #1E62D0, #3D94F6);
   -webkit-border-radius: 20px;xzxz
   -moz-border-radius: 20px;
   border-radius: 20px;
   text-decoration: none;
}
#root {
  display:flex;
  flex-direction:column;
  align-items: center;
  padding:50px;
}
`;
