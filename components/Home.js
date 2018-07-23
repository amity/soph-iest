import Link from "next/link";

const Index = () => {
  return (
    <div>
      <p> Heyo </p>
      <Link href="/about">
        <a>About us!</a>
      </Link>

      <Link href="/pledge">
        <a>Sign the Pledge!</a>
      </Link>
    </div>
  );
};

export default Index;
