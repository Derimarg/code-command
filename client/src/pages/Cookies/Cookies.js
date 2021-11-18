import React from "react";
import TemplateSection from "../../components/TemplateSection/TemplateSection";
import { templateObjCookies } from "../../containers/template/TemplateData";

export default function Privacy(lightBg) {
  return (
    <>
      <TemplateSection {...templateObjCookies} />
    </>
  );
}
