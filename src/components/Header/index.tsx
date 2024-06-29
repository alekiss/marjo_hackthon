import { Link, useNavigate } from "react-router-dom";
import majorLogo from "../../assets/img/logo-major.png";
import "./styles.css";
import {
  Button,
  Icon,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaPiggyBank,
  FaWindowClose,
} from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const toggleModal = (newOpen: boolean) => () => {
    setOpenModal(newOpen);
  };

  const handleConfirm = () => {
    setOpenModal(false);
    navigate("/login");
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
          <FaHome style={{ margin: "0 10", fontSize: 24 }} />
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/nova-doacao">
          <FaPiggyBank style={{ margin: "0 10", fontSize: 24 }} />
            <ListItemText primary="Nova Doação" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton disabled>
          <FaInfoCircle style={{ margin: "0 10", fontSize: 24 }} />
            <ListItemText primary="Ajuda" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={toggleModal(true)}>
            <FaWindowClose style={{ margin: "0 10", fontSize: 24 }} />
            <ListItemText primary="Sair" />
          </ListItemButton>
        </ListItem>
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
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
            <img width={100} src={majorLogo} alt="Major Logo" />
          </Box>
        </Link>
      </Box>
      <Box>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ color: "white" }}>MarjoHelp's</h1>
        </Link>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="baseline"
        color={"white"}
      >
        <h3>Olá, User</h3>
      </Box>
      <Drawer open={open} onClick={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <Modal
        open={openModal}
        onClose={toggleModal(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Confirmar saída
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Tem certeza de que deseja sair?
          </Typography>
          <Box mt={4} display="flex" justifyContent="flex-end">
            <Button onClick={toggleModal(false)} sx={{ mr: 2 }}>
              Cancelar
            </Button>
            <Button variant="contained" color="primary" onClick={handleConfirm}>
              Confirmar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Header;
