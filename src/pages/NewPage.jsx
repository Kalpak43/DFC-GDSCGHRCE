import React, { useEffect, useRef, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

export default function NewPage() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 2 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];

  const layoutRef = useRef(null);
  const [height, setHeight] = useState(30); 

  useEffect(() => {
    // height of layoutRef
    setHeight(layoutRef.current.clientHeight / 6);
  } ,[]);

  const ResponsiveGridLayout = WidthProvider(Responsive);

  

  return (
    <div className="w-screen lg:h-screen px-4 lg:px-10 py-8" ref={layoutRef}>
        <div className="w-20 aspect-square rounded-full bg-red-600 absolute top-[10%] left-[10%]">

        </div>
      <ResponsiveGridLayout
        className="layout"
        rowHeight={height}
        margin={[15, 15]}
        breakpoints={{ lg: 1024, md: 768, sm: 640, xs: 480, xxs: 0 }}
        cols={{ lg: 6, md: 1, sm: 1, xs: 1, xxs: 1 }}
      >
        <div key="a" className="border-2 border-black rounded-xl transition-all duration-100 bg-[#e3e3e3] bg-opacity-20 backdrop-blur-md" data-grid={{ x: 0, y: 0, w: 1, h: 1, static: true }}>
          Timer
        </div>
        <div key="b" className="border-2 border-black rounded-xl transition-all duration-100" data-grid={{ x: 1, y: 0, w: 1, h: 1 }}>
          Schedule
        </div>
        <div key="c" className="border-2 border-black rounded-xl transition-all duration-100" data-grid={{ x: 2, y: 0, w: 2, h: 3 }}>
          TechOtsav
        </div>
        <div key="d" className="border-2 border-black rounded-xl transition-all duration-100" data-grid={{ x: 4, y: 0, w: 2, h: 2 }}>
          Venue
        </div>
        <div key="f" className="border-2 border-black rounded-xl transition-all duration-100" data-grid={{ x: 0, y: 2, w: 2, h: 2 }}>
          Giveaways
        </div>
        <div key="g" className="border-2 border-black rounded-xl transition-all duration-100" data-grid={{ x: 4, y: 3, w: 2, h: 2 }}>
          Speakers
        </div>
        <div key="h" className="border-2 border-black rounded-xl transition-all duration-100" data-grid={{ x: 0, y: 4, w: 2, h: 2 }}>
          Sponsors
        </div>
        <div key="i" className="border-2 border-black rounded-xl transition-all duration-100" data-grid={{ x: 2, y: 4, w: 2, h: 2 }}>
          Community Partners
        </div>
        <div key="j" className="border-2 border-black rounded-xl transition-all duration-100" data-grid={{ x: 4, y: 5, w: 2, h: 1 }}>
          Social Media
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}
