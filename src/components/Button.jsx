import React from "react";
import { Button } from "@mantine/core";

const ButtonComp = () => {
  return (
    <div>
      {/* If No color are given then it takes primary color */}
      <Button size="sm" color="bright-pink.0"> Button with custom default gradient</Button>
    </div>
  );
};

export default ButtonComp;
