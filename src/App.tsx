import React from 'react';

import List from './components/List'
import GlobalStyle from './styles/global';
import Header from './components/Header';

const App: React.FC = () => (
  <>
    <Header></Header>
    <List />
    <GlobalStyle />
  </>
   
  
);

export default App;
