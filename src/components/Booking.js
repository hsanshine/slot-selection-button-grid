import React from "react";
import Button from "react-bootstrap/esm/Button";

const Booking = () => {
  const name = "customer name";
  const status = "upcoming";
  const time = "11:30";

  return (
    <tr>
      <td>{time}</td>
      <td>{name}</td>
      <td>{status}</td>
      <td className="p-2">{<Button className="btn-sm w-100">Edit</Button>}</td>
    </tr>
  );
};

export default Booking;
