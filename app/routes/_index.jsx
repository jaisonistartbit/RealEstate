import NavigationBar from "../components/users/landing_page/navbar_component/NavigationBar"
import MainBanner from "../components/users/landing_page/main-banner/MainBanner"
import FlatListing from "../components/users/landing_page/flats-listing/FlatListing";
import Footer from "../components/users/landing_page/footer/Footer";
import NearCities from "../components/users/landing_page/neighbour-cities/NearCities";
export default function Index() {
  return (
    <div className=" ">
      <NavigationBar>
        <MainBanner />
        <FlatListing />
        <NearCities />
        <Footer />
      </NavigationBar>
    </div>
  );
}
