import { useState } from "react";

import { Tower } from "./Tower";
import { Floor } from "./Floor";
import { Room } from "./Room";
import { Day } from "./Day";
import { Time } from "./Time";
import { Comment } from "./Comment";
import { Preloader } from "./preloader/Preloader";

export const Form = () => {
  const [tower, setTower] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [comment, setComment] = useState();
  const [loading, setLoading] = useState(false);

  const handleTowerChange = (e) => {
    setTower(e.target.value);
  };

  const handleFloorChange = (e) => {
    setFloor(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleDateChange = (e) => {
    setDay(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tower && floor && day && room && startTime) {
      const obj = {
        tower,
        floor,
        room,
        day,
        startTime,
        endTime,
      };
      console.log(JSON.stringify(obj));
      setLoading(true);
    }
  };

  const clearForm = () => {
    setTower("");
    setComment("");
    setDay("");
    setFloor("");
    setRoom("");
    setStartTime("");
  };

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>
            Форма бронирования переговорной
          </h1>
          <form className="form" onSubmit={handleSubmit}>
            <Tower handleTowerChange={handleTowerChange} tower={tower} />
            <Floor handleFloorChange={handleFloorChange} floor={floor} />
            <Room handleRoomChange={handleRoomChange} room={room} />
            <Day day={day} handleDateChange={handleDateChange} />
            <Time
              startTime={startTime}
              endTime={endTime}
              handleStartTimeChange={handleStartTimeChange}
              handleEndTimeChange={handleEndTimeChange}
            />
            <Comment
              comment={comment}
              handleCommentChange={handleCommentChange}
            />
            <div className="buttons">
              <button className="send">Отправить</button>
              <button className="clear" onClick={clearForm}>
                Очистить
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};
