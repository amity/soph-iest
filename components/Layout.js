import HeadComp from "./Head";
import Navbar from "./Navbar";

const Layout = props => {
  return (
    <div>
      <HeadComp title={props.title} />
      <Navbar /> {props.children}
    </div>
  );
};

export default Layout;
