import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { countries } from "countries-list";
import toast from "react-hot-toast";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTeamspeak } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faCircleDollarToSlot,
  faCloud,
  faCloudBolt,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.object().shape({
      country: Yup.string().required("Country is required"),
      number: Yup.string()
        .matches(/^\d{10}$/, "Invalid phone number")
        .required("Phone number is required"),
    }),
    projectDescription: Yup.string().required(
      "Project description is required"
    ),
  });

  const [selectedWw, setSelectedWw] = useState("");

  const workways = [
    {
      icon: faCloudBolt,
      name: "Augment my existing team",
      desc: "Expand capacity and boost efficiency for success!",
    },
    {
      icon: faProjectDiagram,
      name: "I have a new project",
      desc: "Turn ideas into reality with our skilled professionals!",
    },
    {
      icon: faCircleDollarToSlot,
      name: "I want a dedicated team for my project",
      desc: "Your goal for excellence is our team's focus!",
    },
  ];

  const countryOptions = Object.entries(countries).map(([code, country]) => ({
    value: code,
    label: country.name,
  }));

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      projectDescription: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  const sendEmail = async (e) => {
    // e.preventDefault();

    var data = {
      service_id: "service_6yhkqag",
      template_id: "template_1xtfdug",
      user_id: "4fBfKASEVUpxuj995",
      template_params: {
        contact_description: "contactInfo.description",
        user_name: "contactInfo.name",
        user_email: "contactInfo.email",
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
  };

  return (
    <form
      className="w-full flex flex-col items-start"
      onSubmit={formik.handleSubmit}
    >
      <div className="mb-8 w-full flex flex-col items-start gap-y-2">
        <label
          htmlFor="name"
          className="text-start block text-2xl tracking-wider font-medium text-black"
        >
          Your full name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="eg. Pasang Sherpa"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={`mt-1 px-7 py-5 w-full border ${
            formik.touched.name && formik.errors.name
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-sm text-red-500 mt-1">{formik.errors.name}</p>
        )}
      </div>

      <div className="mb-8 w-full flex flex-col items-start gap-y-2">
        <label
          htmlFor="email"
          className="block text-2xl tracking-wider text-start font-medium text-black"
        >
          Email ddress
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="eg.pasang@gmail.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`mt-1 px-7 py-5  w-full border ${
            formik.touched.email && formik.errors.email
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
        )}
      </div>

      <p className="text-2xl tracking-wide text-start font-semibold text-black">
        How do you want to work with us ?
      </p>
      <p className="text-start  text-black">
        We have more than one ways to engage.
      </p>
      <div className="flex flex-col mb-8 mt-4 gap-x-5 w-full">
        {workways.map((w) => {
          return (
            <div
              onClick={() => {
                setSelectedWw(w.name);
              }}
              className={`hover:bg-slate-200 transition-all ease-in duration-500 cursor-pointer border border-solid border-black flex flex-row px-10 py-4 w-full mb-5 items-center justify-start gap-x-6 relative ${
                selectedWw === w.name ? "shadow-gray-600 shadow-md" : ""
              }`}
            >
              <FontAwesomeIcon
                icon={w.icon}
                className="text-gray-700 text-2xl"
              ></FontAwesomeIcon>
              <div className="text-start flex flex-col items-start justify-start">
                <p className="text-lg">{w.name}</p>
                <p className="text-sm">{w.desc}</p>
              </div>
              {selectedWw === w.name && (
                <FontAwesomeIcon
                  className="absolute top-4 right-4 text-black text-2xl"
                  icon={faCheck}
                ></FontAwesomeIcon>
              )}
            </div>
          );
        })}
      </div>

      <div className="mb-8 w-full flex flex-col items-start gap-y-2">
        <label
          htmlFor="phone"
          className="block text-2xl tracking-wider text-start font-medium text-black"
        >
          Your phone number
        </label>
        <div className="flex flex-row w-full">
          <select
            id="phone.country"
            name="phone.country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone.country}
            className={`mt-1 px-7 py-5 border w-36 ${
              formik.touched.phone?.country && formik.errors.phone?.country
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <option value="" disabled>
              Select Country
            </option>
            {countryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="phone.number"
            name="phone.number"
            placeholder="eg.980#######"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone.number}
            className={`mt-1 px-7 py-5  w-full border ${
              formik.touched.phone?.number && formik.errors.phone?.number
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
        </div>

        {formik.touched.phone && formik.errors.phone && (
          <p className="text-sm text-red-500 mt-1">
            {formik.errors.phone.number}
          </p>
        )}
      </div>
      <div className="mb-8 w-full flex flex-col items-start gap-y-2">
        <label
          htmlFor="projectDescription"
          className="block text-2xl tracking-wider text-start font-medium text-black"
        >
          Tell us something about your project
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows="8"
          placeholder="eg.I want to build this crazy app..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.projectDescription}
          className={`mt-1 px-7 py-5  w-full border ${
            formik.touched.projectDescription &&
            formik.errors.projectDescription
              ? "border-red-500"
              : "border-gray-300"
          }`}
        ></textarea>
        {formik.touched.projectDescription &&
          formik.errors.projectDescription && (
            <p className="text-sm text-red-500 mt-1">
              {formik.errors.projectDescription}
            </p>
          )}
      </div>

      <button
        type="submit"
        className="text-start font-semibold tracking-wider bg-cyan-700 text-white py-4 px-10 hover:bg-gray-700 focus:outline-none focus:ring transition-all duration-1000"
      >
        SEND A MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
