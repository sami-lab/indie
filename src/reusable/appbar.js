import React, { useState } from 'react';

import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Menu,
  MenuItem,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Link,
} from '@material-ui/core/';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import Container from './container';
const useStyles = makeStyles((theme) => ({
  tab: {
    fontFamily: 'Raleway',
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '1rem',
    minWidth: 10,
    color: 'white',
    marginLeft: '20px',
    '&:hover': {
      textDecoration: 'none',
      opacity: 1,
    },
  },
  toolbarMargin: {
    //classname
    ...theme.mixins.toolbar,
    marginBottom: '1.5em', //jss
    [theme.breakpoints.down('md')]: {
      marginBottom: '1em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1em',
    },
  }, //This Provides height of Appbar,//By Using this we can push content after appbar
  drawer: {
    backgroundColor: theme.palette.primary.main,
    width: '30%',
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
}));

const routes = [
  { name: 'MENU ONE', link: '/', activeIndex: 0 },
  {
    name: ' MENU TWO',
    link: '/',
    activeIndex: 1,
  },
  { name: 'DISCORD', link: '/', activeIndex: 2 },
];
export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
    </Menu>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List onClick={() => setOpenDrawer(false)}>
          {routes.map((route) => (
            <ListItem
              key={route.name}
              divider
              button
              component={Link}
              href={route.link}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );
  return (
    <>
      <AppBar position="static">
        <Container style={{ padding: matchesSM ? '0 12px' : 0 }}>
          <Toolbar disableGutters={true}>
            <Grid
              container
              style={{ height: matchesSM ? '81px' : '108px' }}
              justify="space-between"
              alignItems="center"
            >
              {/* for mobile drawer */}
              {matchesSM && (
                <Grid item>
                  <Grid container>
                    <IconButton
                      aria-label="show more"
                      aria-haspopup="true"
                      onClick={() => setOpenDrawer(true)}
                      color="inherit"
                      style={{ padding: 0 }}
                    >
                      <FormatListBulletedIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                </Grid>
              )}
              {/* For logo */}
              <Grid item>
                <Grid container>
                  <img
                    src={'/dev/logo.png'}
                    style={{
                      width: matchesSM ? '72px' : '102px',
                      height: matchesSM ? '27px' : '44px',
                    }}
                    alt="logo"
                  />
                </Grid>
              </Grid>
              {/* for menus */}
              {!matchesSM && (
                <Grid item>
                  <Grid container>
                    {routes.map((item) => (
                      <Typography
                        key={item.activeIndex}
                        className={classes.tab}
                      >
                        {item.name}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              )}
              {/* For icons */}
              <Grid item>
                <Grid container>
                  <IconButton
                    color="inherit"
                    style={{ padding: matchesSM ? '0.1em' : '0.5em' }}
                  >
                    <SearchIcon fontSize={matchesSM ? 'small' : 'large'} />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    style={{ padding: matchesSM ? '0.1em' : '0.5em' }}
                  >
                    <NotificationsNoneIcon
                      fontSize={matchesSM ? 'small' : 'large'}
                    />
                  </IconButton>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                    style={{ padding: matchesSM ? '0.1em' : '0.5em' }}
                  >
                    <AccountCircle
                      style={{ fontSize: matchesSM ? '1.5rem' : '2.5rem' }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      {renderMenu}
      {drawer}
    </>
  );
}
