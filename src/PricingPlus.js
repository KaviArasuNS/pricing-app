import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { width } from '@mui/system';



export function PricingPlus() {
const style={
    borderRadius: 20,
    maxWidth: 350,
  }
  return (
    <Card style={style}  className="container card">
      <h5 className="card-title text-muted text-uppercase text-center member">Plus</h5>
          <h6 class="card-price text-center"><span class="period">$9</span>/month</h6>
          <hr  style={{
              color: '#000000',
              backgroundColor: '#000000',
              height: .01,
              borderColor : '#000000'
              }}/>
      <CardContent>
            <List>
                <ListItem>
                  <ListItemIcon>
                    <DoneRoundedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={<b>5 Users</b>}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneRoundedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={<b>50GB Storage</b>}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneRoundedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={<b>Unlimited Public Projects</b>}
                  />
                </ListItem>
                 <ListItem>
                  <ListItemIcon>
                    <DoneRoundedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={<b>Comunity Access</b>}
                  />
                </ListItem>
                 <ListItem>
                  <ListItemIcon>
                    <DoneRoundedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={<b>Unlimited Public Access</b>}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneRoundedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={<b>Dedicated Phone Support</b>}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneRoundedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={<b>Free Subdomain</b>}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ClearRoundedIcon />
                  </ListItemIcon>
                  <ListItemText class="text-muted"
                    primary="Monthly Status Reports"
                  />
                </ListItem>
            </List>
      </CardContent>
      <CardActions>
            <Button sx={{ borderRadius: 20 }} className="btn" variant="contained">Button</Button>
        </CardActions>
    </Card>
  );
}