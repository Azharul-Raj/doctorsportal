import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Doctor from "./Doctor";

const Doctors = () => {
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: () =>
      axios.get("/doctors").then((res) => res.json()),
  });
  console.log(doctors);
  return (
    <>
      {doctors.length ? (
        <>
          <div className="text-3xl text-black">Doctors List</div>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead style={{ backgroundColor: "gray" }}>
                <tr>
                  <th></th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>SPECIALITY</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor, idx) => (
                  <Doctor
                    key={idx}
                    refetch={refetch}
                    doctor={doctor}
                    idx={idx}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center"><h2 className="text-4xl text-black">No Doctors found</h2></div>
      )}
    </>
  );
};

export default Doctors;
