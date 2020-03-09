import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Cast from '@material-ui/icons/Cast';

export default function PodcastList(props) {
    // expects an array of podcast objects as props/state? not sure yet. For now hard code it.
    // with new hooks paradigm.
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
            setOpen(!open);
    };
    return (
        <div id="podcast-list-container">
            <List
                id="podcast-list"
            >
                <ListItem
                    id='podcast1'
                    onClick={handleClick}
                >
                    <ListItemIcon >
                        <Cast />
                    </ListItemIcon>
                    <ListItemText primary="Podcast 1" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button >
                        <ListItemText primary="Episode 1" />
                      </ListItem>
                      <ListItem button >
                        <ListItemText primary="Episode 2" />
                      </ListItem>
                      <ListItem button >
                        <ListItemText primary="Episode 3" />
                      </ListItem>
                    </List>
                </Collapse>
                <ListItem
                    id='podcast2'
                    onClick={handleClick}
                >
                    <ListItemIcon >
                        <Cast />
                    </ListItemIcon>
                    <ListItemText primary="Podcast 2" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button >
                        <ListItemText primary="Episode 1" />
                      </ListItem>
                      <ListItem button >
                        <ListItemText primary="Episode 2" />
                      </ListItem>
                      <ListItem button >
                        <ListItemText primary="Episode 3" />
                      </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    );
}
