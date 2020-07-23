import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { 
  SignUpModal,
  Navbar, 
  Dropdown, 
  Header,
  Summary,
  Content,
  SecondaryButton, 
  TertiaryButton } from './components';
import { HamburgerIcon } from './assets';
import { GlobalStyle, darkTheme, defaultTheme } from "./utils"
import { useMediaQuery } from './hooks';

const App = () => {
  
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  // If true, it's a mobile dimensions
  const isMobile = useMediaQuery('(max-width: 1024px)');
  // If true, it's larger than a laptop
  const isDesktop = useMediaQuery('(min-width: 1600px)');

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme: defaultTheme} >
    <div 
        style={{
          background: useDarkTheme ? defaultTheme.primaryColorDarker : darkTheme.primaryColor,
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column"
      }}>
      <SignUpModal showModal={showModal} setShowModal={setShowModal} />

      <Navbar>
        <h1><a href="#">Logo</a></h1>
        {isMobile ? (
          <HamburgerIcon 
            onClick={() => setShowMenu(!showMenu)} 
            open={showMenu}
          />
        )
        : (
        <ul>
          <li><a href="#works"><TertiaryButton modifiers="navTertiary">
            Healthcare
            </TertiaryButton></a></li>
            <li><a><TertiaryButton modifiers="navTertiary">
            About Us
            </TertiaryButton></a></li>
            <li><a><TertiaryButton 
            modifiers="navTertiary"
            onClick={() => setUseDarkTheme(!useDarkTheme)}>
            Dark Mode
            </TertiaryButton></a></li>
          <li><a><SecondaryButton 
            modifiers="navSecondary"
            onClick={() => setShowModal(!showModal)}>
              Apply Today
            </SecondaryButton></a></li>
        </ul>
        )}
      </Navbar>
      {isMobile ? (
      <Dropdown 
        showMenu={showMenu} 
        setShowMenu={setShowMenu}
        showModal={showModal}
        setShowModal={setShowModal} />
      ):
      (
        null
      )}
      <Header 
        isMobile={isMobile}
        isDesktop={isDesktop}
        showModal={showModal}
        setShowModal={setShowModal} />
      <Summary />
      <Content isMobile={isMobile} />
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

