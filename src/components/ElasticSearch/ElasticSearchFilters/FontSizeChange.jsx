import { Slider, Typography } from "@mui/material";
import { useContext } from "react";
import { ElasticSearchContext } from "../../../contexts/ElasticSearchContext.js";

export function FontSizeChanger() {
  const { fontSize, setFontSize } = useContext(ElasticSearchContext);

  const handleFontSizeChange = (event, newValue) => {
    setFontSize(newValue);
  };

  return (
    <div         className={"w-full sm:w-1/2 md:w-[300px]"}
    >
      <Typography id="font-size-slider" gutterBottom>
        Font Size
      </Typography>
      <Slider
        value={fontSize}
        onChange={handleFontSizeChange}
        aria-labelledby="font-size-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={14}
        max={30}
      />
    </div>
  );
}
