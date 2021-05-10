import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import Route from './routes/index';

const App: React.FC = () => (
  <BrowserRouter>
    <Route />
    <GlobalStyle />
  </BrowserRouter>
);
export default App;
