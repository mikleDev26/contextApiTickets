import React from 'react';
import styles from './TicketStatusBadge.module.css';

const TicketStatusBadge = ({ status }) => {
  let colorTheme = styles.defaultTheme,
    abr = 'una';
  if (status === 'assigned') {
    colorTheme = styles.yellowTheme;
    abr = 'asd';
  } else if (status === 'completed') {
    colorTheme = styles.greenTheme;
    abr = 'com';
  }
  return (
    <>
      <span className={`${styles.statusBadge}, ${colorTheme}`}>{abr}</span>
    </>
  );
};

export default TicketStatusBadge;
