import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="home-header home-header-1"> soph-iest </h1>
      <Link href="/projects">
        <a>
          <h1 className="home-header home-header-2">developer</h1>
        </a>
      </Link>

      <a target="blank" href="https://journeys.dartmouth.edu/sophiest/">
        <h1 className="home-header home-header-3">data analyst</h1>
      </a>

      <Link href="/about">
        <a>
          <h1 className="home-header home-header-4">student</h1>
        </a>
      </Link>

      <Link href="/contact">
        <a>
          <h4 className="home-header home-header-5">hireable?</h4>
        </a>
      </Link>
    </div>
  );
};

export default Home;
