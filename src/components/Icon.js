import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
import React from "react";

library.add(fas, fab);

const Icon = (props) => {
    return <FontAwesomeIcon {...props} fixedWidth={true} />;
};

export default Icon;
