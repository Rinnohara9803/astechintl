import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const MyAcademicProjects = () => {
  const [theProjects, setMyProjects] = useState([]);
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    hasError: false,
  });

  const navigate = useNavigate();

  const fetchMyAcademicProjects = async () => {
    const collectionRef = db.collection("projects");
    try {
      const snapshot = await collectionRef.get();
      let projects = [];

      console.log(snapshot.docs);

      projects = snapshot.docs.map((doc) => doc.data());
      console.log(projects);
      return projects;
    } catch (e) {
      throw new Error(e.message);
    }
  };

  useEffect(() => {
    setFetchState({ ...fetchState, isLoading: true });
    fetchMyAcademicProjects()
      .then((data) => {
        setFetchState({ ...fetchState, isLoading: false });
        setMyProjects(data);
      })
      .catch((e) => {
        toast.error(e.message);
        setFetchState({ isLoading: false, hasError: true });
      });
  }, []);

  return (
    <div>
      <div className="text-slate-400 text-xl font-semibold">Academic Projects</div>
      {fetchState.isLoading && (
        <div className="h-56 w-full flex flex-row justify-center items-center"> <ClipLoader
        color="red"
        // loading={loading}
        // cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> </div>
      )}
      {!fetchState.isLoading && fetchState.hasError && (
        <p className="text-white font-semibold text-center">
          {" "}
          No Data Available !
        </p>
      )}
      {!fetchState.isLoading && !fetchState.hasError && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {theProjects.map((project, index) => (
            <div
              onClick={() => {
                navigate(`/my-works/${project.name}`, {
                  state: { ...project },
                });
              }}
              key={index}
              className="flex flex-col"
            >
              <img
                src={project.images[0]}
                alt={project.name}
                className="cursor-pointer border border-solid border-white object-cover bg-slate-400 h-56  md:h-52 w-full hover:opacity-75 transition-opacity duration-300 p-0.5"
              />
              <p className="text-lg font-semibold text-white pt-2">
                {" "}
                {project.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAcademicProjects;
