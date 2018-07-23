import Link from "next/link";

const Header = () => (
  <div className="navbar">
    <Link href="/">
      <a>Home</a>
    </Link>

    <Link href="/about">
      <a> About Us </a>
    </Link>

    <Link href="/pledge">
      <a> The Pledge </a>
    </Link>

    <Link href="/template">
      <a> For Your Organization </a>
    </Link>
  </div>
);

export default Header;
