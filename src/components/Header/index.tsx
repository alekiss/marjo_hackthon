import { Link } from "react-router-dom";
import majorLogo from "../../assets/img/logo-major.png";
import "./styles.css";
import { Button, Icon, Box } from "@mui/material";

const Header = () => {
  return (
    <Box className="header" display="flex" justifyContent="space-between" alignItems="center" p={2}>
      <Box display="flex" alignItems="center">
        <Button sx={{ padding: 0, margin: 0 }}>
          <Icon className="fa-solid fa-bars" sx={{ width: 24 }} />
        </Button>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2 }}>
            <img width={100} src={majorLogo} alt="Major Logo" />
          </Box>
        </Link>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button sx={{ display: 'flex', alignItems: 'baseline', padding: 0, margin: 0 }}>
          <Icon className="fa-solid fa-user" sx={{ width: 24, marginRight: 1 }} />
          Olá, User
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
