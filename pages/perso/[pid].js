import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardPerso from "../../component/CardPerso/CardPerso";

export default function MarvelPerso() {
  const router = useRouter();
  const { pid } = router.query;
  const [perso, setPerso] = useState(null);

  console.log("id", pid);

  const myheader = new Headers({
    "Content-Type": "application/json",
  });

  const init = {
    method: "GET",
    headers: myheader,
    mode: "cors",
  };

  const handleCallPersonnage = () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/${pid}?apikey=${process.env.MARVEL_API_KEY}`;
    fetch(url, init)
      .then((res) => res.json())
      .then((json) => {
        console.log("data", json.data.results[0]);
        setPerso(json.data.results[0]);
      })
      .catch((err) => console.error(`error json ${err}`))
      .catch((err) => console.error(`error API ${err}`));
  };

  useEffect(() => {
    handleCallPersonnage();
  }, []);

  return <div>{perso ? <CardPerso perso={perso} /> : <></>}</div>;
}
