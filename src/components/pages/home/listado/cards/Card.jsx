import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ datos }) {
  return (
    <Card sx={{ width: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={datos.fotos[0].rutaFoto} // Aquí asumo que siempre habrá al menos una foto
          alt={datos.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h1 class="poetsen-one-regular">{datos.nombre}</h1>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h3 class="poetsen-one-regular2">{datos.descripcion}</h3>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
