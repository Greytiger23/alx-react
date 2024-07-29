import React from 'react';
import './Notifications.css';

function Notifications()
  return (
    <div className="Notifications">
      <button style={{ position: 'absolute', right: '10px', top: '10px' }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
        <img src="./assets/close-icon.png" alt="close icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
