import React from 'react';
import moment from 'moment';
import styles from './DetailsBody.module.css';
import Avatar from '../avatar/Avatar.component';
import TicketStatusBadge from '../ticketStatusBadge/TicketStatusBadge.component';

const DetailsBody = ({ ticket }) => {
  return ticket ? (
    <div className={styles.detailsWrapper}>
      <div className={styles.detailsTop}>
        <div>
          <span className={styles.pre}>TICKET NO.</span>{' '}
          <span className={styles.number}>{ticket.number}</span>
        </div>
        <div>
          <span className={styles.pre}>LAST UPDATED</span>{' '}
          <span className={styles.pre}>
            {' '}
            {moment(ticket.lastUpdatedTime).format('DD/MM/YYYY, h:mm')}
          </span>{' '}
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.containerHead}>
          <h3 className={styles.heading}>Owner</h3>
        </div>
        <div className={styles.containerBody}>
          <div className={styles.ownerInfo}>
            <Avatar size={'md'} img={ticket.owner.avatar} />
            <div className={styles.ownerInfoBlock}>
              <p>
                {ticket.owner.firstName} {ticket.owner.lastName}
              </p>
              <div className={styles.specList}>
                {ticket.owner.specialities.map((spec, id) => (
                  <span className={styles.specList} key={id}>
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.containerHead}>
          <h3 className={styles.heading}>Details</h3>
        </div>
        <div className={styles.containerBody}>
          <div className={styles.infoBlock}>
            <span className={styles.pre}>Reported</span>
            <p>{moment(ticket.reportedTime).format('DD/MM/YYYY, h:mm')} </p>
          </div>
          <div className={styles.infoBlock}>
            <span className={styles.pre}>Status</span>
            <TicketStatusBadge status={ticket.status} />
          </div>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.containerHead}>
          <h3 className={styles.heading}>Asset</h3>
        </div>
        <div className={styles.containerBody}>
          <div className={styles.infoBlock}>
            <span className={styles.pre}>Name</span>
            <p>{ticket.asset.name}</p>
          </div>
          <div className={styles.infoBlock}>
            <span className={styles.pre}>GeoCode</span>
            <p>{ticket.asset.geoCode}</p>
          </div>
          <div className={styles.infoBlock}>
            <span className={styles.pre}>Location</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.detailsEmpty}>
      <div className={styles.noTicket}>No ticket selected</div>
    </div>
  );
};

export default DetailsBody;
