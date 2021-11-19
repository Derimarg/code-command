import React from "react";
import TemplateSection from "../../components/TemplateSection/TemplateSection";
import { templateObjTerms } from "../../containers/template/TemplateData";

export default function Terms(lightBg) {
  return (
    <>
      <TemplateSection {...templateObjTerms}/>
    </>
  );
}