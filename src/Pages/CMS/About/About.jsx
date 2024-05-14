import { Container, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { teamApi } from "../../../API/Functions/team.api";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { team_pic } from "../../../API/Axios/axiosInstance";

const About = () => {
  const { isPending, data } = useQuery({
    queryKey: "team",
    queryFn: teamApi,
  });
  console.log(data);
  return (
    <Container>
      <Grid container sx={{ marginTop: "100px", marginBottom: "50px" }}>
        {data?.map((item) => (
          <Grid item lg={3}>
            <Card sx={{ width: "245px", marginTop: "10px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250px"
                image={team_pic(item._id)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.possession}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;
