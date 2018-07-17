import Link from "next/link";

const LinkStyle = {
  marginLeft: 15
};

const Header = () => (
  <div>
    <Link href="/" style={LinkStyle}>
      <a style={LinkStyle}>Home</a>
    </Link>

    <Link href="/about">
      <a style={LinkStyle}> About Us </a>
    </Link>
  </div>
);

export default Header;
