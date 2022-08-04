import Head from "next/head";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useState } from "react";
import TablePerso from "../component/TablePerso/TablePerso";

export default function PeronnagePage() {
  const [searchName, setSearchName] = useState("");
  const [persos, setPersos] = useState([]);

  const myheader = new Headers({
    "Content-Type": "application/json",
  });

  const init = {
    method: "GET",
    headers: myheader,
    mode: "cors",
  };

  const handleCallPersonnage = () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchName}&apikey=${process.env.MARVEL_API_KEY}`;
    fetch(url, init)
      .then((res) => res.json())
      .then((json) => {
        // console.log("data", json.data.results);
        setPersos(json.data.results);
      })
      .catch((err) => console.error(`error json ${err}`))
      .catch((err) => console.error(`error API ${err}`));
  };

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
        <Button
          variant="contained"
          color="primary"
          onClick={handleCallPersonnage}
        >
          Search
        </Button>
        <Checkbox />
        <TablePerso persos={persos} />
      </main>
    </div>
  );
}
