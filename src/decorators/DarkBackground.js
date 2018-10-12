import React, { Component } from 'react'

const styles = {
  backgroundColor: '#000',
  width: '100vw',
  height: '100vh',
  position: 'relative',
  paddingTop: '25%',
  textAlign: 'center'
};
const DarkBackground = ({ children }) => (
  <div style={styles}>
    { children }
  </div>
);

export default DarkBackground
