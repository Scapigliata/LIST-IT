import React from "react";

const footerStyle = {
  backgroundColor: 'white',
  textAlign: 'center',
  position: 'fixed',
  padding: '5px',
  left: '0',
  bottom: '0',
  width: '100%'
};

const Footer = props => {
  return <div style={footerStyle}>&copy; Scapigliata 2019</div>;
};

export default Footer;
