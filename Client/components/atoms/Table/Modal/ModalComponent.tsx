import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

import { RiEditLine } from "react-icons/ri";

export default function ModalComponent() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-300 mb-10"
                    >
                      Edit Proxy Host
                    </Dialog.Title>

                    <div className="mb-8">
                      <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                        Domain name
                      </label>
                      <input
                        className="bg-gray-900 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-gray-300 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500"
                        id="inline-full-name"
                        type="text"
                      />
                    </div>

                    <form className="w-full max-w-lg">
                      <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                            Scheme
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-900 text-gray-300 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500"
                            id="grid-city"
                            type="text"
                            placeholder="http"
                            required
                          />
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                            Fwd Hostname / IP
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-900 text-gray-300 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="authelia"
                            required
                          />
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                            Forward Port
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-900 text-gray-300 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="9091"
                            required
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-gray-50 text-base font-medium text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
