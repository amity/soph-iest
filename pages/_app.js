import React from "react";
import App, { Container } from "next/app";
// import { translate } from "react-i18next";

// import i18n from "../i18n";
// import i18nConfig from "../i18nConfig";

class WebsiteApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

// const Extended = translate(i18nConfig.ns, { i18n, wait: process.browser })(
//   WebsiteApp
// );

// export default Extended;

export default WebsiteApp;
