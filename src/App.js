import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './styles/GlobalApp.module.css';

import TicketsPage from './Pages/ticketsPage/TicketsPage.components';
import TicketsContextProvider from './context/TicketsContext';
import Header from './components/header/Header.component';

require('dotenv').config();
function App() {
  return (
    <Router>
      <TicketsContextProvider>
        <div className={styles.App}>
          <Header heading={'Tickets'} />
          <TicketsPage />
        </div>
      </TicketsContextProvider>
    </Router>
  );
}

export default App;
