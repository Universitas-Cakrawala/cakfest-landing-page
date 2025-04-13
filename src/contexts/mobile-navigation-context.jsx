import React, { createContext, useContext, useState } from "react";

// Create the context
const MobileMenuContext = createContext();

// Create a provider component
export const MobileMenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Open sidebar function
  const openSidebar = () => {
    setIsOpen(true);
  };

  // Close sidebar function
  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Value to be provided to consumers
  const value = {
    isOpen,
    toggleSidebar,
    openSidebar,
    closeSidebar,
  };

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
};

// Custom hook for using the context
export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (context === undefined) {
    throw new Error("useMobileMenu must be used within a MobileMenuProvider");
  }
  return context;
};
