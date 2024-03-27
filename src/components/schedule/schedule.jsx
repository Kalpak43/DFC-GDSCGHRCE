import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import closeButton from '../../assets/icon.png'
const style = {
  position: "absolute",
  //   opacity: "0.7",
  backgroundColor: "#141414",
  top: "50%",
  left: "50%",
  
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "85%",
  borderLeft: "5px solid red",
  borderRadius: "2%",
  overflowY:'auto ',
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
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
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function Schedule() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>click me modal ready!</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} lg={largeStyle}>
          <dir >
            <div className=" w-[2%] h-[2%] fixed hover:cursor-pointer ">
            <img  src={closeButton} onClick={handleClose} alt="close button" />

            </div>
            <h1
              style={{ fontSize: "30px", textAlign: "center", padding: "5px" }}
            >
              Schedule
            </h1>
            
            <div className="w-12/12 md:w-7/12 lg:6/12 mx-auto relative ">
              
              <div className="border-l-2 mt-10">
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#4285F4] text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#4285F4] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">
                      Orientation and Briefing on Uniliver basics
                    </h1>
                    <h3>classNameroom</h3>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#EA4335] text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#EA4335] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">
                      Orientation and Briefing on Uniliver basics
                    </h1>
                    <h3>classNameroom</h3>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#FBBC05] text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#FBBC05] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">
                      Orientation and Briefing on Uniliver basics
                    </h1>
                    <h3>classNameroom</h3>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#2ECC71] text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#2ECC71] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">
                      Orientation and Briefing on Uniliver basics
                    </h1>
                    <h3>classNameroom</h3>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#4285F4] text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#4285F4] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">
                      Orientation and Briefing on Uniliver basics
                    </h1>
                    <h3>classNameroom</h3>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#EA4335] text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#EA4335] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">
                      Orientation and Briefing on Uniliver basics
                    </h1>
                    <h3>classNameroom</h3>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#FBBC05] text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#FBBC05] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">
                      Orientation and Briefing on Uniliver basics
                    </h1>
                    <h3>classNameroom</h3>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#2ECC71] text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#2ECC71] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">
                      Orientation and Briefing on Uniliver basics
                    </h1>
                    <h3>classNameroom</h3>
                  </div>
                  <div></div>
                </div>
                
                
              </div>
              
            
            </div>
          </dir>
        </Box>
      </Modal>
    </div>
  );
}
