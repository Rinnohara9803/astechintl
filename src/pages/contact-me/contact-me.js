  import {
    faFacebookF,
    faInstagram,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faAddressBook,
    faEnvelope,
    faUser,
  } from "@fortawesome/free-regular-svg-icons";
  import { faPhone } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React, { useState, useEffect, useRef } from "react";
  import "../../css/about-me.css";
  import toast from "react-hot-toast";
  import Sidebar from "../../components/sidebar";
  import TheHeader1 from "../../components/basic-header";
  import { useDispatch } from "react-redux";
  import { lineSliceActions } from "../../slices/line-slice";

  const ContactMe = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const scrollRef = useRef(0);

    const [selectedOptions, setSelectedOptions] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    function isValidEmail(email) {
      // Regular expression for a basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    const [contactInfo, setContactInfo] = useState({
      name: "",
      email: "",
      description: "",
    });

    const clearContactInfo = () => {
      setContactInfo({
        name: "",
        email: "",
        description: "",
      });
    };

    const sendEmail = async (e) => {
      // e.preventDefault();

      var data = {
        service_id: "service_6yhkqag",
        template_id: "template_1xtfdug",
        user_id: "4fBfKASEVUpxuj995",
        template_params: {
          contact_description: contactInfo.description,
          user_name: contactInfo.name,
          user_email: contactInfo.email,
        },
      };

      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => {
          console.log(data);
          toast.success("Thanks for inquiring.");
        })
        .catch((e) => {
          toast.error("Your inquiry wasn't sent");
        });

      clearContactInfo();
    };

    const submitContactForm = () => {
      if (
        contactInfo.name.trim().length === 0 ||
        contactInfo.email.trim().length === 0 ||
        contactInfo.description.trim().length === 0
      ) {
        toast.error("Fill in all the fields.");
        return;
      } else if (!isValidEmail(contactInfo.email)) {
        toast.error("Please provide valid email.");
        return;
      } else {
        sendEmail();
      }
    };

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(
        lineSliceActions.replaceShowLine({ showLine: false, tab: "Contact" })
      );

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      window.scrollTo(0, scrollRef.current);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("heading-text-2-active");
            } else {
            }
          });
        },
        { threshold: 0.2, root: null }
      );
      const hiddenElements = document.querySelectorAll(".heading-text-2");
      hiddenElements.forEach((el) => observer.observe(el));

      return () => {
        window.removeEventListener("resize", handleResize);
        // scrollRef.current = window.scrollY;
      };
    }, []);

    return (
      <div className="h-fit w-full py-4 px-10 md:px-36 md:py-20">
        {isOpen && (
          <div
            onClick={toggleSidebar}
            className="fixed h-full w-full bg-slate-500 top-0 left-0 opacity-25 z-10"
          ></div>
        )}
        <Sidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          contactInfo={contactInfo}
          clearContactInfo={clearContactInfo}
        />
        <div className="heading-text-2 flex flex-col md:flex-col lg:flex-row gap-x-2 justify-center items-center ">
          <div className="h-96 w-full md:w-4/5 lg:w-2/5 flex flex-col px-10 justify-center gap-y-4 bg-slate-100 relative overflow-hidden">
            <div className=" absolute left-4  md:left-80 blur-sm top-3 -rotate-45 border-black border-2 h-24 w-24 "></div>
            <div className=" absolute left-6 md:left-96 top-7 blur-sm -rotate-3 border-black border-2 h-16 w-16 "></div>
            <div className=" absolute bottom-14 -right-3 blur-sm -rotate-45 border-black border-2 h-10 w-10 "></div>
            <div className=" absolute left-28  md:left-14 blur-sm top-20 -rotate-45 border-black border-2 h-24 w-24 "></div>
            <div className=" absolute left-6 md:left-96 top-7 blur-sm -rotate-3 border-black border-2 h-16 w-16 "></div>
            <div className=" absolute top-14 -left-3 blur-sm -rotate-45 border-black border-2 h-10 w-10 "></div>
            <p className="text-black font-semibold text-2xl"> Contact Us</p>
            <div className="relative">
              <input
                className="rounded-sm w-full py-2 pl-10 bg-slate-200 opacity-75"
                value={contactInfo.name}
                type="text"
                placeholder="Name"
                onChange={(event) => {
                  setContactInfo({ ...contactInfo, name: event.target.value });
                }}
              ></input>
              <FontAwesomeIcon
                className="absolute left-3 top-3 text-gray-500"
                icon={faUser}
              ></FontAwesomeIcon>
            </div>
            <div className="relative">
              <input
                value={contactInfo.email}
                className="rounded-sm w-full py-2 bg-slate-200 opacity-75 pl-10"
                type="email"
                placeholder="Email"
                onChange={(event) => {
                  setContactInfo({ ...contactInfo, email: event.target.value });
                }}
              ></input>
              <FontAwesomeIcon
                className="absolute left-3 top-3 text-gray-500"
                icon={faEnvelope}
              ></FontAwesomeIcon>
            </div>
            <textarea
              cols={3}
              value={contactInfo.description}
              className="rounded-sm w-full py-2 bg-slate-200 opacity-75 pl-5"
              type="text"
              placeholder="Message"
              onChange={(event) => {
                setContactInfo({
                  ...contactInfo,
                  description: event.target.value,
                });
              }}
            ></textarea>

            <button
              onClick={submitContactForm}
              className="text-center border-2 border-solid border-black text-black hover:bg-black hover:text-white py-2 rounded-lg transition-all ease-in-out duration-700"
            >
              {" "}
              Send Email
            </button>
          </div>
          {windowWidth > 800 && (
            <div className="md:w-4/5 lg:w-2/5 bg-slate-800 h-96 flex flex-col justify-around pl-10 py-3">
              <p className="text-white font-semibold text-lg">
                {" "}
                Contact Information
              </p>
              <div className="flex flex-col gap-y-5">
                <div className="flex flex-row items-center gap-x-3">
                  <FontAwesomeIcon
                    icon={faAddressBook}
                    className="text-gray-300 "
                  ></FontAwesomeIcon>
                  <p className="text-white text-sm font-semibold">
                    {" "}
                    Kamalpokhari, Kathmandu, Bagmati, Nepal
                  </p>
                </div>
                <div className="flex flex-row items-center gap-x-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-gray-300"
                  ></FontAwesomeIcon>
                  <p className="text-white text-sm font-semibold">
                    {" "}
                    +977 - 9808880359
                  </p>
                </div>
                <div className="flex flex-row items-center gap-x-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-300 "
                  ></FontAwesomeIcon>
                  <p className="text-white text-sm font-semibold">
                    {" "}
                    astechinternational111@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-x-2 pt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100008867498604"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="cursor-pointer hover:text-blue-600 hover:border-blue-600 border border-solid border-white rounded-sm text-center text-white text-lg py-2.5 px-3"
                    icon={faFacebookF}
                  ></FontAwesomeIcon>
                </a>
                <a
                  href="https://www.instagram.com/rin.nohara9803/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="cursor-pointer hover:text-orange-600 hover:border-orange-600 border border-solid border-white rounded-sm text-center text-white text-lg p-2.5"
                    icon={faInstagram}
                  ></FontAwesomeIcon>
                </a>
                <a
                  href="https://www.linkedin.com/in/sagarprajapati9803/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="cursor-pointer hover:text-sky-400 hover:border-sky-400 border border-solid border-white rounded-sm text-center text-white text-lg p-2.5"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default ContactMe;
