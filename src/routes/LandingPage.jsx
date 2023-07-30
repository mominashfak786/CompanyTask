import React, { useContext } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/wavebg.png";
import { userContext } from "../Context/UserProvider";
import "../styles/allcss.css";
const LandingPage = () => {
  const { users } = useContext(userContext);

  return (
    // Container for the Landing Page
    <div
      className="pt-40"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {/* Container for Account Selection */}
      <div
        className=" w-[40%] m-auto  rounded-[2rem] "
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }}
      >
        {/* Header for Account Selection */}
        <div className=" bg-gray-100 rounded-t-[1.5rem]">
          <h1 className="text-xl text-zinc-600 font-semibold p-8 text-center">
            Select an Account
          </h1>
        </div>

        {/* List of User Accounts */}
        <div className="bg-white rounded-b-[2.8rem] ">
          <div className="custom-scrollbar pl-6 pt-2  rounded-[3rem] " >
            {/* Checking if there are any user accounts before mapping */}
            {users?.length > 0 &&
              users.map((user) => (
                
                <li key={user.id} className="mb-2 list-none">
                  {/* Link to the user's profile page */}
                  <Link
                    to={`/profile/${user.id}`}
                    className="block rounded hover:bg-gray-100"
                  >
                    <div className="flex items-center pb-2 bg-white">
                      <img
                        src={user.profilepicture}
                        alt={user.username}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div className="font-medium">{user.name}</div>
                    </div>
                    <hr className="centered-hr" />
                  </Link>
                </li>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
