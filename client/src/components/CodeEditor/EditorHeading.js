import React from "react";
import { EditorHeading } from "./Editor.Elements";

export default function Heading(prop) {
  const { name } = prop;
  return (
    <center>
      <EditorHeading>{name}</EditorHeading>
    </center>
  );
}
