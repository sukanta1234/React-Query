import { useQuery } from "@tanstack/react-query";
import React from "react";
import { courseApi } from "../../../API/Functions/course.api";
import { Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { course_pic } from "../../../API/Axios/axiosInstance";

const Course = () => {
  const { isPending, data } = useQuery({
    queryKey: "course",
    queryFn: courseApi,
  });
  // console.log(data);
  return (
    <Container>
      <Grid container sx={{ marginTop: "100px", marginBottom: "50px" }}>
        {data?.map((item) => (
          <Grid item lg={4}>
            <Card sx={{ maxWidth: 345, marginTop: "10px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300px"
                image={course_pic(item._id)}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {<span style={{ fontWeight: "900" }}>{item.fees}</span>}/
                  {item.duration}
                </Typography>
                <Typography variant="h6">
                  Requirement:{item.requirement}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="large"
                  variant="outlined"
                
                  color="success"
                  sx={{ backgroundColor: "blueviolet",color:"whitesmoke" }}
                >
                  Buy
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Course;
