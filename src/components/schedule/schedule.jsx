import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Schedule() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* <button onClick={handleOpen}  >click me modal ready!</button> */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
        Schedule
      </h1>
      <p className="">
        Revealing Soon...
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} lg={largeStyle}>
          <dir>
            <h1
              style={{ fontSize: "30px", textAlign: "center", padding: "5px" }}
            >
              Schedule
            </h1>
            <Grid container spacing={2}>
              <Grid style={{ opacity: "1" }} item xs={2}>
                <Item
                  style={{
                    color: "white ",
                    backgroundColor: "rgb(40, 41, 43)",
                    fontWeight: "normal",
                    height: "80px",

                    textAlign: "center",
                  }}
                >
                  9:00am - 10:00am
                </Item>
              </Grid>
              <Grid style={{ height: "80px" }} item xs={5}>
                <Item
                  style={{
                    color: "white ",
                    backgroundColor: "rgb(40, 41, 43)",
                    fontWeight: "normal",
                    height: "80px",

                    borderLeft: "5px solid rgb(219, 68, 55)",
                    textAlign: "center",
                  }}
                >
                  xs=4
                </Item>
              </Grid>
              <Grid item style={{ textAlign: "center" }} xs={5}>
                <Item
                  style={{
                    borderLeft: "5px solid rgb(15, 157, 86)",
                    backgroundColor: "rgb(29, 58, 46)",
                    color: "white ",

                    fontWeight: "normal",
                    height: "80px",
                    textAlign: "start",
                  }}
                >
                  Breakfast ☕
                </Item>
              </Grid>
              <Grid style={{ opacity: "1" }} item xs={2}>
                <Item
                  style={{
                    color: "white ",
                    backgroundColor: "rgb(40, 41, 43)",
                    fontWeight: "normal",
                    height: "80px",

                    textAlign: "center",
                  }}
                >
                  9:00am - 10:00am
                </Item>
              </Grid>
              <Grid item style={{ textAlign: "center" }} xs={10}>
                <Item
                  style={{
                    borderLeft: "5px solid rgb(15, 157, 86)",
                    backgroundColor: "rgb(40, 41, 43)",
                    color: "white ",

                    fontWeight: "normal",
                    height: "80px",
                    textAlign: "start",
                  }}
                >
                  Free popcorn and movie
                </Item>
              </Grid>

              <Grid style={{ opacity: "1" }} item xs={2}>
                <Item
                  style={{
                    color: "white ",
                    backgroundColor: "rgb(40, 41, 43)",
                    fontWeight: "normal",
                    height: "80px",

                    textAlign: "center",
                  }}
                >
                  9:00am - 10:00am
                </Item>
              </Grid>
              <Grid item style={{ textAlign: "center" }} xs={10}>
                <Item
                  style={{
                    borderLeft: "5px solid rgb(66, 133, 244)",
                    backgroundColor: "rgb(40, 41, 43)",
                    color: "white ",

                    fontWeight: "normal",
                    height: "80px",
                    textAlign: "start",
                  }}
                >
                  Timepass video games
                </Item>
              </Grid>

              <Grid style={{ opacity: "1" }} item xs={2}>
                <Item
                  style={{
                    color: "white ",
                    backgroundColor: "rgb(40, 41, 43)",
                    fontWeight: "normal",
                    height: "80px",

                    textAlign: "center",
                  }}
                >
                  9:00am - 10:00am
                </Item>
              </Grid>
              <Grid item style={{ textAlign: "center" }} xs={10}>
                <Item
                  style={{
                    borderLeft: "5px solid rgb(244, 180, 0)",
                    backgroundColor: "rgb(40, 41, 43)",
                    color: "white ",

                    fontWeight: "normal",
                    height: "80px",
                    textAlign: "start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "7px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        backgroundImage: `url(https://m.economictimes.com/thumb/msid-97021979,width-1200,height-900,resizemode-4,imgsize-46928/modi-new-pti1.jpg)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div>
                      <div>Narendra ModiJi</div>
                      <div>chief minister of Lokmanya nagar</div>
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid style={{ opacity: "1" }} item xs={2}>
                <Item
                  style={{
                    color: "white ",
                    backgroundColor: "rgb(40, 41, 43)",
                    fontWeight: "normal",
                    height: "80px",

                    textAlign: "center",
                  }}
                >
                  9:00am - 10:00am
                </Item>
              </Grid>
              <Grid item style={{ textAlign: "center" }} xs={10}>
                <Item
                  style={{
                    borderLeft: "5px solid rgb(244, 180, 0)",
                    backgroundColor: "rgb(40, 41, 43)",
                    color: "white ",

                    fontWeight: "normal",
                    height: "80px",
                    textAlign: "start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "7px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BMmM3MWU1NWQtMDc5ZC00YzgzLTljZGItOTVkMDJlNzkxY2MxXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div>
                      <div>Rahul gandhi</div>
                      <div>Meme ministry of india</div>
                    </div>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </dir>
        </Box>
      </Modal>
    </div>
  );
}
