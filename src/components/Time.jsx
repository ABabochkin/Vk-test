import React from "react";

export const Time = (props) => {
  const { startTime, handleStartTimeChange, endTime, handleEndTimeChange } =
    props;
  return (
    <>
      <label htmlFor="time" style={{ textAlign: "center" }}>
        Выберите время:
      </label>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span> от</span>
        <input
          className="time"
          type="time"
          onChange={handleStartTimeChange}
          value={startTime}
        />
        <span>до</span>
        <input
          className="time"
          type="time"
          onChange={handleEndTimeChange}
          value={endTime}
        />
      </div>
    </>
  );
};
