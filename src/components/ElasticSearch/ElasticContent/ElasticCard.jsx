import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useContext } from "react";
import { ElasticSearchContext } from "../../../contexts/ElasticSearchContext.js";

export function ElasticCard({ data }) {
  const { fontSize } = useContext(ElasticSearchContext);
  return (
    <Card sx={{ m: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {data.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: fontSize + "px" }}
        >
          {data.abstract}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button variant="text" color="primary">
          Read More
        </Button>
      </Box>
    </Card>
  );
}
