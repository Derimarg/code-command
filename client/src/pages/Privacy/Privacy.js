import React from "react";
import TemplateSection from "../../components/TemplateSection/TemplateSection";
import {PrivacyObj} from "../../containers/template/TemplateData";


export default function PrivacyPage(lightBg) {
    return(
        <>
            <TemplateSection {...PrivacyObj}/>
        </>
    );
}