
import Routes from "./RoutesPage";
import { ThemeProvider, CssBaseline } from "@mui/material";
// import Footer from "./Components/Footer";
import theme from "./Theme";
import ContextProvider from "./Components/Context";
import { ToastContainer } from "react-toastify";

function App() {
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ContextProvider>
        <Routes/>
        <ToastContainer />
        </ContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;



// const theme = createTheme({
//   typography: {
//     fontFamily: 'Public Sans, sans-serif',
//     fontWeightRegular: 400,
//     fontWeightMedium: 600,
//     fontWeightBold: 700,
//   },
//   overrides: {
//     MuiCssBaseline: {
//       '@global': {
//         '@font-face': [],
//       },
//     },
//   },
// });