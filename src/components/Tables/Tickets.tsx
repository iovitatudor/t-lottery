import React, {FC} from "react";

const ticketClasses = ['yellow-ball', 'red-ball', 'green-ball', 'pink-ball', 'orange-ball']
const ticketNumbers = Array.from({length: 20}, () => Math.random() * 50);

const Tickets: FC = () => {
  const getRandomClass = () => {
    return ticketClasses[Math.floor(Math.random() * ticketClasses.length)];
  }

  return (
    <div className="history-area">
      <h4>My Tickets</h4>
      <div className="tickets-area">
        {
          ticketNumbers.map((ticket) => (
            <div className="ticket">
              <span className={getRandomClass() + ' ball'}>{Math.floor(Math.random() * 50)}</span>
              <span className={getRandomClass() + ' ball'}>{Math.floor(Math.random() * 50)}</span>
              <span className={getRandomClass() + ' ball'}>{Math.floor(Math.random() * 50)}</span>
              <span className={getRandomClass() + ' ball'}>{Math.floor(Math.random() * 50)}</span>
              <span className={getRandomClass() + ' ball'}>{Math.floor(Math.random() * 50)}</span>
              <span className={getRandomClass() + ' ball'}>{Math.floor(Math.random() * 50)}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Tickets;