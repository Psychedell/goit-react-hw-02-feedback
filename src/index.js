import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import { ThemeProvider } from 'styled-components';

// const theme = {
//   black: 'black',
//   white: 'white',
//   green: 'green',
//   red: 'red',
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
