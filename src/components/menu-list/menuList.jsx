

import List from '@mui/joy/List';
import {Link}  from "react-router-dom"
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Apps from '@mui/icons-material/Apps';
import ChatIcon from '@mui/icons-material/Chat';

function MenuList () {

    return (
        <>
    <List  sx={{ maxWidth: 320 }}>
            <Link style={{textDecoration:"none"}} to="/login">
                <ListItem>
                <ListItemButton sx={
                  {
                      fontSize: "18px",
                      fontWeight: 500
                  }
              }>
                <ListItemDecorator>
                  <Apps />
                </ListItemDecorator>
                        Меню
              </ListItemButton>
            </ListItem>
            </Link>
             <Link style={{textDecoration:"none"}} to="/chat">
                        <ListItem>
                        <ListItemButton sx={
                        {
                            fontSize: "18px",
                            fontWeight: 500
                        }
                    }>
                    <ListItemDecorator>
                        <ChatIcon />
                    </ListItemDecorator>
                            Чат
                    </ListItemButton>
                </ListItem>
                </Link>
                </List>
        </>
    )
}


export default MenuList