import { Title } from "@mantine/core";
import React from "react";

const Heading = () => {
  return (
    <div>
      {/* Title contains c prop to takes theme style */}
      {/* fz = font size and lh = line height */}
      <Title c="bright-pink.0" fz="lg" lh="xl">
        Hello Heading 1
      </Title>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et odio numquam
      veniam quibusdam, eveniet laudantium, earum aut magnam ducimus accusamus,
      obcaecati quae perferendis suscipit consectetur illum. Tempora et nostrum
      fugit.
    </div>
  );
};

export default Heading;
