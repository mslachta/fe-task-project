import { Route, Routes } from "react-router-dom";
import BookingPage from "../pages/BookingPage";
import FAQPage from "../pages/FAQPage";
import DashboardPage from "../pages/DashboardPage";
import NavigationBar from "../components/NavigationBar";
export default function AppRouter() {
  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </>
  );
}
