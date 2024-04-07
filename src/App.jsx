import React from "react";
import ButtonComp from "./components/Button";
import Heading from "./components/Heading";
import { useMantineColorScheme } from "@mantine/core";
import BoxComp from "./components/Box";

const App = () => {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  return (
    <div>
      {/* <ButtonComp /> */}
      {/* <Heading /> */}
      <BoxComp/>
    </div>
  );
};

export default App;
