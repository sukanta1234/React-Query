import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../../API/Functions/login.api";
import { toast } from "react-toastify";





const defaultTheme = createTheme();

export default function Login() {
    const {isPending,mutate}=useMutation({
        mutationFn:loginApi,
        onSuccess:(data)=>{
            if (data.status===200) {
                toast.success(data.message)
                localStorage.setItem("token",data.token)
                localStorage.setItem("id",data.user._id)
                
            }
            if (data.status===201) {
                toast.error("login error")
                
            }
        }

    })

    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
      const onSubmit = (data) =>{
       
        const value={
            "email":data.email,
            "password":data.password
        }
        mutate(value)

      }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1661412968858-94c2675c3370?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundRepeat: "no-repeat",

            backgroundSize: "cover",
            backgroundPosition: "center",
            height:"600px",width:"500px",
            
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <TextField
              {...register("email",{required:true})}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={errors.email}
                helperText={errors.email && "email is required"}
              />
              <TextField
              {...register("password",{required:true})}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={errors.password}
                helperText={errors.password && "password is required"}
              />
             {isPending?(<>
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Loading....
              </Button>
             </>):(<>
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
             </>)}
              <Grid container>
                <Grid item xs>
                  <Typography component={Link} to={"/updata"} variant="body2" sx={{color:"black"}}>
                    Forgot password?
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component={Link} to="/registration" variant="body2" sx={{color:"black"}}>
                    {"Don't have an account? Sign Up"}
                  </Typography>
                </Grid>
              </Grid>
             
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
