import React from "react";
import Booking from "./Booking";

const BookingTable = () => {
  return (
    <table className="table table-sm table-bordered table-striped">
      <thead className="thead-dark">
        <th scope="col">Time</th>
        <th scope="col">Customer Name</th>
        <th scope="col">Status</th>
        <th scope="col">Modify</th>
      </thead>
      <tbody>
        <Booking />
        <Booking />
        <Booking />
        <Booking />
      </tbody>
    </table>
  );
};

export default BookingTable;
