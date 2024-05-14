import { useParams } from "react-router-dom";
import { blogDetails } from "../../../API/Functions/blogDetails.api";
import { Box, Container, Grid, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { blog_pic } from "../../../API/Axios/axiosInstance";
import { showComment } from "../../../API/Functions/showComment.api";
import { useForm } from "react-hook-form";
import { createCommentApi } from "../../../API/Functions/createComment.api";
import { toast } from "react-toastify";
import { likeapi } from "../../../API/Functions/like.api";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { disLikeapi } from "../../../API/Functions/disLike.api";
import { useEffect, useState } from "react";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

const BlogDetails = () => {
  const { id } = useParams();
  const [likeData, setLikeData] = useState(0); 
  const [DisLike, setDisLike] = useState(0);
  const { data } = useQuery({
    queryKey: "blogDetails",
    queryFn: () =>blogDetails(id)
,
  });
  console.log(data,"soumen");
  const { data: comment } = useQuery({
    queryKey: "comment",
    queryFn: () => showComment(id)
,
  });
  const { mutate } = useMutation({
    mutationFn: createCommentApi,
    mutationKey: "commentCreate",
    onSuccess: async (data) => {
      await QueryClient.invalidateQueries("comment");
      toast.success("Comment Created Successfully");
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const value = {
      name: data.name,
      email: data.email,
      comment: data.comment,
    };
    mutate({ id, payload: value });
  };
 

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const likes = await likeapi(id)
;
        setLikeData(likes); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchLikes();
  }, [id]);
  useEffect(() => {
    const fetchDislike = async () => {
      try {
        const likes = await disLikeapi(id)
;
        setDisLike(likes); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchDislike();
  }, [id]);

  const handleLikeUp = async (id)=> {
    try {
      const likes = await likeapi(id)
;
      setLikeData(likes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLikeDown = async(id)=> {
    try {
      const likes = await disLikeapi(id)
;
      setDisLike(likes);
    } catch (error) {
      console.log(error);
    }

    

  };

  return (
    <Container>
      <Grid container sx={{ marginTop: "100px" }}>
        <Grid item>
          <Card sx={{ width: "100%", justifyContent: "center" }}>
            <CardMedia
              sx={{ height: "500px" }}
              image={blog_pic(id)}
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ fontWeight: "800" }}
              >
                {data?.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                dangerouslySetInnerHTML={{ __html: data?.postText }}
              >
                

              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => handleLikeUp(id)}
                startIcon={<ThumbUpIcon />}
              >
                Like {likeData && likeData}
              </Button>
              <Button
                size="small"
                onClick={() => handleLikeDown(id)}
                startIcon={<ThumbDownIcon />}
              >
                Dislike {DisLike && DisLike}
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Box sx={{ marginTop: "30px" }}>
            <Typography variant="h5">Comments</Typography>
            {comment?.map((item) => (
              <div key={item._id} style={{ marginTop: "10px" }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body1">{item.comment}</Typography>
              </div>
            ))}
          </Box>
        </Grid>
        <Grid>
          <Box
            component="form"
            sx={{
              marginTop: "30px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Typography variant="h5">Leave a Reply</Typography>
            <TextField
              {...register("name", { required: true })}
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              sx={{ marginTop: "10px" }}
              name="name"
              error={errors.name}
              helperText={errors.name && "name is required"}
            />
            <TextField
              {...register("email", { required: true })}
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ marginTop: "10px" }}
              name="email"
              error={errors.email}
              helperText={errors.email && "email is required"}
            />
            <TextField
              {...register("comment", { required: true })}
              id="comment"
              label="Comment"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{ marginTop: "10px" }}
              name="comment"
              error={errors.comment}
              helperText={errors.comment && "comment is required"}
            />
            <Button
              type="submit"
              variant="outlined"
              size="large"
              sx={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogDetails;