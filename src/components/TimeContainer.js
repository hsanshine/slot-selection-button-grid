import React, { useId, useState } from "react";
import "./TimeContainer.css";

//import Button from "./Button";
import Button from "react-bootstrap/Button";
const TimeContainer = () => {
  const [userTime, setUserTime] = useState(null);

  //can put this in useEffect for choose time to pull slots for choosen date from the db
  //const timeSlots = useTime(props.choosenDate);

  const options = [
    {
      time: "12:30",
      isTaken: true,
      id: useId(),
    },
    {
      time: "01:10",
      isTaken: false,
      id: useId(),
    },
    {
      time: "01:50",
      isTaken: true,
      id: useId(),
    },
    {
      time: "02:30",
      isTaken: false,
      id: useId(),
    },
    {
      time: "03:10",
      isTaken: true,
      id: useId(),
    },
    {
      time: "03:50",
      isTaken: false,
      id: useId(),
    },
    {
      time: "04:30",
      isTaken: true,
      id: useId(),
    },
    {
      time: "05:10",
      isTaken: false,
      id: useId(),
    },
    {
      time: "05:50",
      isTaken: false,
      id: useId(),
    },
    {
      time: "06:30",
      isTaken: true,
      id: useId(),
    },
    {
      time: "07:10",
      isTaken: false,
      id: useId(),
    },
    {
      time: "07:50",
      isTaken: true,
      id: useId(),
    },
    {
      time: "08:30",
      isTaken: false,
      id: useId(),
    },
    {
      time: "09:10",
      isTaken: false,
      id: useId(),
    },
    {
      time: "09:50",
      isTaken: false,
      id: useId(),
    },

    {
      time: "10:30",
      isTaken: false,
      id: useId(),
    },
  ];
  const buttons = [];
  options.forEach((option) =>
    buttons.push(
      <Button
        variant={`${
          option.time === userTime
            ? "success"
            : option.isTaken
            ? "secondary"
            : "primary"
        }`}
        disabled={option.isTaken}
        key={option.id}
        onClick={() => {
          setUserTime(option.time);
        }}
      >
        {option.time}pm
      </Button>
    )
  );
  //   for (let i = 0; i < 16; i++) {
  //     buttons.push(<Button key={Math.random().toString()}>time</Button>);
  //   }
  return (
    <>
      <h3>Choosen Time: {userTime} pm</h3>
      <div className="container">{buttons}</div>;
    </>
  );
};

export default TimeContainer;
