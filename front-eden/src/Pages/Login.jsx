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
import { useFormik } from "formik";
import ForestIcon from "@mui/icons-material/Forest";
import { validarLogin, encontrado } from "../Functions/SqlFunctions";

function Login() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const navigate = useNavigate();
  const match = useMediaQuery("(min-height: 900px)");
  const [reUser, setReUser] = useState("");
  const [rePassword, setRePassword] = useState("");

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
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // El registro fue exitoso
        alert("Registro exitoso");
        console.log("Registro exitoso");
      } else {
        // Hubo un error en el registro
        alert("Hubo un error en el registro");
        console.log("Hubo un error en el registro");
      }
    } catch (error) {
      console.log("Error en la solucitud:", error);
    }
  };



  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async (values) => {
      let loginData = JSON.stringify(values, null, 2);
      const user = JSON.parse(loginData).userName;
      const contra = JSON.parse(loginData).password;

      console.log(user);
      console.log(contra);

      await validarLogin(user, contra);

      if (encontrado) {
        navigate("/");
      }
    },
  });

  return (
    <div className="Contenedor-login">
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
          borderRadius: "30px",
          height: "95%",
          maring: "5px",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Stack
            spacing={match ? 8.3 : 5}
            justifyContent="center"
            direction={"column"}
            alignItems={"center"}
          >
            <img className="Icono-main" src={iconoOso} height="100" />
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
                value={formik.values.userName}
                onChange={formik.handleChange}
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
                value={formik.values.password}
                onChange={formik.handleChange}
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
  <DialogTitle>Registro</DialogTitle>
  <DialogContent>
    <form onSubmit={handleRegister}>
      <Stack
        spacing={match ? 8.3 : 5}
        justifyContent="center"
        direction={"column"}
        alignItems={"center"}
      >
        <img className='Icono-main' src={iconoOso} height='100' />
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
