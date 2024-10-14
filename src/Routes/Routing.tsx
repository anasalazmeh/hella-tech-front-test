import { Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Footer from "../Components/general/Footer/Footer";
import { DirectionResolver } from "../utils/hooks";
import HelaVideo from "../Pages/HelaVideo/HelaVideo";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "../Pages/RefundPolicy/RefundPolicy";
import TermsAndConditions from "../Pages/TermsAndConitions/TermsAndConditions";
import ConsultNow from "../Pages/ConsultNow/ConsultNow";
import WhatsappIcon from "../Components/WhatsappIcon/WhatsappIcon";
import PageStories from "../Pages/Stories/PageStories";

const Routing = () => {
  return (
    <div dir={DirectionResolver()}>
      <WhatsappIcon />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/hela-video" element={<HelaVideo />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/consult-now/:slug" element={<ConsultNow />} />
        <Route path="/blogs" element={<PageStories />} />
        <Route path="/consult-now/:id" element={<ConsultNow />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Routing;
