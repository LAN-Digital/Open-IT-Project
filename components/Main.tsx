import React from "react";
import ReactPlayer from "react-player";
import LiveChat from "./LiveChat";

const Main = () => {
  return (
    <div className="bg-gray-800 h-screen">
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="text-blue-300">Stream1</h1>
            <div className="w-full mb-12 block">
              <div className="pt-[56.25%] flex bg-black relative shadow-lg">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: "0", left: "0" }}
                  url="https://www.youtube.com/watch?v=fEvM-OUbaKs"
                  controls
                  playing
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded px-6 py-2">
            <LiveChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
