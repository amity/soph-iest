import HeadComp from "./Head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export class Layout extends React.Component {
  render() {
    return (
      <div id="top" className="wrapper">
        <HeadComp title={this.props.title} />
        <Navbar currentPage={this.props.currentPage} />
        <div className="componentsDiv">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
