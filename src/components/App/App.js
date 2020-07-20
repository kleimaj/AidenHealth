import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// import { SignUpModal, PrimaryButton } from './components';
import { GlobalStyle, darkTheme, defaultTheme } from "./utils"

const App = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}
        >
            <GlobalStyle />
        </ThemeProvider>
    );

}

export default App;