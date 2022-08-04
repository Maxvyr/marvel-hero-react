import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import CardPerso from "../CardPerso/CardPerso";

export default function GridPerso({ persos }) {
  return (
    <ImageList sx={{ width: 800, height: 550 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>

      {persos.map((perso) => (
        <ImageListItem key={perso.id}>
          <CardPerso perso={perso} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
