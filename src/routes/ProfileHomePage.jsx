import React, { useState, useEffect } from "react"; // import React, useState and useEffect from the react library
import { useParams } from "react-router-dom"; // import useParams from react-router-dom
import axios from "axios"; // import axios library for making API requests
import Navbar from "../Components/Navbar"; // import Navbar component
import SideNavbar from "../Components/SideNavbar"; // import SideNavbar component
import Chat from "../Components/ChatPage"; // import Chat component
import "../styles/allcss.css";

const ProfileHomePage = () => {
  // create a functional component named ProfileHomePage
  const { userId } = useParams(); // use the useParams hook to get the userId parameter from the URL
  const [user, setUser] = useState(null); // declare a state variable called user and initialize it to null using useState hook

  useEffect(() => {
    // use the useEffect hook to perform side effects in the component
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://panorbit.in/api/users.json`); // Updated API URL
        const userData = res.data.users.find(
          (user) => user.id === parseInt(userId)
        );
        setUser(userData);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    };
    fetchUser();
  }, [userId]);

  localStorage.setItem("userData", JSON.stringify(user)); // store the user data in the localStorage with the key "userData"
  // console.log("data" , user);
  const dataArr = JSON.parse(localStorage.getItem("userData")); // retrieve the user data from localStorage and parse it as JSON

  if (!dataArr) {
    // if the dataArr is falsy, render a loading spinner
    return (
      <div>
        <img
          className="w-[30rem]"
          style={{ margin: "auto" }}
          src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
          alt="loading"
        />
      </div>
    );
  }

  return (
    // render the component UI
    <>
      <div className="flex ">
        <div className="w-[24%]">
          <SideNavbar />
        </div>
        {dataArr && (
          <div className="py-12  w-[76%] ">
            <Navbar />
            <hr />
            <div className="flex flex-wrap justify-between mt-4 ">
              <div className=" w-[35%]">
                <div>
                  <img
                    className="w-40 h-40 rounded-full m-auto"
                    src={dataArr.profilepicture}
                    alt={dataArr.username}
                  />
                  <p className="text-gray-700 text-xl font-medium pt-2 ">
                    {dataArr?.name}
                  </p>
                </div>
                <div class="leading-8">
                  <p class="text-gray-500 font-medium flex">
                    <span class="label">Username</span>
                    <span class="colon">:</span>{" "}
                    <b class="text-gray-700">{dataArr?.username}</b>
                  </p>
                  <p class="text-gray-500 font-medium flex">
                    <span class="label">E-mail</span>
                    <span class="colon">:</span>{" "}
                    <b class="text-gray-700">{dataArr?.email}</b>
                  </p>
                  <p class="text-gray-500 font-medium flex">
                    <span class="label">Phone</span>
                    <span class="colon">:</span>{" "}
                    <b class="text-gray-700">{dataArr?.phone}</b>
                  </p>
                  <p class="text-gray-500 font-medium flex mb-4">
                    <span class="label">Website</span>
                    <span class="colon">:</span>{" "}
                    <b class="text-gray-700">{dataArr?.website}</b>
                  </p>
                </div>

                <hr />
                <div className="leading-8">
                  <p className="text-gray-500 font-medium text-center">
                    Company
                  </p>
                  <p className="text-gray-500 font-medium flex">
                    <span className="label">Username</span>
                    <span className="colon">:</span>
                    <b className="text-gray-700">{dataArr?.username}</b>
                  </p>
                  <p className="text-gray-500 font-medium flex">
                    <span className="label">E-mail</span>
                    <span className="colon">:</span>
                    <b className="text-gray-700">{dataArr?.email}</b>
                  </p>
                  <p className="text-gray-500 font-medium flex">
                    <span className="label">Phone</span>
                    <span className="colon">:</span>
                    <b className="text-gray-700">{dataArr?.phone}</b>
                  </p>
                  <p className="text-gray-500 font-medium flex">
                    <span className="label">Website</span>
                    <span className="colon">:</span>
                    <b className="text-gray-700">{dataArr?.website}</b>
                  </p>
                </div>
              </div>
              <hr className="border border-gray-300 h-auto" />
              <div className="w-[50%]  pr-8">
                <div className="leading-8">
                  <p className="text-gray-500 font-medium text-left">
                    Address:
                  </p>
                  <p className="text-gray-500 font-medium flex ">
                    <span className="labels ">Street</span>
                    <span className="colon">:</span>
                    <b className="text-gray-700">{dataArr?.address.street}</b>
                  </p>
                  <p className="text-gray-500 font-medium flex">
                    <span className="labels">Suite</span>
                    <span className="colon">:</span>
                    <b className="text-gray-700">{dataArr?.address.suite}</b>
                  </p>
                  <p className="text-gray-500 font-medium flex">
                    <span className="labels">City</span>
                    <span className="colon">:</span>
                    <b className="text-gray-700">{dataArr?.address.city}</b>
                  </p>
                  <p className="text-gray-500 font-medium flex">
                    <span className="labels">Zipcode</span>
                    <span className="colon">:</span>
                    <b className="text-gray-700">{dataArr?.address.zipcode}</b>
                  </p>
                </div>

                <div className="pt-4">
                  <img
                    className="rounded-xl w-[150%] h-60"
                    src="https://www.google.com/maps/d/thumbnail?mid=1ffAcSowW95EInWgX1kXYF5l8PPc&hl=en"
                    alt="map"
                  />
                  <div className="flex justify-end gap-4 mt-2">
                    <p className="text-gray-500 font-medium flex">
                      Lat:{" "}
                      <p className="text-gray-700 ml-2">
                        {dataArr?.address.geo.lat}
                      </p>
                    </p>
                    <p className="text-gray-500 font-medium flex">
                      Long:{" "}
                      <p className="text-gray-700 ml-2">
                        {dataArr?.address.geo.lng}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="last">
        <Chat />
      </div>
    </>
  );
};

export default ProfileHomePage;
