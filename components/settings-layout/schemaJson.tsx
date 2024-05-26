import React from "react";
import { Chip } from "@nextui-org/react";

export default function SchemaApp() {
  return (
    <div className="flex gap-4">
      <Chip color="warning" variant="flat">Flat</Chip>
      <Chip
        variant="faded"
        color="success"
      >
        Chip
      </Chip>
      <Chip
        variant="flat"
        color="secondary"
      >
        Chip
      </Chip>
      <Chip color="warning" variant="flat">Flat</Chip>
      <Chip
        variant="faded"
        color="success"
      >
        Chip
      </Chip>
      <Chip
        variant="flat"
        color="secondary"
      >
        Chip
      </Chip>
    </div> 
    
  );
}
