import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Login() {
  const [logged, setLogged] = useState(false);
  return (
    <div className="Login">
      <CssBaseline />
      <Container fixed>
        <Box >
          <div className="blackBackground">
            <div className="shadedBuld"></div>
            <div className="brightBuld">
              <div className="greyArea"></div>
            </div>
          </div>
        </Box>
        {/* { logged ? 'logged in' : null} */}
      </Container>
    </div>
  );
}

export default Login;

{
  // sx={{ bgcolor: "#cfe8fc", height: "100vh" }}
  /* <div style="border 1px solid black">

          </div> */
}

{/* <img
              id="loginBackground"
              src="./Assets/LoginBackground1.png"
              height="100%"
              width="100%"
              className="img-fluid"
            />

            <img
              src="./Assets/IMG_0534.jpg"
              height="600px"
              width="100%"
              className="img-fluid"
            /> */}
