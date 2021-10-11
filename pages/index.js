import React from 'react';
import {
  Grid,
  useMediaQuery,
  Breadcrumbs,
  Link,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CardMedia,
  Button,
  TextField,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Header from '../src/reusable/appbar';
import Container from '../src/reusable/container';

const useStyles = makeStyles((theme) => ({
  light: {
    color: '#fff',
  },
  drawerItem: {
    color: '#fff',
  },
}));
export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction="column">
      {/* For Header */}
      <Grid item xs={12}>
        <Header />
      </Grid>
      {/* for breadcrumb */}
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: theme.palette.primary.main,
          backgroundImage: matchesSM
            ? 'linear-gradient(180deg, rgba(0,0,0,1) 74%, rgba(239,133,78,1) 100%, rgba(0,212,255,1) 100%)'
            : undefined,
          borderBottom: '1px solid orange',
        }}
      >
        <Container>
          {/* Hidden Breadcrump */}
          <Breadcrumbs
            separator={
              <NavigateNextIcon
                fontSize="small"
                style={{ color: '#fff', opacity: 0.6 }}
              />
            }
            aria-label="breadcrumb"
            style={{
              padding: matchesSM ? '1em 12px' : 0,
              visibility: matchesSM ? 'visible' : 'hidden',
            }}
          >
            <Link style={{ color: '#fff', opacity: 0.6 }} href="/">
              Home
            </Link>
            <Typography style={{ color: '#fff', opacity: 0.6 }}>
              Settings
            </Typography>
          </Breadcrumbs>
        </Container>
      </Grid>
      {/* for page */}
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: theme.palette.primary.main,
          minHeight: '82vh',
        }}
      >
        <Container>
          <Grid container>
            {/* sidebar */}
            {!matchesSM && (
              <Grid item sm={2}>
                <Grid container direction="column">
                  <Grid item style={{ marginTop: '3em' }}>
                    <Typography variant="h5" className={classes.light}>
                      SETTINGS
                    </Typography>
                  </Grid>
                  <Grid item>
                    <List>
                      <ListItem
                        button
                        disableGutters
                        //component={Link}
                        //href={route.link}
                      >
                        <ListItemIcon>
                          {' '}
                          <PersonIcon className={classes.light} />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.drawerItem}
                          disableTypography
                        >
                          Personal Information
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        button
                        disableGutters
                        //component={Link}
                        //href={route.link}
                      >
                        <ListItemIcon>
                          {' '}
                          <LockIcon className={classes.light} />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.drawerItem}
                          disableTypography
                        >
                          Password & Security
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {/* main content */}
            <Grid
              item
              style={{
                backgroundColor: '#fff',
                minHeight: '82vh',
                padding: matchesSM ? '2em' : '3em',
              }}
              md={7}
              xs={12}
            >
              {/* For Save button */}
              <Grid container justify={matchesSM ? 'center' : 'space-between'}>
                <Grid item>
                  <Typography variant="h6">PERSONAL INFORMATION</Typography>
                </Grid>
                {!matchesSM && (
                  <Grid item>
                    <Button
                      style={{
                        backgroundColor: theme.palette.primary.orange,
                        borderRadius: 50,
                      }}
                      className={classes.light}
                    >
                      Save
                    </Button>
                  </Grid>
                )}
              </Grid>
              {/* For user details */}
              <Grid
                container
                direction={matchesSM ? 'column' : 'row'}
                justify={matchesSM ? 'center' : 'space-between'}
                alignItems="center"
                style={{ marginTop: '2em' }}
                spacing={3}
              >
                <Grid item>
                  <Grid container direction="column" alignItems="center">
                    <Grid
                      item
                      style={{
                        width: matchesSM ? '105px' : '164px',
                        height: matchesSM ? '105px' : '164px',
                      }}
                    >
                      <CardMedia
                        image="https://images.unsplash.com/photo-1633883580795-ca9936efa84e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                        }}
                      />
                    </Grid>
                    <Button variant="text">Edit Image</Button>
                  </Grid>
                </Grid>
                <Grid item style={{ flex: 1, width: '100%' }}>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item style={{ width: '100%' }}>
                      <label>First name * </label>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Jane"
                      />
                    </Grid>
                    <Grid item style={{ width: '100%' }}>
                      <label> Last name *</label>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Snow"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* cards */}
            {!matchesSM && (
              <Grid item sm={3}>
                <Grid container direction="column" alignItems="flex-end">
                  <Grid item xs={10}>
                    <img
                      src={
                        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80'
                      }
                      style={{ height: '255px', width: '274px' }}
                    />
                  </Grid>
                  <Grid item xs={10} style={{ marginTop: '1em' }}>
                    <img
                      src={
                        'https://images.unsplash.com/photo-1568111561564-08726a1563e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&q=80'
                      }
                      style={{ height: '255px', width: '274px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
