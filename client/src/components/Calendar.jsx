import React, { useState } from "react";
import Calendar from "react-calendar";
import "../styles/calendar.css";
import Header from "./Header";
import Footer from "./Footer";

export default function MyCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <>
      <div className="calendar-background">
        <Header />
        <div className="calendar-container">
          <div className="calendar">
            <Calendar onChange={setValue} value={value} />
          </div>
        </div>
      </div>
    </>
  );
}
