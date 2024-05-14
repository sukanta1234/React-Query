import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useQuery } from "@tanstack/react-query";
import { bannerApi } from "../../../API/Functions/Banner.api";
import { banner_pic } from "../../../API/Axios/axiosInstance";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const { isPending,data } = useQuery({
    queryFn: bannerApi,
    queryKey:"banner"
  });
    // console.log(data);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
       {data?.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  <Box
                    sx={{
                      position: "relative",
                      height: "900px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      
                    }}
                  >
                    <img
                      src={banner_pic(step._id)}
                      alt="hello world"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <Box
                      sx={{
                        position: "absolute",

                        color: "#fff",
                        padding: 2,

                        margin: "0 auto",
                        width: "750px",
                        backgroundColor: "#1a1e1e",
                        borderTop: "4px solid green",
                        height: "250px",
                      }}
                    >
                      <Typography variant="h5" component="div">
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "30px",
                        }}
                      >
                        {step.description}
                      </Typography>
               
                      
                    </Box>
                  </Box>
                </>
              ) : null}
            </div>
          ))}

      </AutoPlaySwipeableViews>
    </Box>
  )
}

export default Banner;
