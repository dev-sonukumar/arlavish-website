import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getallteacher } from "../../ReduxToolkit/Slice/Teacher";
import { Row } from "../../components/ComponentsIndex";
import CommanBanner from "../Comman/CommanBanner";
import Img from "../../components/Img/Img";

function Teacher() {
  // api
    const dispatch = useDispatch();
    const { teachers, status } = useSelector((state) => state.teacher);

    //  call api
    useEffect(() => {
      if (status === "idle") {
        dispatch(getallteacher());
      }
    }, [dispatch, status]);

  // Skeleton Loader
  const renderSkeleton = () => {
    return Array(6)
      .fill(0)
      .map((_, index) => (
        <div
          key={index}
          className="bg-white shadow-sm rounded-lg flex flex-col items-start justify-between animate-pulse"
        >
          <div className="flex items-center justify-center w-full">
            <div className="rounded-t-lg w-full h-80 bg-gray-300"></div>
          </div>
          <div className="w-full p-4 bg-gray-200">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* Left Column */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
              {/* Right Column */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <>
      <Row className="">
        <CommanBanner title={"Teachers"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:m-10 m-5">
          {status === "loading" ? (
            renderSkeleton() // Render the skeleton loader while loading
          ) : (
            teachers &&
            teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white shadow-sm rounded-lg flex flex-col items-start justify-between"
              >
                <div className="flex items-center justify-center w-full">
                  {teacher.aadharImg ? (
                    <Img
                      className="rounded-t-lg w-full h-80 object-cover"
                      src={teacher.aadharImg}
                      alt=""
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-full">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                </div>
                <div className="w-full p-4 bg-custom-peach">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {teacher.name || "N/A"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {/* Left Column */}
                    <div className="space-y-2">
                      <p className="text-lg text-gray-600 flex items-center font-bold">
                        <i className="bi bi-person-fill mr-2 text-lg text-orange-400"></i>
                        Experience: {teacher.experience || "N/A"}
                      </p>
                      <p className="text-lg text-gray-600 flex items-center font-bold">
                        <i className="bi bi-instagram mr-2 text-lg text-orange-400"></i>
                        Social Handle: {teacher.socialHandle || "N/A"}
                      </p>
                      <p className="text-lg text-gray-600 flex items-center font-bold">
                        <i className="bi bi-clock-fill mr-2 text-lg text-orange-400"></i>
                        Slot:{" "}
                        {teacher.slot && teacher.slot.length
                          ? teacher.slot.join(", ")
                          : "N/A"}
                      </p>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-2">
                      <p className="text-lg text-gray-600 flex items-center font-bold">
                        <i className="bi bi-hourglass-bottom mr-2 text-lg text-orange-400"></i>
                        Age: {teacher.age || "N/A"}
                      </p>
                      <p className="text-lg text-gray-600 flex items-center font-bold">
                        <i className="bi bi-geo-alt-fill mr-2 text-lg text-orange-400"></i>
                        Address: {teacher.address || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Row>
    </>
  );
}

export default Teacher;
