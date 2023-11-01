import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import "./MainContent.scss";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import BookDetail from "./BookDetail";
import SubpageLayout from "./SubpageLayout";

export default function MainContent() {
  return (
    <>
      <main className="main">
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* Wrap with subpage layout all these links */}
          <Route path="/" element={<SubpageLayout />}>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="*" element="404: page not found" />
          </Route>
        </Routes>
      </main>
    </>
  );
}
