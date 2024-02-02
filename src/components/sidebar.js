import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Sidebar = ({ isOpen, toggleSidebar, contactInfo, clearContactInfo }) => {
  const options = ["Friends", "Family", "Social Media"];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherOption, setOtherOption] = useState("");
  const handleOtherInputChange = (event) => {
    setOtherOption(event.target.value);
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      // If the option is already selected, remove it
      setSelectedOptions(
        selectedOptions.filter((selected) => selected !== option)
      );
    } else {
      // If the option is not selected, add it
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

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
    toggleSidebar();
  };

  return (
    <div
      className={`fixed overflow-y-auto overflow-hidden h-full w-72 md:w-96 bg-zinc-800 top-0 left-0 transition-transform transform duration-700 z-10 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="pt-20 px-5 ">
        <div className="flex flex-row  items-start justify-between">
          <p className="text-white text-sm font-semibold">
            How did you hear about me?
          </p>
          <FontAwesomeIcon
            onClick={toggleSidebar}
            icon={faClose}
            className="text-white"
          ></FontAwesomeIcon>
        </div>

        <div className="flex flex-col pl-4 pt-4 gap-y-3">
          {options.map((option) => (
            <div key={option} className="flex flex-row mb-2">
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                className="mr-2 h-6 w-6 text-yellow-500 focus:ring-2 focus:ring-yellow-500 bg-yellow-500"
              />
              <p className="text-white text-sm"> {option} </p>
            </div>
          ))}
          <div className="flex flex-row mb-2">
            <input
              type="checkbox"
              value="Other"
              checked={selectedOptions.includes("Other")}
              onChange={() => handleCheckboxChange("Other")}
              className="mr-2 h-6 w-6 text-yellow-500 focus:ring-2 focus:ring-yellow-500 bg-yellow-500"
            />
            <p className="text-white text-sm"> "Other" </p>
          </div>
        </div>

        {selectedOptions.includes("Other") && (
          <input
            type="text"
            placeholder="Specify"
            value={otherOption}
            onChange={handleOtherInputChange}
            className="p-2 border rounded-sm mt-5 w-full"
          />
        )}
        <button
          onClick={sendEmail}
          className="mt-10 text-center border-2 border-solid border-white text-white hover:bg-white hover:text-black py-2 rounded-sm transition-all ease-in-out duration-700 w-full"
        >
          {" "}
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
