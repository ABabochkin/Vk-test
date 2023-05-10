import React from "react";

export const Day = (props) => {
  const { day, handleDateChange } = props;
  return (
    <>
      <label htmlFor="date" className="label">
        Выберите дату:
      </label>
      <input
        className="date"
        type="date"
        onChange={handleDateChange}
        value={day}
      />
    </>
  );
};
