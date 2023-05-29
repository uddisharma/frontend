import useExternalScripts from "./hooks/useExternalScripts";
import axios from "axios";
import { Helmet } from "react-helmet"
import React,{useEffect,useState,useRef} from "react"
function Component() {
  return (
    <>
      <Helmet>
        <script
          src="https://www.myscripts.com/scripts"
          crossorigin="anonymous"
          async
        ></script>
      </Helmet>
      ...
    </>
  )
}

export default function ForgotPassword() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
 
  
  const ForgotPasswordLink = (e) => {
    
    e.preventDefault();
    if (email == "") {
      alert("Please enter your email");
    } else {
      setLoading(true);
      axios
        .post('https://localhost:5000/password/forgotpassword', {
          email: email,
        })
        .then((res) => {
          console.log(res);
          setLoading(false);
          setMessage("Password reset link sent successfully");
        })
        .catch((err) => {
          setLoading(false);
          setMessage("you are not a registered user");
        });
    }
  };
  return (
    <div
      style={{
        display: "block",
        width: "90%",
        margin: "auto",
        marginTop: "50px",
      }}
      className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
    >
      <div className="w-[80%] m-auto p-[30px]">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="expenseName"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {message.length > 0 ? (
            <p className="block text-sm font-medium leading-6 text-gray-900">
              {message}
            </p>
          ) : (
            ""
          )}
          <div>
            {loading ? (
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                loading...
              </button>
            ) : (
              <button
                onClick={ForgotPasswordLink}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Email
              </button>
            )}
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
    </div>
    // <div>
    //   <p
    //     onClick={() => setOpen(true)}
    //     class="text-blue-500 text-sm tracking-tight cursor-pointer"
    //   >
    //     Forget your password?
    //   </p>

    //   <Transition.Root show={open} as={Fragment}>
    //     <Dialog
    //       as="div"
    //       className="relative z-10"
    //       initialFocus={cancelButtonRef}
    //       onClose={setOpen}
    //     >
    //       <Transition.Child
    //         as={Fragment}
    //         enter="ease-out duration-300"
    //         enterFrom="opacity-0"
    //         enterTo="opacity-100"
    //         leave="ease-in duration-200"
    //         leaveFrom="opacity-100"
    //         leaveTo="opacity-0"
    //       >
    //         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    //       </Transition.Child>

    //       <div className="fixed inset-0 z-10 overflow-y-auto">
    //         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    //           <Transition.Child
    //             as={Fragment}
    //             enter="ease-out duration-300"
    //             enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    //             enterTo="opacity-100 translate-y-0 sm:scale-100"
    //             leave="ease-in duration-200"
    //             leaveFrom="opacity-100 translate-y-0 sm:scale-100"
    //             leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    //           >
    //             <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
    //               <div className="w-[80%] m-auto p-[30px]">
    //                 <form  className="space-y-6">
    //                   <div>
    //                     <label
    //                       htmlFor="email"
    //                       className="block text-sm font-medium leading-6 text-gray-900"
    //                     >
    //                       Email Address
    //                     </label>
    //                     <div className="mt-2">
    //                       <input
    //                         id="name"
    //                         name="expenseName"
    //                         value={email}
    //                         onChange={(e) => {
    //                           setEmail(e.target.value);
    //                         }}
    //                         type="email"
    //                         required
    //                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                       />
    //                     </div>
    //                   </div>
    //                   {message.length > 0 ? (
    //                     <p className="block text-sm font-medium leading-6 text-gray-900">
    //                       {message}
    //                     </p>
    //                   ) : (
    //                     ""
    //                   )}
    //                   <div>
    //                     {loading ? (
    //                       <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    //                         loading...
    //                       </button>
    //                     ) : (
    //                       <button
    //                       onClick={ForgotPasswordLink}
    //                         className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //                       >
    //                         Send Email
    //                       </button>
    //                     )}
    //                   </div>
    //                 </form>
    //               </div>
    //               <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
    //                 <button
    //                   type="button"
    //                   className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
    //                   onClick={() => setOpen(false)}
    //                 >
    //                   Cancel
    //                 </button>
    //               </div>
    //             </Dialog.Panel>
    //           </Transition.Child>
    //         </div>
    //       </div>
    //     </Dialog>
    //   </Transition.Root>
    // </div>
  );
}
