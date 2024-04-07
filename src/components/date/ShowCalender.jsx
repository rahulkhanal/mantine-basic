import React, { useState } from "react";
import CustomCalendar from "./CustomCalendar";

const ShowCalender = () => {
  const exampleApiData = [
    {
      id: 1,
      date: "2024-04-01",
      status: "done",
      event: "Blood Donation",
    },
    {
      id: 2,
      date: "2024-04-05",
      status: "pending",
      event: "Volunteer at Shelter",
    },
    {
      id: 3,
      date: "2024-04-10",
      status: "done",
      event: "Community Cleanup",
    },
    // Add more event objects as needed
  ];

  const [apiData, setApiData] = useState(exampleApiData);

  //   const updateStatus = (date, status) => {
  //     setApiData({
  //       ...apiData,
  //       [date]: status,
  //     });
  //   };
  const updateStatus = (date, newData) => {
    // Update the API data with the new status
    setApiData((prevData) => {
      const updatedData = prevData.map((item) => {
        if (item.date === date) {
          return { ...item, status: newData.status };
        }
        return item;
      });
      return updatedData;
    });
  };
  return (
    <div className="custom-calendar-container">
      <CustomCalendar
        apiData={apiData}
        updateStatus={updateStatus}
      />
    </div>
  );
};

export default ShowCalender;
