// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row w-full justify-between z-10 pl-4 md:pl-36 pr-8 md:pr-28 py-12 fixed">
      <Link href='/' className="logo text-xl w-fit">EXCELSIOR CAFFÉ</Link>
      <div className="flex gap-4">
        <Link className="w-fit" href='/about'>OUR STORY</Link>
        <Link className="w-fit" href='/contact'>FIND US</Link>
      </div>
    </nav>
  );
};
export default Navbar;

