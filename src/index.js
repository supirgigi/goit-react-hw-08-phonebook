import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { theme } from 'shared/constants/theme';
import { store } from 'redux/store';
import App from 'modules/App';
import GlobalStyle from 'shared/styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
