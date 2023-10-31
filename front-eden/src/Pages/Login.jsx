import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import "../styles/Login.css";
import iconoOso from "../Images/IconoOso.png";
import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
import ForestIcon from "@mui/icons-material/Forest";
// import { validarLogin, encontrado } from "../Functions/SqlFunctions";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useUser } from "../Components/Context.jsx";


function Login() {

  const { loginUser } = useUser();
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const navigate = useNavigate();
  const match = useMediaQuery("(min-height: 900px)");
  const [reUser, setReUser] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [reEmail, setReEmail] = useState("");


  // notification


  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  // Handler para el botón de registro se envia username password a http://localhost:3002/user/add-user
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({
      username: reUser,
      password: rePassword,
      email: reEmail
    }));
    try {
      const response = await fetch("http://localhost:3002/user/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cross-Origin-Opener-Policy": "same-origin",
        },
        body: JSON.stringify({
          username: reUser,
          password: rePassword,
          email: reEmail
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // El registro fue exitoso
        toast.success('Registro exitoso ', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000
      });

        closeRegisterModal();
      } else {
        // Hubo un error en el registro
        alert("Hubo un error en el registro");
        console.log("Hubo un error en el registro");
      }
    } catch (error) {
      console.log("Error en la solucitud:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({
      username: username,
      password: password
    }));
    try {
      const response = await fetch("http://localhost:3002/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cross-Origin-Opener-Policy": "same-origin",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data);
      loginUser(data);
      console.log("Datos del usuario logueado",loginUser);
      if (response.ok) {
        toast.success('Inicio existoso ', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000
      });
        navigate("/");
      } else {
        // Hubo un error en el registro
        toast.error('Usuario o contraseña incorrectos ', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 4500
      });

      }
    } catch (error) {
      console.log("Error en la solucitud:", error);
    }
  };
  
  return (
    <div className="Contenedor-login">
      <ToastContainer />
      <Box
        sx={{
          backgroundColor: "rgba(226, 226, 226, 0.65)",
          boxShadow: "0 0 1rem 0 rgba(0,0,0, 0.2)",
          borderRadius: "10px",
          backdropFilter: "blur( 5px )",
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "35%",
            xl: "35%",
          },
          padding: "2rem",
          flexDirection: "column",
          alignContent: "right",
          // borderRadius: "30px",
          height: "95%",
          maring: "5px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack
            spacing={match ? 8.3 : 5}
            justifyContent="center"
            direction={"column"}
            alignItems={"center"}
          >
            <img className="Icono-main" 
            alt="Icono de oso"
            src={iconoOso} height="100" />
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Box sx={match ? { padding: 1 } : ""}>
                <ForestIcon fontSize="large" />
              </Box>
              <Typography
                variant="h1"
                sx={
                  match
                    ? { fontWeight: 3, fontSize: "3rem" }
                    : { fontWeight: 3 }
                }
              >
                Login
              </Typography>
            </Box>
            <Box sx={{ width: "80%", display: "flex" }}>
              <TextField
                fullWidth
                id="userName"
                label="Usuario"
                variant="filled"
                name="userName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ background: "#fff" }}
              />
            </Box>
            <Box sx={{ width: "80%" }}>
              <TextField
                fullWidth
                id="password"
                label="Password"
                variant="filled"
                name="password"
                type="password"
                value={[password]}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ background: "#fff" }}
              />
            </Box>
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#F25019",
                  width: "100%",
                  height: "50px",
                }}
                type="submit"
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#F25019",
                  width: "100%",
                  height: "50px",
                  marginTop: "10px",
                }}
                onClick={openRegisterModal}
              >
                Register
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
      {/* Modal de Registro */}

      <Dialog open={showRegisterModal} onClose={closeRegisterModal}>
  <DialogTitle
    sx={{
      backgroundColor: "#F25019",
      color: "#fff",
      textAlign: "center",
    }}
  
  >Registro</DialogTitle>
  <DialogContent>
    <form onSubmit={handleRegister}>
      <Stack
        spacing={match ? 8.3 : 5}
        justifyContent="center"
        direction={"column"}
        alignItems={"center"}
      >
        {/* icono */}
        <img 
        className='Icono-register' 
        alt='Icono de oso'
        src={iconoOso} 
        height='100'
        />
        {/* username */}
        <Box sx={{ width: "80%", display: "flex" }}>
          <TextField
            fullWidth
            id="userName"
            label="Usuario"
            variant="filled"
            name="userName"
            value={reUser}
            onChange={(e) => setReUser(e.target.value)}
            sx={{ background: "#fff" }}
          />
        </Box>

        {/* Email */}
        <Box sx={{ width: "80%" }}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="filled"
            name="email"
            sx={{ background: "#fff" }}
            value={reEmail}
            onChange={(e) => setReEmail(e.target.value)}
          />
        </Box>




        {/* password */}
        <Box sx={{ width: "80%" }}>
          <TextField
            fullWidth
            id="password"
            label="Password"
            variant="filled"
            name="password"
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            sx={{ background: "#fff" }}
          />

          {/* confirm password */}
          <TextField
            fullWidth
            id="confirmPassword"
            label="Confirmar Password"
            variant="filled"
            name="confirmPassword"
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
            type="password"
            sx={{ background: "#fff" }}
          />
        </Box>

        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F25019",
              width: "100%",
              height: "50px",
            }}
            type="submit"
          >
            Registrar
          </Button>
        </Box>
      </Stack>
    </form>
  </DialogContent>
  <DialogActions>
    <Button onClick={closeRegisterModal}>Cancelar</Button>
  </DialogActions>
</Dialog>
    </div>
  );
}

export default Login;
