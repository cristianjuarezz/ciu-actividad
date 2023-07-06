import React, { PropsWithChildren, useEffect, useState } from "react";
import Navbar from "./Navbar";
const Layout = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    setTheme(stored ? JSON.parse(stored) : theme)
  }, [])

  const switchTheme = () => {
    setTheme(!theme)
    localStorage.setItem('theme', JSON.stringify(!theme))
  }

  return (
    <div className={theme?'dark':''}>
      <Navbar switcher={switchTheme}/>
      {children}
    </div>
  );
};
export default Layout;

