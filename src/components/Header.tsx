import { AppBar, Toolbar, Typography, Box, Grid } from "@mui/material";

import classes from "./header.module.scss";
import Search from "./Search";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container className={classes.headerGrid}>
            <Grid item xs={3}>
              <Typography variant="h6">Movie Search</Typography>
            </Grid>
            <Search />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
