import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { PrimaryButton } from './components';
import { GlobalStyle, darkTheme, defaultTheme } from "./utils"
import { useMediaQuery } from './hooks';

const App = () => {
  
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // If true, it's a mobile dimensions
  const isMobile = useMediaQuery('(max-width: 1024px)');
  
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme: defaultTheme} >
    <div 
        style={{
          background: useDarkTheme ? defaultTheme.primaryColorDarker : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
      }}>

      <PrimaryButton>Submit</PrimaryButton>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

