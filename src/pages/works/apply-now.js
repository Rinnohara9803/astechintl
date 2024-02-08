import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router";

const ApplyNowPage = () => {
  const { position } = useParams();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    cv: Yup.mixed().required("CV file is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      cv: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  const scrollRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "heading-text-1-active",
              "heading-text-2-active",
              "header-image-0-active",
              "header-image-1-active",
              "header-image-2-active",
              "header-image-3-active",
              "header-data-active"
            );
          } else {
          }
        });
      },
      { threshold: 0.5, root: null }
    );
    const hiddenElements = document.querySelectorAll(
      ".heading-text-1, .heading-text-2,.header-image-0, .header-image-1, .header-image-2, .header-image-3, .header-data"
    );
    hiddenElements.forEach((el) => observer.observe(el));
    window.scrollTo(0, scrollRef.current);
  }, []);

  return (
    <div className="bg-slate-200 flex flex-col pb-9 md:pb-20">
      <div
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: `url("https://www.naceweb.org/images/default-source/2019/feature/allowing-students-to-use-jobs-as-internships-xlarge.jpg")`,
        }}
        className="flex flex-col object-cover items-center py-9 mb-5 md:py-28 px-10 md:px-36 w-full bg-gradient-to-br bg-zinc-800 relative overflow-hidden"
      >
        <div className="bg-orange-400 h-40 w-40 rounded-full absolute -right-20 top-10"></div>
        <div className="border-4 border-solid border-cyan-700 h-40 w-40 rounded-full absolute -bottom-20 right-60"></div>
        <div className="bg-black bg-opacity-50 absolute top-0 left-0 h-full w-full"></div>

        <div className=" heading-text-1 text-white font-bold text-center text-5xl tracking-wider mb-7">
          Join Our Team
        </div>
        <p className="heading-text-2 text-center text-white text-lg tracking-wider">
          We are always looking for talented individuals to join us. If you're
          passionate about your work and want to make a big impact you will fit
          right in.
        </p>
      </div>
      <form
        className="w-full md:1/2 flex flex-col items-start px-10 md:px-36"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-8  w-full md:w-2/3 lg:w-1/2 flex flex-col items-start gap-y-2">
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

        <div className="mb-8 w-full  md:w-2/3 lg:w-1/2  flex flex-col items-start gap-y-2">
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
        <div className="mb-8 w-full flex flex-col items-start gap-y-2 ">
          <label
            htmlFor="cv"
            className="block text-2xl tracking-wider text-start font-medium text-black"
          >
            Upload Resume
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            onChange={(event) => {
              formik.setFieldValue("cv", event.currentTarget.files[0]);
            }}
            className={`mt-1 px-7 py-5 w-full md:w-2/3 lg:w-1/2  bg-white border border-dotted border-black ${
              formik.touched.cv && formik.errors.cv
                ? "border-red-500"
                : "border-black"
            }`}
          />
          {formik.touched.cv && formik.errors.cv && (
            <p className="text-sm text-red-500 mt-1">{formik.errors.cv}</p>
          )}
        </div>
        <div className="mb-8 w-full  md:w-2/3 lg:w-1/2  flex flex-col items-start gap-y-2">
          <label
            htmlFor="projectDescription"
            className="block text-2xl tracking-wider text-start font-medium text-black"
          >
            Cover Letter (Optional)
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            rows="8"
            placeholder="Tell a bit about yourself.."
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
        </div>

        <button
          type="submit"
          className="text-start font-semibold tracking-wider bg-cyan-700 text-white py-4 px-10 hover:bg-gray-700 focus:outline-none focus:ring transition-all duration-1000"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyNowPage;
