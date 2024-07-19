import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes/Routes";
import CssBaseline from '@mui/material/CssBaseline';

const defaultTheme = createTheme({
});

const App = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App