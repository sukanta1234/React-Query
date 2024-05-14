import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { contactApi } from "../../../API/Functions/contact.api";
import { toast } from "react-toastify";
const defaultTheme = createTheme();
const Contact = () => {
  const { isPending, mutate } = useMutation({
    mutationFn: contactApi,
    onSuccess: (data) => {
      if (data.success == true) {
        toast.success("Thank you for your response");
      }
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
      phone: data.phone,
      email: data.email,
      message: data.message,
    };
    mutate(value);
  };
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Box>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29509.882322566027!2d88.41149431362422!3d22.401334472714105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026da29682c63b%3A0xc7999b6c50073410!2sMalancha%20Mahi%20Nagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1714413276155!5m2!1sen!2sin"
          width="100%"
          height="350px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      {/* <Box sx={{ margin: "20px" }}>
        <Grid container>
          <Grid item lg={4}>
            <h1>hello</h1>
          </Grid>
          <Grid item lg={4}>
            <h2>gello</h2>
          </Grid>
          <Grid item lg={4}>
            <h1>bollo</h1>
          </Grid>
        </Grid>
      </Box> */}
      <Box>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "800" }}>
                Contact Us
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("name", { required: true })}
                      autoComplete="name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="name"
                      autoFocus
                      error={errors.name}
                      helperText={errors.name && "name is required"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("phone", { required: true })}
                      required
                      fullWidth
                      id="phone"
                      label="phone"
                      name="phone"
                      autoComplete="phone"
                      error={errors.phone}
                      helperText={errors.phone && "phone is required"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("email", { required: true })}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      error={errors.email}
                      helperText={errors.email && "email is required"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("message", { required: true })}
                      required
                      fullWidth
                      name="message"
                      label="message"
                      type="message"
                      id="message"
                      autoComplete="message"
                      multiline
                      rows={5}
                      error={errors.message}
                      helperText={errors.message && "message is required"}
                    />
                  </Grid>
                </Grid>
                {isPending ? (
                  <>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Loading....
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Submit
                    </Button>
                  </>
                )}
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Box>
    </Container>
  );
};

export default Contact;
