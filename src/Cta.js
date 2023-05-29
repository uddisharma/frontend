import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <div style={{border:"5px solid red"}} className="bg-white">

    //   <div  className="relative isolate px-6 lg:px-8">
    //     <div
    //       className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    //       aria-hidden="true"
    //     >
    //       <div

    //         className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    //         style={{

    //           clipPath:
    //             'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    //         }}
    //       />
    //     </div>
    //     <div className="mx-auto max-w-2xl py-8 lg:py-36">
    //       <div className="hidden sm:mb-8 sm:flex sm:justify-center">
    //         <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
    //           Announcing our next round of funding.{' '}
    //           <a href="#" className="font-semibold text-indigo-600">
    //             <span className="absolute inset-0" aria-hidden="true" />
    //             Read more <span aria-hidden="true">&rarr;</span>
    //           </a>
    //         </div>
    //       </div>
    //       <div className="text-center">
    //         <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    //           Track your Daily Expenses
    //         </h1>
    //         <p className="mt-6 text-lg leading-8 text-gray-600">
    //           Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
    //           fugiat veniam occaecat fugiat aliqua.
    //         </p>
    //         <div className="mt-10 flex items-center justify-center gap-x-6">
    //           <Link to="/login">
    //           <p

    //             className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           >
    //             Get started
    //           </p>
    //           </Link>
    //           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
    //             Learn more <span aria-hidden="true">→</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    //       aria-hidden="true"
    //     >
    //       <div
    //         className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
    //         style={{
    //           clipPath:
    //             'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    //         }}
    //       />
    //     </div>
    //   </div>
    // </div>
    <section class="bg-red-200 text-green-900 relative">
      <div
        class="min-h-screen hero-image bg-center bg-cover flex"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)",
        }}
      >
        <div
          class="min-h-screen hero-image bg-right-bottom bg-cover flex"
          style={{backgroundImage: 'url(https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)'}}
        >
          <div class="relative container mx-auto p-4 flex items-end z-10">
            <div>
              <div class="content float-left py-4 px-5 my-5">
                <div class="heading mb-3 text-2xl md:text-4xl">
                  Track your daily expenses with Expense Tracker
                </div>
                <div class="text leading-normal hidden sm:block">
                  Helping Women Meet All of their Health Care Needs
                </div>
              </div>
              <div class="cta clear-left px-5">
                <a
                  class="
                    no-underline
                    btn btn-primary 
                    block sm:inline-block global-transition
                    text-white"
                  href=""
                  target=""
                >
                  <div class="flex justify-center items-center">
                    <span>Join Alpha Today</span>
                    <span class="fa fa-xs fa-arrow-right ml-4"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
