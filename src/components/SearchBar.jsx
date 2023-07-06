import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid gray",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 2 },
        background: "#000",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        style={{
          background: "#000",
          color: "#fff",
          "::placeholder": { color: "#fff" },
          fontFamily: "Roboto",
          fontSize: "14px",
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "gray" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
