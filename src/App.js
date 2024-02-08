import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/home";
import ContactMe from "./pages/contact-us/contact-us";
import GetInTouch from "./components/get-in-touch";
import AboutMe from "./pages/about-us/about-us";
import MyWorks from "./pages/works/works";
import ProjectDetails from "./pages/works/project-details";
import TheHeader from "./components/header";
import Footer from "./components/footer";
import ApplyNowPage from "./pages/works/apply-now";

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },

          error: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <TheHeader></TheHeader>
      <div className=" bg-zinc-800 w-full">
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate replace to="/home" />}
          ></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/contact-us" element={<ContactMe />}></Route>
          <Route exact path="/about-us" element={<AboutMe />}></Route>
          <Route exact path="/join-us" element={<MyWorks />}></Route>
          <Route
            exact
            path="/join-us/:position"
            element={<ApplyNowPage />}
          ></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
