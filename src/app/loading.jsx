import { Spinner } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner
        label="Loading..."
        color="primary"
        labelColor="primary"
        size="lg"
      />
    </div>
  );
};

export default Loading;
