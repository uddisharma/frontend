import React, { useEffect, useState } from "react";

import axios from "axios";
import Add from "../Add";
import Update from "../update";
import { Navigate } from "react-router-dom";
function Expenses() {
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const getdata = () => {
    axios
      .get(
        `http://localhost:5000/expenses/${
          user ? user.id : ""
        }/?page=${page}&limit=${limit}`
      )
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
  }, [page, limit]);
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
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  } else {
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

        <div class="relative overflow-x-auto w-[90%] m-auto ">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th style={{ width: "100px" }} scope="col" class="px-4 py-2">
                  Expense Category
                </th>
                <th style={{ width: "100px" }} scope="col" class="px-4 py-2">
                  Expense name
                </th>
                <th style={{ width: "100px" }} scope="col" class="px-4 py-2">
                  Expense amount
                </th>
                <th style={{ width: "100px" }} scope="col" class="px-4 py-2">
                  Description
                </th>
                <th style={{ width: "100px" }} scope="col" class="px-4 py-2">
                  Date
                </th>
                <th style={{ width: "100px" }} scope="col" class="px-4 py-2">
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
                        class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {e.category}
                      </th>
                      <td class="px-4 py-4">{e.expenseName}</td>

                      <td class="px-4 py-4">{e.expenseMoney}</td>
                      <td class="px-4 py-4">{e.desc}</td>

                      <td class="px-4 py-4">
                        {e.date ? e.date.slice(0, 10) : ""}
                      </td>
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "5px",
                          width: "50px",
                        }}
                        class="px-4 py-4"
                      >
                        <Update id={e.id} />
                        <button
                          onClick={() => {
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
        <div style={{display:'flex', justifyContent:"space-between"}} className="mt-[20px] w-[40%] m-auto">
          <div>
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Expenses Per Page
            </label>
            <div className="w-[100%] m-auto">
              <select
              onChange={(e)=>{
                setLimit(e.target.value)
              }}
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>2</option>

                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
          <div >
          <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Pagination
            </label>
            <button
              onClick={() => {
                setPage(page - 1);
              }}
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
            <button
              disabled
              class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {page}
            </button>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
              class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Expenses;
