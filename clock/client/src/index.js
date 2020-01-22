import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Panel } from "./components/Panel";
import { Display } from "./components/Display";

function ClockApp() {
  const [date, setDate] = useState(new Date());
  const [isDateVisible, setIsDateViseble] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <main className='clock-page'>
      <div className="clock">
        <Panel
          isDateVisible={isDateVisible}
          onDateCheckedChange={() => setIsDateViseble(!isDateVisible)}
        />
        <Display isDateVisible={isDateVisible} date={date} />
      </div>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ClockApp />, rootElement);
