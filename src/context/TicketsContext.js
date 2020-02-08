import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TicketsContext = createContext();

const TicketsContextProvider = props => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const { data } = await axios.get(process.env.REACT_APP_TICKETS_API);
        setTickets(data);
      } catch (error) {
        console.log('GET TICKETS ERROR ===>', error);
      }
    };
    getTickets();
  }, []);

  return (
    <TicketsContext.Provider value={{ tickets }}>
      {props.children}
    </TicketsContext.Provider>
  );
};

export default TicketsContextProvider;
