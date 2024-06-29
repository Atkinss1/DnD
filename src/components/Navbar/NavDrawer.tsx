import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useCategories } from '../../hooks/useCategories';
import { BASEURL } from '../../constants';

export default function NavDrawer() {
  const [open, setOpen] = useState(false);

  const topics = useCategories();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, background: '#930C10', color: 'white' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {Object.entries(topics).map(([text, api]) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary={text}
                onClick={() => console.log(`${BASEURL}${api}`)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button sx={{ color: 'white', width: '200px', height: '50px', backgroundColor: '#930C10' }} onClick={toggleDrawer(true)}>Categories</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}