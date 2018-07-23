import Link from "next/link";

const Navbar = () => (
  <div className="navbar">
    <Link href="/">
      <a>Home</a>
    </Link>

    <Link href="/about">
      <a> About Us </a>
    </Link>

    <Link href="/info">
      <a> Info </a>
    </Link>
  </div>
);

export default Navbar;
