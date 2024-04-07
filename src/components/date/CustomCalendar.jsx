// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const CustomCalendar = ({ apiData, updateStatus }) => {
//   const [datesStatus, setDatesStatus] = useState({});

//   useEffect(() => {
//     setDatesStatus(apiData);
//   }, [apiData]);

//   const tileClassName = ({ date }) => {
//     const status = datesStatus[date.toISOString().slice(0, 10)];
//     if (status === "done") {
//       return "done";
//     } else if (status === "pending") {
//       return "pending";
//     } else {
//       return "";
//     }
//   };

//   const handleClickDay = async (date) => {
//     alert(date)
//     // Fetch the API data for the clicked date
//     // const response = await fetch(
//     //   `your_api_endpoint/${date.toISOString().slice(0, 10)}`
//     // );
//     // const newData = await response.json();

//     // // Update the status of the clicked date
//     // updateStatus(date.toISOString().slice(0, 10), newData.status);
//   };

//   return (
//     <div>
//       <Calendar tileClassName={tileClassName} onClickDay={handleClickDay} />
//     </div>
//   );
// };

// export default CustomCalendar;

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = ({ apiData, updateStatus }) => {
  const [datesStatus, setDatesStatus] = useState({});

  useEffect(() => {
    setDatesStatus(apiData);
  }, [apiData]);

  const tileClassName = ({ date }) => {
    const status = datesStatus[date.toISOString().slice(0, 10)]?.status;
    if (status === "done") {
      return "done";
    } else if (status === "pending") {
      return "pending";
    } else {
      return "";
    }
  };

  const tileContent = ({ date }) => {
    const eventData = datesStatus[date.toISOString().slice(0, 10)];
    if (eventData) {
      return (
        <div>
          <p>{date.toLocaleDateString()}</p> {/* Display date */}
          <p>{eventData.event}</p> {/* Display event */}
          <p>Status: {eventData.status}</p> {/* Display status */}
        </div>
      );
    }
    return null;
  };

  const handleClickDay = async (date) => {
    // Fetch the API data for the clicked date
    // const response = await fetch(
    //   `your_api_endpoint/${date.toISOString().slice(0, 10)}`
    // );
    // const newData = await response.json();

    // // Update the status of the clicked date
    // updateStatus(date.toISOString().slice(0, 10), newData);
  };

  return (
    <div className="custom-calendar-container">
      <Calendar
        tileClassName={tileClassName}
        tileContent={tileContent}
        onClickDay={handleClickDay}
      />
    </div>
  );
};

export default CustomCalendar;
