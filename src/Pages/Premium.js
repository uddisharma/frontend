import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function Premium() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${user ? user.email : ""}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const makePayment = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("tracsaction failed");

      return;
    }
    const options = {
      key: "rzp_test_1ZKrAXvsXDbLn3",
      currency: "INR",
      amount: amount * 100,
      name: "Sharpener.tech",
      description: "thanks ",
      image:
        "https://www.sharpener.tech/static/media/sharpener_logo.b578c065.png",
      handler: function (res) {
        console.log(res);
        localStorage.setItem("razorpay_payment_id", res.razorpay_payment_id);
        axios
          .patch(`http://localhost:5000/update-premium-status/${user.id}`)
          .then((res) => {
            console.log(res);
            // alert("now you are a premium member");
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      },
      prefill: {
        name: data ? data.name : "",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  console.log(user);
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  } else {
    if (data && data.premium == false) {
      return (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-12 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
              >
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  You are not premium member
                  <br />
                  <br />
                  you need to buy premium Membership
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <button
                    onClick={() => {
                      makePayment(1000);
                    }}
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Buy now
                  </button>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  src="https://t4.ftcdn.net/jpg/03/66/63/59/240_F_366635906_x0uh7ZW1uQUFiSRnGN5JoiY0JevCPslC.jpg"
                  alt="App screenshot"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-12 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
              >
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Now you are a Premium Member
                  <br />
                  {/* Boost your productivity. */}
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                    href="#"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  src="https://ucan.co.za/wp-content/uploads/Premium-Membership.png"
                  alt="App screenshot"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
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
                {/* {data
                ? data.map((e) => ( */}
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {"e.category"}
                  </th>
                  <td class="px-4 py-4">{"e.expenseName"}</td>

                  <td class="px-4 py-4">{"e.expenseMoney"}</td>
                  <td class="px-4 py-4">{"e.desc"}</td>

                  <td class="px-4 py-4">
                    {/* {e.date ? e.date.slice(0, 10) : ""} */}
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
                    {/* <Update id={e.id} /> */}
                    <button
                      // onClick={() => {
                      //   deleteExpense(e.id);
                      // }}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                {/* ))
                : ""} */}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}
