import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { allBlogApi } from "../../../API/Functions/allBlog.api";
import {
  Box,
  Container,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { blog_pic } from "../../../API/Axios/axiosInstance";
import { categoryApi } from "../../../API/Functions/category.api";
import { catPost } from "../../../API/Functions/Catpost.api";
import { latestPost } from "../../../API/Functions/latesPost.api";
import { Link } from "react-router-dom";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const { isPending, data: allBlogs } = useQuery({
    queryKey: "allBlog",
    queryFn: allBlogApi,
  });
  const { data: categories } = useQuery({
    queryKey: "category",
    queryFn: categoryApi,
  });
  const { data: latestPosts } = useQuery({
    queryKey: "latestPost",
    queryFn: latestPost,
  });

  const onClickCategory = async (categoryId) => {
    try {
      setSelectedCategory(categoryId);
      const filteredData = await catPost(categoryId);
      setFilteredBlogs(filteredData);
    } catch (error) {
      console.error("Error while fetching category posts:", error);
    }
  };
  const truncatedText = (text, maxLength) => {
    if (text.length > maxLength) {
      text = text.substring(0, maxLength);
      text = text.replace(/<[^>]*>/g, "");
      return text + "....";
    }
    return text;
  };

  const handlePost = (item) => {
    setSelectedCategory(item._id);
    setFilteredBlogs([item]);
  };

  const handleAll = () => {
    setSelectedCategory(null);
    setFilteredBlogs(allBlogs);
  };

  return (
    <Container maxWidth="xl" sx={{ marginTop: "100px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Box>
            <Typography variant="h6" align="center" gutterBottom>
              Categories
            </Typography>
            <Button
              variant="text"
              color="primary"
              fullWidth
              onClick={handleAll}
            >
              All
            </Button>
            {categories?.map((category) => (
              <Button
                key={category._id}
                onClick={() => onClickCategory(category._id)}
                variant="text"
                color="primary"
                fullWidth
              >
                {category.category}
              </Button>
            ))}
          </Box>
          <Box mt={4}>
            <Typography variant="h6" align="center" gutterBottom>
              Latest Posts
            </Typography>
            <Grid container spacing={2}>
              {latestPosts?.map((post) => (
                <Grid item key={post._id} xs={12} sm={12}>
                  <Box display="flex" alignItems="center">
                    <img
                      src={blog_pic(post._id)}
                      alt=""
                      height="100px"
                      width="80px"
                    />
                    <Button onClick={() => handlePost(post)}>
                      {post.title}
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={3}>
            {(selectedCategory ? filteredBlogs : allBlogs)?.map((blog) => (
              <Grid item key={blog._id} xs={12} md={12}>
                <Card>
                  <CardMedia
                    component="img"
                    height="550px"
                    image={blog_pic(blog._id)}
                    alt={blog.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {blog.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      dangerouslySetInnerHTML={{
                        __html: truncatedText(blog.postText, 150),
                      }}
                    ></Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      component={Link}
                      to={`/Blog/${blog._id}`}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
