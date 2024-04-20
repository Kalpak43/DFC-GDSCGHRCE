import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaArrowRight } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

import rizAhmed from "../../assets/images/speakers/Dr_Rizwan_Ahmed.jpeg";
import ShriArdha from "../../assets/images/speakers/Shrikant_Ardhapurkar.jpeg";
import AksZad from "../../assets/images/speakers/Dr_Akshay_Zadgaonkar.jpeg";
import AniKal from "../../assets/images/speakers/Aniruddha_Kalbande.jpeg";
import ShivJo from "../../assets/images/speakers/Shivam_Joshi.jpeg";
import vishnuPillai from "../../assets/images/speakers/Vishnu_Pillai.png";
import ashutoshShivhare from "../../assets/images/speakers/Ashutosh_Shivhare.jpeg";
import akashS from "../../assets/images/speakers/akashS.jpg";
import sachinUntawale from "../../assets/images/speakers/Sachin_Untawale.jpeg";
import maneeshNair from "../../assets/images/speakers/maneesh.png";
import arvind from "../../assets/images/speakers/arvind.png";
import ramaR from "../../assets/images/speakers/RamaR.jpg";
import amitKale from "../../assets/images/speakers/AmitKale.jpg";

const style = {
  position: "absolute",

  backgroundColor: "var(--bg-clr)",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "95%",

  borderRadius: "2%",
  overflowY: "auto ",
  // border: "1px solid black",
  boxShadow: 24,
  // padding right = 1
  paddingRight: 1,
};

const largeStyle = {
  position: "absolute",
  opacity: "0.4",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "85%",
  borderLeft: "5px solid red",
  borderRadius: "5px",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Schedule() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const schedule = [
    {
      time: "09:30 a.m. – 10:30 a.m",
      event: "Registration and Kickoff",
      speakers: [],
    },
    {
      time: "10:30 a.m. – 10:40 a.m",
      event: "Inauguration",
      speakers: [],
    },
    {
      time: "10:40 a.m. – 11:00 a.m",
      event: "Guest Welcome / Lightning of Lamp",
      speakers: [],
    },
    {
      time: "11:00 a.m. – 11:30 a.m",
      event: "Keynote 1: Role of AI to bridge industry academia gap",
      speakers: [["Mr. Arvind Kumar",arvind]],
    },
    {
      time: "11:30 a.m. – 12:00 p.m",
      event: "Keynote 2: Cyber Security",
      speakers: [["Dr. Rizwan Ahmed", rizAhmed]],
    },
    { time: "12:00 p.m. – 12:30 p.m", event: "Keynote 3", speakers: [["Mr. Amit Kale",amitKale ]] },
    {
      time: "12:30 p.m. – 1:15 p.m",
      event:
        "Panel Discussion 1: Generative AI in Industry And academic research",
      speakers: [
        ["Mr. Aniruddha Kalbande", AniKal],
        ["Mr. Arvind Kumar", arvind],
        ["Mr. Rizwan Ahmed", rizAhmed],
        ["Mr. Amit Kale", amitKale],
        ["Mr. Shrikant Ardhapurkar", ShriArdha],
        ["Mr. Sachin Untawale", sachinUntawale],
      ],
    },
    { time: "01:15 p.m. – 02:00 p.m", event: "Networking Lunch", speakers: [] },
    {
      time: "02:00 p.m. – 02:30 p.m",
      event: "Technical Treasure Hunt / Jamming Session",
      speakers: [],
    },
    {
      time: "02:30 p.m. – 03:00 p.m",
      event: "Placement Training / Resume Building",
      speakers: [["Mr. Maneesh Nair", maneeshNair]],
    },
    {
      time: "03:00 p.m. – 03:30 p.m",
      event: "Speaker Session 1: How to Enter, and Exit the AI Chakravyu",
      speakers: [["Mr. Akshay Zadgaonkar", AksZad]],
    },
    {
      time: "03:30 p.m. – 04:00 p.m",
      event: "Speaker Session 2: Impact of Salesforce on Process Automation",
      speakers: [["Mr. Akash Singh", akashS]],
    },
    {
      time: "04:00 p.m. – 04:30 p.m",
      event: "Speaker Session 3",
      speakers: [
        ["Mr. Ramakrishna R", ramaR],
        ["Mr. Ashutosh Shivhare", ashutoshShivhare],
      ],
    },
    {
      time: "04:30 p.m. – 05:00 p.m",
      event:
        "Panel Discussion 2: Current IT market Scenario and Job Readiness to technocrats",
      speakers: [
        ["Mr. Shivam Joshi", ShivJo],
        ["Mr. Akshay Zadgaonkar", AksZad],
        ["Mr. Aakash Singh", akashS],
        ["Mr. Ramakrishna R", ramaR],
        ["Mr. Ashutosh Shivhare", ashutoshShivhare],
        ["Mr. Vishnu Pillai", vishnuPillai],
      ],
    },
    { time: "05:00 p.m. – 06:00 p.m", event: "Valedictory", speakers: [] },
  ];

  const colors = ["#EA4335", "#4285F4", "#FBBC05", "#2ECC71"];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <button
        className="group overflow-hidden relative h-full w-full text-4xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text hover:bg-transparent transition-all duration-700 hover:text-white"
        onClick={handleOpen}
      >
        Schedule{" "}
        <div className="block">
          <FaArrowRight className="block mx-auto text-[var(--font-clr)] group-hover:text-white" />
        </div>
        <div className="h-full w-full absolute top-0 left-0 z-[-1] bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] rounded-lg bg-opacity-100 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      </button>
      {/* <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
        Schedule
      </h1>
      <p className="">
        Revealing Soon...
      </p> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} lg={largeStyle}>
          <dir className="relative">
            <button
              className="absolute top-0 right-0 text-2xl m-2"
              onClick={handleClose}
            >
              <GiCancel />
            </button>
            <h1
              style={{ fontSize: "30px", textAlign: "center", padding: "5px" }}
            >
              Schedule
            </h1>

            <div className="w-12/12 md:w-7/12 lg:6/12 mx-auto relative ">
              <div className="border-l-2 border-[var(--font-clr)] mt-10">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className={`transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[${
                      colors[index % 4]
                    }] border-2 border-[${
                      colors[index % 4]
                    }] bg-opacity-40 rounded-2xl md:rounded-xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0`}
                  >
                    <div
                      className={`w-5 h-5 bg-[${
                        colors[index % 4]
                      }] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0`}
                    ></div>

                    <div
                      className={`w-10 h-1 bg-[${
                        colors[index % 4]
                      }] absolute -left-10 z-0`}
                    ></div>

                    <div className="flex-auto w-full">
                      <h4 className="text-base">{item.time}</h4>
                      <h1 className="text-xl font-[500] capitalize">
                        {item.event}
                      </h1>
                      {item.speakers.length > 0 && (
                        <div className="flex mt-2 gap-2 flex-wrap">
                          {item.speakers.map((speaker, j) => (
                            <div
                              key={j}
                              className={`bg-[var(--bg-clr)] border-2 border-[${
                                colors[index % 4]
                              }] px-2 py-2 rounded-full flex items-center gap-2`}
                            >
                              <div
                                className={`h-8 aspect-square rounded-full border-2 border-[${
                                  colors[index % 4]
                                } inline`}
                              >
                                <img
                                  src={speaker[1]}
                                  alt={speaker[0]}
                                  className="h-full w-full object-cover rounded-full"
                                />
                              </div>
                              {speaker[0]}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {/* <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#EA4335] border-2 border-[#EA4335] bg-opacity-40 rounded-2xl md:rounded-full mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#EA4335] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#EA4335] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">09:30 a.m. – 10:30 a.m</h1>
                    <h1 className="text-xl font-[500] capitalize">
                      Registration and Kickoff
                    </h1>
                  </div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#4285F4] border-2 border-[#4285F4] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#4285F4] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#4285F4] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-bases">10:30 a.m. – 10:40 a.m</h1>
                    <h1 className="text-xl font-[500] capitalize">Inauguration</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#FBBC05] border-2 border-[#FBBC05] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#FBBC05] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#FBBC05] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">10:40 a.m. – 11:00 a.m</h1>
                    <h1 className="text-xl font-[500] capitalize">
                      Guest Welcome / Lightning of Lamp
                    </h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#2ECC71] border-2 border-[#2ECC71] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#2ECC71] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#2ECC71] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">11:00 a.m. – 11:30 a.m</h1>
                    <h1 className="text-xl font-[500] capitalize">
                      Keynote 1: Role of AI to bridge industry academia gap
                    </h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#EA4335] border-2 border-[#EA4335] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#EA4335] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#EA4335] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">11:30 a.m. – 12:00 p.m</h1>
                    <h1 className="text-xl font-[500] capitalize">
                      Keynote 2: Cyber Security
                    </h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  bg-[#4285F4] border-2 border-[#4285F4] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#4285F4] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#4285F4] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">12:00 p.m. – 12:30 p.m</h1>
                    <h1 className="text-xl font-[500] capitalize">Keynote 3</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  bg-[#FBBC05] border-2 border-[#FBBC05] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#FBBC05] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#FBBC05] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">12:30 p.m. – 1:15 p.m</h1>
                    <h1 className="text-xl font-[500] capitalize">
                      Panel Discussion 1: Generative AI in Industry And academic
                      research
                    </h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  bg-[#2ECC71] border-2 border-[#2ECC71] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#2ECC71] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#2ECC71] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">01:15 p.m. – 02:00 p.m</h1>
                    <h1 className="text-xl font-[500] capitalize">Networking Lunch</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#EA4335] border-2 border-[#EA4335] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#EA4335] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#EA4335] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">02:00 p.m. – 02:30 p.m</h1>
                    <h1 className="text-xl font-[500] capitalize">
                      Technical Treasure Hunt / Jamming Session
                    </h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#4285F4] border-2 border-[#4285F4] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#4285F4] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#4285F4] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">02:30 p.m. – 03:00 p.m</h1>
                    <h1 className="text-xl font-[500] capitalize">
                      Career Grooming / Resume Building
                    </h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#FBBC05] border-2 border-[#FBBC05] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#FBBC05] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#FBBC05] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">03:00 p.m. – 03:30 p.m</h1>
                    <h1 className="text-xl font-[500] capitalize">
                      Speaker Session 1: Mr. Akshay Zadgaonkar 
                    </h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#2ECC71] border-2 border-[#2ECC71] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#2ECC71] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#2ECC71] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">03:30 p.m. – 04:00 p.m</h1>
                    <h1 className="text-xl font-[500] capitalize">Speaker Session 2: Mr. Aakash Singh</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#EA4335] border-2 border-[#EA4335] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#EA4335] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#EA4335] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">04:00 p.m. – 04:30 p.m</h1>
                    <h1 className="text-xl font-[500] capitalize">Speaker Session 3: Mr. Ramakrishna R</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#4285F4] border-2 border-[#4285F4] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#4285F4] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#4285F4] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">04:30 p.m. – 05:00 p.m</h1>
                    <h1 className="text-xl font-[500] capitalize">
                      Panel Discussion 2: Current IT market Scenario and Job
                      Readiness to technocrats
                    </h1>
                  </div>
                  <div></div>
                </div>
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#FBBC05] border-2 border-[#FBBC05] bg-opacity-40 rounded-2xl md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#FBBC05] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#FBBC05] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-base">05:00 p.m. – 06:00 p.m</h1>
                    <h1 className="text-xl font-[500] capitalize">
                      Valedictory
                    </h1>
                  </div>
                  <div></div>
                </div> */}
              </div>
            </div>
          </dir>
        </Box>
      </Modal>
    </div>
  );
}
