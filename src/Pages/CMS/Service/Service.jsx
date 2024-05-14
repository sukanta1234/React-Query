import { Container, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { serviceApi } from "../../../API/Functions/service.api";

const Service = () => {
  const { isPending, data } = useQuery({
    queryFn: serviceApi,
    queryKey: "service",
  });
//   console.log(data);
  return (
    <Container>
      <Grid container sx={{marginBottom:"20px"}}>
        {data?.map((item) => (
          <Grid lg={4}>
            <Card sx={{ maxWidth: "345px",height:"250px" ,marginTop:"10px"}}>
             
              <CardContent >
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center",fontWeight:"800"}}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{textAlign:"center"}}>
                  {item.details}
                </Typography>
              </CardContent>
             
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Service;
