import React, { useContext } from 'react';
import { TicketsContext } from '../../context/TicketsContext';
import { Switch, Route } from 'react-router-dom';
import TickeList from '../../components/ticketsList/TickeList.component';
import styles from '../../styles/GlobalApp.module.css';
import DetailsBody from '../../components/detailsBody/DetailsBody.component';

const TicketsPage = props => {
  const { tickets } = useContext(TicketsContext);
  return (
    <>
      <div className={styles.flexWrapper}>
        <TickeList tickets={tickets} />
        <Switch>
          <Route exact path="/" children={<DetailsBody />} />
          {tickets.map(ticket => {
            return (
              <Route
                key={ticket.ticketId}
                path={`/${ticket.ticketId}`}
                children={<DetailsBody key={ticket.ticketId} ticket={ticket} />}
              />
            );
          })}
        </Switch>
      </div>
    </>
  );
};

export default TicketsPage;
