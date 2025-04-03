import NavigationBar from "../components/users/landing_page/navbar_component/NavigationBar"
import MainBanner from "../components/users/landing_page/main-banner/MainBanner"
import FlatListing from "../components/users/landing_page/flats-listing/FlatListing";
export default function Index() {
  return (
    <div className=" ">
      <NavigationBar>
        <MainBanner />
        <FlatListing/>
      </NavigationBar>
    </div>
  );
}
