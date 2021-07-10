import React from 'react';

const Button = ({ children }) => (
  <button className="bg-gray-background-component hover:bg-gray-background-hover active:bg-gray-background-active border border-gray-border-interactive hover:border-gray-border-hover p-2 rounded-md focus:outline-none focus:ring focus:border-gray-border-interactive focus:ring-gray-border-interactive">
    {children}
  </button>
);

export default Button;
