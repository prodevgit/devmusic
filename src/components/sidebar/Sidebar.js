import React from 'react';
import './Sidebar.css';
// Material Imports
import { fade,makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import HomeIcon from '@material-ui/icons/Home';
import RadioIcon from '@material-ui/icons/Radio';
import SearchIcon from '@material-ui/icons/Search';

import InputBase from '@material-ui/core/InputBase';
import logo from './logo.svg'
import Recent from '.././recent/Recent';
import Genrea from '.././genrea/Genrea';
import Genreb from '.././genreb/Genreb';
//Material Imports

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    background:'black',
    height:"auto",
    marginLeft: drawerWidth,
  },
  drawer: {
    color: 'black',
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    color:'white',
    background: "black",
    width: drawerWidth,
  },
  xicon:{
    color:'white'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#282c34',
    padding: theme.spacing(3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    color:'white',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Home', 'Browse', 'Radio'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon className={classes.xicon}>{
              index===0 ?  <HomeIcon /> : (index===1 ? <OpenInBrowserIcon/> : <RadioIcon />)
              }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <h6>Your Library</h6>
        <Divider />
        <List>
          {/* User Library */}
        </List>
        <h6>Playlists</h6>
        <Divider />
        <List>
          {/* User Playlists */}
        </List>
      </Drawer>
      <main className={classes.content}><Recent></Recent><Genrea></Genrea><Genreb></Genreb>
        
        
      </main>
    </div>
  );
}

// export default Sidebar;
