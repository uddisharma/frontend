import React, { useEffect, useState } from "react";

import axios from "axios";
import Add from "./Add";
import Update from "./update";
function Expenses() {
  const [data, setData] = useState([]);
  const getdata = () => {
    axios
      .get("http://localhost:5000/expenses")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  const deleteExpense = (id) => {
    // console.log(id)
    axios
      .delete(`http://localhost:5000/delete-expense/${id}`)
      .then((res) => {
        console.log(res.data);
        getdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="pb-[150px]">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          margin: "auto",
        }}
      >
        <h1 className="text-3xl text-gray-900 font-bold  pt-20 pb-20">
          Expense Tracker
        </h1>
        <Add />
      </div>
      {/* <h1>Add Expenses</h1> */}
      <h1 className="text-3xl text-gray-900 font-bold underline pb-20">
        Your Latest Expenses
      </h1>

      <div class="relative overflow-x-auto w-[80%] m-auto ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Expense name
              </th>
              <th scope="col" class="px-6 py-3">
                Expense amount
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((e) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {e.expenseName}
                    </th>
                    <td class="px-6 py-4">{e.expenseMoney}</td>
                    <td class="px-6 py-4">
                      {e.date ? e.date.slice(0, 10) : ""}
                    </td>
                    <td style={{display:'flex', justifyContent:'space-between', gap:'5px', width:"50px"}} class="px-6 py-4">
                      <Update id={e.id}/>
                      <button
                      onClick={()=>{
                        deleteExpense(e.id);
                      }}
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Expenses;
