import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"

export default function ActionAreaCard({
  title,
  description,
  image,
  alt,
  link,
}) {
  return (
    <Card className="card" sx={{ maxWidth: 300 }}>
      <a href={link}>
        <CardActionArea>
          <CardMedia component="img" height="350" image={image} alt={alt} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  )
}
