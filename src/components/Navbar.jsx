import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Stack>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ paddingLeft: "20px" }}
          src={logo}
          alt="logo"
          height={45}
        />
        <figcaption
          style={{
            fontFamily: "Roboto",
            fontSize: "28px",
            color: "#fff",
            letterSpacing: "-2px",
          }}
        >
          YouTube
        </figcaption>
      </Link>
    </Stack>
    <Stack sx={{ margin: "auto", paddingRight: "100px" }}>
      <SearchBar />
    </Stack>
  </Stack>
);
export default Navbar;
