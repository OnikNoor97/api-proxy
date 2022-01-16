import React, { ReactElement } from "react";

import { FaUserCircle } from "react-icons/fa";
import Head from "next/head";
import ModalComponent from "./Modal/ModalComponent";

const people = [
  {
    name: "Onik Noor",
    source: "oniknoor.dev",
    destination: "192.168.1.1",
    date: "29/01/2019",
    status: "active",
    image: "https://avatars.githubusercontent.com/u/18009030?v=4",
  },
  {
    name: "Tufan Butuner",
    source: "auth.oniknoor.dev",
    destination: "192.168.1.254",
    date: "16/01/2021",
    status: "disabled",
    image: "https://avatars.githubusercontent.com/u/43154254?v=4",
  },
];

interface Props {}

export default function TableComponent({}: Props): ReactElement {
  return (
    <div className="flex flex-col mx-20 mt-20">
      <h1 className="mb-10 mx-auto text-3xl font-bold">OTAL API PROXY</h1>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Source
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Destination
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.source}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {person.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.source}
                      </div>
                      <div className="text-sm text-gray-500">{person.date}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {person.destination}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {person.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
