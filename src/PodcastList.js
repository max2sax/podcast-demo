import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Cast from '@material-ui/icons/Cast';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  CollapsedListStyle: {
    paddingLeft: 4,
  },
  PodcastContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  ListItemStyle: {
    display: 'flex',
    flexDirection: 'row',
  }
});
export default function PodcastList(props) {
    // expects an array of podcast objects as props
    const classes = useStyles();
    const [open, setOpen] = React.useState(() => {
      let initialState = {};
      props.podcasts.forEach((podcast) => {
        initialState[podcast.ID] = false;
      });
      return initialState;
    });

    const handleClick = (e) => {
      setOpen((prevState) => {
        let newState = {};
        newState[e.currentTarget.id] = !prevState[e.currentTarget.id];
        const updatedState = {...prevState, ...newState};
        return updatedState;
      });
        if (props.updateSelectedPodcast) {
            props.updateSelectedPodcast(e.currentTarget.id);
        }
    };

    const handleEpisodeItemClick = (e) => {
      if (props.updateSelectedEpisode) {
        props.updateSelectedEpisode(e.currentTarget.id);
      }
    }

    const listItems = props.podcasts.map((podcast) => {
      let episodes = Object.values(props.episodes).filter((ep) => {
        return ep.PodcastID === podcast.ID;
      });
      episodes = episodes.map((episode) => {
        return (
        <ListItem button
          id={episode.ID}
          key={episode.ID}
          onClick={handleEpisodeItemClick}
          className={classes.CollapsedListStyle}
        >
          <ListItemText primary={episode.Name} />
        </ListItem>
        )
      });
      return (
        <div
          className={classes.PodcastContainerStyle}
          key={podcast.ID}
        >
        <ListItem button
          key={podcast.ID}
          id={podcast.ID}
          onClick={handleClick}
        >
          <div className={classes.ListItemStyle} >
            <ListItemIcon >
                <Cast />
            </ListItemIcon>
            <ListItemText primary={podcast.Name} />
            {open[podcast.ID] ? <ExpandLess /> : <ExpandMore />}
          </div>
         </ListItem>
         <Collapse in={open[podcast.ID]} timeout="auto" unmountOnExit >
           <List component="div" disablePadding>
             {episodes}
           </List>
         </Collapse>
         </div>
      )
    });

    return (
        <div id="podcast-list-container">
            <List
                id="podcast-list"
            >
              {listItems}
            </List>
        </div>
    );
}
