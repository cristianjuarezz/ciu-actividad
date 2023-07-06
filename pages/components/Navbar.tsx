// components/Navbar.tsx
import Link from "next/link";
const Navbar = ({switcher}: any, theme: any) => {

  

  return (
    <nav className="flex flex-col md:flex-row w-full gap-4 justify-between z-10 pl-4 md:pl-36 pr-8 md:pr-28 py-12 fixed">
      <div className="flex gap-4">
        <Link href='/' className="logo text-xl w-fit">EXCELSIOR CAFFÉ</Link>
        <span onClick={switcher} className='cursor-pointer'>{theme?'◑':'◐'}</span>
      </div>
      <div className="flex gap-4">
        <Link className="w-fit" href='/about'>OUR STORY</Link>
        <Link className="w-fit" href='/contact'>FIND US</Link>
      </div>
    </nav>
  );
};
export default Navbar;

