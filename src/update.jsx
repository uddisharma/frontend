import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export default function Update({ id }) {
  const [open, setOpen] = useState(false);
  // console.log(id)
  const cancelButtonRef = useRef(null);
  const [expense, setExpense] = useState({
    category: "",
    expenseName: "",
    expenseMoney: "",
    desc: "",
  });
  const handlechange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };
  const getdetails = () => {
    axios
      .get(`http://localhost:5000/expense/${id}`)
      .then((res) => {
        // console.log(res);
        setExpense({
          expenseName: res.data.expenseName,
          expenseMoney: res.data.expenseMoney,
          desc: res.data.desc,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addExpense = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/update-expense/${id}`, expense)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
          getdetails();
        }}
        type="button"
        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
      >
        Edit
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="w-[80%] m-auto p-[30px]">
                    <form
                      onSubmit={addExpense}
                      className="space-y-6"
                      action="#"
                      method="POST"
                    >
                      <div>
                        <label
                          for="countries"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Select a category
                        </label>
                        <select
                        
                          onChange={(e) => {
                            setExpense({
                              ...expense,
                              category: e.target.value,
                            });
                          }}
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Choose expense type</option>
                          <option value="Food">Food</option>
                          <option value="Petrol">Petrol</option>
                          <option value="Daily Expense">Daily Expenses</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Expense Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="name"
                            name="expenseName"
                            value={expense.expenseName}
                            onChange={handlechange}
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Expense Amount
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            id="password"
                            name="expenseMoney"
                            value={expense.expenseMoney}
                            onChange={handlechange}
                            type="number"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          for="message"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Description
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          name="desc"
                          value={expense.desc}
                          onChange={handlechange}
                          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write your thoughts here..."
                        ></textarea>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Update Expense
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
