import Link from "next/link";

const Index = () => {
  return (
    <div>
      <p> Heyo </p>
      <Link href="/about">
        <a>About us!</a>
      </Link>
    </div>
  );
};

export default Index;
