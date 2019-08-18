import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => (
  <div>
    <div>
      <FontAwesomeIcon icon={ faExclamationTriangle } />
    </div>
    <div>
      <h1>404: Not Found</h1>
    </div>
  </div>
);

export default NotFound;
