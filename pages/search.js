import Head from "next/head";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useState } from "react";
import TablePerso from "../component/TablePerso/TablePerso";

export default function PeronnagePage() {
  const [searchName, setSearchName] = useState("");

  const handleCallPersonnage = (name) => {
    const url =  `https://gateway.marvel.com:443/v1/public/characters?name=spider&apikey=d055642c165e3688bb0c80db9b7d5259`
  }

  const handleChangeName = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Search Personnage</title>
        <meta
          name="Search Marvel Personnage"
          content="Buku book reading list"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Search Marvel Personnage</h1>
        <TextField
          required
          id="outlined-required"
          label="Required"
          value={searchName}
          onChange={handleChangeName}
        />
        <Button variant="contained" color="primary" href="/search">
          Search
        </Button>
        <Checkbox />
        <TablePerso />
      </main>
    </div>
  );
}
