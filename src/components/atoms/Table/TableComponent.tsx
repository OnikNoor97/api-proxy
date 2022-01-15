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
    destination: "192.168.1.9",
    status: "online",
  },
];

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

interface Props {
  data: any;
  profile_picture?: SVGElement;
  className?: string;
  source?: string;
  destination?: string;
  status?: string;
}

export default function TableComponent(
  className,
  profilePicture,
  source,
  destination,
  status
) {
  return (
    // <div className="container">
    //   <h1 className="text-xl font-medium text-black">Hello world!!</h1>

    //   <table className="table-auto">
    //     <thead>
    //       <tr>
    //         <th>Image</th>
    //         <th>Source</th>
    //         <th>Destination</th>
    //         <th>Status</th>
    //       </tr>
    //     </thead>
    //     {mockData.map(
    //       (data, _profile_picture, _source, _destination, _status, index) => (
    //         <tbody key={index}>
    //           <tr>
    //             <td>{data.profile_picture}</td>
    //             <td>{data.source}</td>
    //             <td>{data.destination}</td>
    //             <td>{data.status}</td>
    //             <td>
    //               <ModalComponent />
    //             </td>
    //           </tr>
    //         </tbody>
    //       )
    //     )}
    //   </table>

    //   <footer className="footer">OTAL &copy; 2021</footer>
    // </div>

    /* This example requires Tailwind CSS v2.0+ */

    // <div className="flex flex-col">
    //   <Head>
    //     <title>OTAL API Proxy</title>
    //     <link rel="icon" href="/favicon.ico" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <link href="/dist/output.css" rel="stylesheet"></link>
    //   </Head>

    //   <h1 className="text-3xl font-bold underline">Hello world!</h1>
    //   <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    //     <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    //       <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    //         <table className="min-w-full divide-y divide-gray-200">
    //           <thead className="bg-gray-50">
    //             <tr>
    //               <th
    //                 scope="col"
    //                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    //               >
    //                 Name
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    //               >
    //                 Title
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    //               >
    //                 Status
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    //               >
    //                 Role
    //               </th>
    //               <th scope="col" className="relative px-6 py-3">
    //                 <span className="sr-only">Edit</span>
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody className="bg-white divide-y divide-gray-200">
    //             {people.map((person) => (
    //               <tr key={person.email}>
    //                 <td className="px-6 py-4 whitespace-nowrap">
    //                   <div className="flex items-center">
    //                     <div className="flex-shrink-0 h-10 w-10">
    //                       <img
    //                         className="h-10 w-10 rounded-full"
    //                         src={person.image}
    //                         alt=""
    //                       />
    //                     </div>
    //                     <div className="ml-4">
    //                       <div className="text-sm font-medium text-gray-900">
    //                         {person.name}
    //                       </div>
    //                       <div className="text-sm text-gray-500">
    //                         {person.email}
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </td>
    //                 <td className="px-6 py-4 whitespace-nowrap">
    //                   <div className="text-sm text-gray-900">
    //                     {person.title}
    //                   </div>
    //                   <div className="text-sm text-gray-500">
    //                     {person.department}
    //                   </div>
    //                 </td>
    //                 <td className="px-6 py-4 whitespace-nowrap">
    //                   <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
    //                     Active
    //                   </span>
    //                 </td>
    //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    //                   {person.role}
    //                 </td>
    //                 <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    //                   <a
    //                     href="#"
    //                     className="text-indigo-600 hover:text-indigo-900"
    //                   >
    //                     Edit
    //                   </a>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}
