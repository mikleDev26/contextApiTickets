import React from 'react';
import styles from './TicketList.module.css';
import TicketListItem from '../ticketListItem/TicketListItem.component';
import SearchBar from '../searchBar/SearchBar.component';

const TickeList = ({ tickets }) => {
  return (
    <div className={styles.ticketsWrapper}>
      <SearchBar />
      <div className={styles.ticketList}>
        {tickets.length ? (
          tickets.map(ticket => (
            <TicketListItem key={ticket.ticketId} ticket={ticket} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default TickeList;
