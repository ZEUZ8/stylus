// "use client";
// import React from "react";
// import UserNavbar from "./UserNavbar";
// import AdminNavbar from "../admin/AdminNavbar/AdminNavbar";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const pathname = usePathname();
//   //getting the user from the path and conditionlay rendering the navbar for users and admin
//   const getUserRole = () => {
//     return pathname.startsWith("/admin");
//   };
//   const role = getUserRole();
//   return <>{role === false && <UserNavbar /> }</>;
//   // return <UserNavbar />;
// };

// export default Navbar;

"use client";
import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="grid grid-cols-2  p-5">
        <div className="p-2">Stylus</div>
        <div className="grid grid-cols-6 items-center">
            <div className="flex justify-center items-center">About Us</div>
            <div className="flex justify-center items-center">Home</div>
            <div className="flex justify-center items-center">Courses</div>
            <div className="flex justify-center items-center">Testimonials</div>
            <div className="flex justify-center items-center">Contact</div>
            <div className="flex justify-center items-center">
                <div className="border border-[#25D366] rounded-xl flex justify-center items-center text-white font-medium bg-[#25D366] py-1 w-full">
                    Chat
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Navbar;
