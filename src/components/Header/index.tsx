import { Link } from "react-router-dom";
import majorLogo from "../../assets/img/logo-major.png";
import "./styles.css";
import { Button, Icon, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'Nova Transação', 'Ajuda', 'Sair'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  return (
    <Box
      className="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <Box display="flex" alignItems="center">
        <Button sx={{ padding: 0, margin: 0 }} onClick={toggleDrawer(true)}>
          <Icon className="fa-solid fa-bars" sx={{ width: 24 }} />
        </Button>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
            <img width={100} src={majorLogo} alt="Major Logo" />
          </Box>
        </Link>
      </Box>
      <Box>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <h1 style={{ color: "white" }}>MajorHelp's</h1>
        </Link>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          sx={{
            display: "flex",
            alignItems: "baseline",
            padding: 0,
            margin: 0,
            color: "white",
          }}
        >
          <Icon
            className="fa-solid fa-user"
            sx={{ width: 24, marginRight: 1 }}
          />
          Olá, User
        </Button>
      </Box>
      <Drawer open={open} onClick={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default Header;
