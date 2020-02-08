import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import moment from 'moment';
import styles from './TicketListItem.module.css';
import Avatar from '../avatar/Avatar.component';
import TicketStatusBadge from '../ticketStatusBadge/TicketStatusBadge.component';

const TicketListItem = ({ history, ticket }) => {
  const { ticketId, owner, status, asset, reportedTime } = ticket;
  // const handleClick = () => history.push(`/${ticketId}`);

  return (
    <NavLink to={`/${ticketId}`}>
      <div className={styles.ticketWrapper}>
        <Avatar img={owner.avatar} />
        <div className={styles.ticketInfo}>
          <div className={styles.ticketDate}>
            {moment(reportedTime).format('DD/MM/YYYY, h:mm')}
          </div>

          <div className={styles.ticketAsset}>{asset.name}</div>

          <div className={styles.ticketStatus}>
            <TicketStatusBadge status={status} />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default withRouter(TicketListItem);
