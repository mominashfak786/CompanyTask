import { useContext } from "react";
import Chat from "../Components/ChatPage";
import Navbar from "../Components/Navbar";
import SideNavbar from "../Components/SideNavbar";
import { userContext } from "../Context/UserProvider";

const Posts = () => {
  const { dataArr } = useContext(userContext);

  return (
    <div className="">
      <div className=" flex ">
        <div className=" w-[24%]">
          <SideNavbar />
        </div>
        <div className="py-12 px-8 w-[76%]">
          <Navbar />
          <hr />
          {!dataArr && (
            <div className="mt-4 p-8">
              <div className="text-center font-bold text-gray-400 text-[4rem] opacity-25 p-40">
                Coming Soon
              </div>
            </div>
          )}

          {dataArr && (
            <div className="mt-4 p-8">
              {/* Your posts content goes here */}
            </div>
          )}
        </div>
      </div>
      <Chat />
    </div>
  );
};

export default Posts;
