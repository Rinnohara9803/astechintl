import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/home";
import ContactMe from "./pages/contact-me/contact-me";
import GetInTouch from "./components/get-in-touch";
import AboutMe from "./pages/about-me/about-me";
import MyWorks from "./pages/works/works";
import ProjectDetails from "./pages/works/project-details";
import TheHeader from "./components/header";
import Footer from "./components/footer";

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
          <Route exact path="/contact-me" element={<ContactMe />}></Route>
          <Route exact path="/about-me" element={<AboutMe />}></Route>
          <Route exact path="/my-works" element={<MyWorks />}></Route>
          <Route
            exact
            path="/my-works/:projectname"
            element={<ProjectDetails />}
          ></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
