import { StyledEngineProvider } from "@mui/styled-engine";

import Header from "./components/Header";
import classes from './app.module.scss'
import Movies from "./components/Movies";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className={classes.generalDiv}>
      <Header />
      <Movies />
      </div>
      
    </StyledEngineProvider>
  );
}

export default App;
