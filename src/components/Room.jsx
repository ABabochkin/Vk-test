import React from "react";

export const Room = (props) => {
  const { room, handleRoomChange } = props;
  return (
    <>
      <label htmlFor="room" className="label">
        Выберите переговорную:
      </label>
      <select className="st" onChange={handleRoomChange} value={room}>
        <option value="">--Выберите переговорную--</option>
        {[...Array(10)].map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </>
  );
};
