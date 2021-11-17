import React from "react";
import { InfoSection } from "../../components";
import TemplateSection from "../../components/TemplateSection/TemplateSection";
import { CookieObj } from "../../containers/template/TemplateData";

import { PrivacyObj } from "../../containers/home/Data";

export default function Cookies(lightBg) {
    return (
        <TemplateSection {...CookieObj}/>
        // <InfoSection {...PrivacyObj}/>
    )
}