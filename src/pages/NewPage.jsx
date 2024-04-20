import React, { useEffect, useRef, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import Hero from "../components/Hero";
import Speakers from "../components/Speakers";
import Timer from "../components/Timer";
import Giveaways from "../components/Giveaways";
import Sponsors from "../components/Sponsors";
import CommunityPartners from "../components/CommunityPartners";
import SocialMedia from "../components/SocialMedia";
import Schedule from "../components/schedule/schedule";

// import Venue from "../components/venue";
import Background from "../components/Background/Background";
import Venue from "../components/venue";


export default function NewPage() {
  
  const layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 1 },
      { i: "b", x: 1, y: 0, w: 1, h: 1 },
      { i: "c", x: 2, y: 0, w: 2, h: 3 },
      { i: "d", x: 4, y: 0, w: 2, h: 2 },
      { i: "f", x: 0, y: 2, w: 2, h: 2 },
      { i: "g", x: 4, y: 3, w: 2, h: 2 },
      { i: "h", x: 0, y: 4, w: 2, h: 2 },
      { i: "i", x: 2, y: 4, w: 2, h: 2 },
      { i: "j", x: 4, y: 5, w: 2, h: 1 },
    ],
    md: [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 1, w: 1, h: 3 },
      { i: "c", x: 0, y: 0, w: 2, h: 8 },
      { i: "d", x: 0, y: 4, w: 2, h: 4 },
      { i: "f", x: 0, y: 0, w: 2, h: 6 },
      { i: "g", x: 0, y: 2, w: 2, h: 7 },
      { i: "h", x: 0, y: 7, w: 2, h: 7 },
      { i: "i", x: 0, y: 8, w: 2, h: 5 },
      { i: "j", x: 0, y: 9, w: 2, h: 4 },
    ],
  };

  const layoutRef = useRef(null);
  const [height, setHeight] = useState(30);

  useEffect(() => {
    // height of layoutRef
    setHeight(layoutRef.current.clientHeight / 6);
  }, []);

  const ResponsiveGridLayout = WidthProvider(Responsive);

  return (
    <div className=" lg:h-screen px-0 lg:px-4" ref={layoutRef}>
      <Background />
      <ResponsiveGridLayout
        className="layout my-auto"
        layouts={layouts}
        rowHeight={height}
        margin={[15, 15]}
        breakpoints={{ lg: 1024, md: 768, sm: 640, xs: 480, xxs: 0 }}
        cols={{ lg: 6, md: 1, sm: 1, xs: 1, xxs: 1 }}
        compactType="vertical"
        draggableHandle=".dragHandle"
      >
        <div key="a" className=" select-none container order-1 lg:order-auto">
          <div className="dragHandle absolute top-2 left-0 right-0 w-12 h-2 mx-auto bg-blue-400 cursor-[grab] rounded-full"></div>
          <Timer />
        </div>
        <div key="b" className="select-none container" id="b">
          <div className="dragHandle absolute top-2 left-0 right-0 w-12 h-2 mx-auto bg-blue-400 cursor-[grab] rounded-full z-50"></div>
          <Schedule />
        </div>
        <div key="c" className="select-none container">
          <div className="dragHandle absolute top-2 left-0 right-0 w-12 h-2 mx-auto bg-blue-400 cursor-[grab] rounded-full"></div>
          <Hero />
        </div>
        <div key="d" id="d" className="select-none container shadow-lg">
          <div className="dragHandle absolute top-2 left-0 right-0 w-12 h-2 mx-auto bg-blue-400 cursor-[grab] rounded-full"></div>
          <Venue />
        </div>
        <div key="f" className="select-none container">
          <div className="dragHandle absolute top-2 left-0 right-0 w-12 h-2 mx-auto bg-blue-400 cursor-[grab] rounded-full"></div>
          <Giveaways />
        </div>
        <div key="g" className="select-none container">
          <div className="dragHandle absolute top-2 left-0 right-0 w-12 h-2 mx-auto bg-blue-400 cursor-[grab] rounded-full"></div>
          <Speakers />
        </div>
        <div key="h" className="select-none container">
          <div className="dragHandle absolute top-2 left-0 right-0 w-12 h-2 mx-auto bg-blue-400 cursor-[grab] rounded-full"></div>
          <Sponsors />
        </div>
        <div key="i" className="select-none container" id="i">
          <div className="dragHandle absolute top-2 left-0 right-0 w-12 h-2 mx-auto bg-blue-400 cursor-[grab] rounded-full"></div>
          <CommunityPartners />
        </div>
        <div key="j" className="select-none container">
          <div className="dragHandle absolute top-2 left-0 right-0 w-12 h-2 mx-auto bg-blue-400 cursor-[grab] rounded-full"></div>
          <SocialMedia />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}
