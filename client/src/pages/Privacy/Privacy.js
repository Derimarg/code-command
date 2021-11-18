import React from "react";
import TemplateSection from "../../components/TemplateSection/TemplateSection";
import { templateObjPrivacy } from "../../containers/template/TemplateData";

export default function Privacy(lightBg) {
  return (
    <>
      <TemplateSection {...templateObjPrivacy} />
    </>
  );
}
