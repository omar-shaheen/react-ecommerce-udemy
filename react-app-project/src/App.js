import React, { Component, Fragment } from "react";
import "../src/assets/css/custom.css";
import TopNavbar from "./components/TopNavbar";
// import HomePage from "./pages/HomePage";
import Footer from "./components/common/Footer";
import CartList from "./components/Cart/CartList";
// import Contact from "./components/common/Contact";
// import Favorate from "./components/common/Favorate";
// import FavoratePage from "./pages/FavoratePage";
// import ContactPage from "./pages/ContactPage";
// import NotificationPage from "./pages/NotificationPage";


export class App extends Component {
  render() {
    return (
      <Fragment>
        <TopNavbar />
        <CartList />
        {/* <NotificationPage /> */}
        {/* <FavoratePage /> */}
        {/* <ContactPage /> */}
        {/* <HomePage /> */}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
