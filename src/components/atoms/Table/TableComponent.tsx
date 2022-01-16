import React, { ReactElement } from "react";

import { FaUserCircle } from "react-icons/fa";
import Head from "next/head";
import ModalComponent from "./Modal/ModalComponent";

const mockData = [
  {
    profile_picture: <FaUserCircle size={40} />,
    source: "auth.oniknoor.dev",
    destination: "192.168.0.2",
    status: "online",
  },
  {
    profile_picture: <FaUserCircle />,
    source: "192.168.0.3",
    destination: "192.168.0.4",
    status: "disabled",
  },
  {
    profile_picture: <FaUserCircle />,
    source: "192.168.1.254",
    destination: "192.168.1.8",
    status: "online",
  },
];

interface Props {
  data?: any;
  source?: string;
  destination?: string;
  status?: string;
}

export default function TableComponent({
  source,
  destination,
  status,
  data,
}: Props): ReactElement {
  return (
    <div className="container">
      <h1 className="text-xl font-medium text-black">Hello world!!</h1>

      <table className="table-auto">
        <thead>
          <tr>
            <th>Image</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Status</th>
          </tr>
        </thead>
        {mockData.map(
          (data, profile_picture, source, destination, status, key) => (
            <tbody key={key}>
              <tr>
                <td>{data.profile_picture}</td>
                <td>{data.source}</td>
                <td>{data.destination}</td>
                <td>{data.status}</td>
                <td>
                  <ModalComponent />
                </td>
              </tr>
            </tbody>
          )
        )}
      </table>

      <footer className="footer">OTAL &copy; 2021</footer>
    </div>
  );
}
