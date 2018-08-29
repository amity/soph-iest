import HeadComp from "./Head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export class Layout extends React.Component {
  render() {
    return (
      <div id="top" className="wrapper">
        <HeadComp title={this.props.title} />
        <Navbar currentPage={this.props.currentPage} jp={this.props.jp} />
        <div className="componentsDiv">{this.props.children}</div>
        <Footer jp={this.props.jp} />
      </div>
    );
  }
}

export default Layout;
