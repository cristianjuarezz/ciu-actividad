// components/Navbar.tsx
import Link from "next/link";
import { useState } from "react";
const Navbar = ({switcher}: any, {theme}: any) => {
  const [toggle, setToggle] = useState(false)

  const switchTheme = () => {
    switcher()
    setToggle(!toggle)
  }

  return (
    <nav className="flex flex-col md:flex-row w-full gap-4 justify-between z-10 pl-4 md:pl-36 pr-8 md:pr-28 py-10 fixed">
      <div className="flex gap-4">
        <Link href='/' className="logo text-xl w-fit">EXCELSIOR CAFFÉ</Link>
        <span onClick={switchTheme} className='cursor-pointer text-xl'>{toggle?'◑':'◐'}</span>
      </div>
      <div className="flex gap-4">
        <Link className="w-fit" href='/about'>OUR STORY</Link>
        <Link className="w-fit" href='/find-us'>FIND US</Link>
      </div>
    </nav>
  );
};
export default Navbar;

