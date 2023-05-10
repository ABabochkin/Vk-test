import React from "react";

export const Floor = (props) => {
  const { handleFloorChange, floor } = props;
  return (
    <>
      <label className="label" htmlFor="floor">
        Выберите этаж:
      </label>
      <select
        className="st"
        id="floor"
        name="floor"
        onChange={handleFloorChange}
        value={floor}
      >
        <option value="">--Выберите этаж--</option>
        {[...Array(25)].map((_, i) => (
          <option key={i} value={i + 3}>
            {i + 3}
          </option>
        ))}
      </select>
    </>
  );
};
