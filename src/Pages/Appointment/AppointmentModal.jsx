import { format } from "date-fns/esm";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvide";

const AppointmentModal = ({ id, title, slots, selected }) => {
  const { logOut, user } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    refetch,
  } = useForm();
  // const { user } = useContext(AuthContext)
  const appointmentDate = format(selected, "PP");
  // console.log(id, userName, slots, appointmentDate)
  const handleBooking = (data) => {
    const slot = data?.slot;
    console.log(slot);
    const booking = {
      appointmentDate,
      treatment: title,
      pasent: user?.displayName,
      slot,
      email: user?.email,
      phone: user?.phone_number,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json)
      .then((data) => {
        alert("Booking Confirm");
        refetch();
      });
  };
  return (
    <>
      <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />

      <div className="modal md:items-center items-end">
        <div className="modal-box w-full md:w-5xl">
          <label
            htmlFor={`my-modal-${id}`}
            className="btn btn-sm md:btn-sm btn-circle absolute right-3 top-3 bg-red-100 md:text-6xl text-red-500"
          >
            ✕
          </label>
          <h3 className="font-bold text-left text-lg">{title}</h3>
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-100 text-gray-900">
            <form
              onSubmit={handleSubmit(handleBooking)}
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="date"
                  {...register("date")}
                  value={appointmentDate}
                  placeholder="Appointment Date"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-gray-100 text-gray-900 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm p-3">
                <select
                  name="slot"
                  {...register("slot")}
                  className="focus:outline-none w-full"
                >
                  {slots.map((slot, i) => (
                    <option
                      className="focus:outline-none w-full py-2"
                      value={slot}
                      key={i}
                    >
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="username"
                  {...register("username")}
                  defaultValue={user?.displayName}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-gray-100 text-gray-900 focus:dark:border-violet-400"
                />
              </div>

              <div className="space-y-1 text-sm">
                <input
                  onChange
                  defaultValue={user?.email}
                  type="email"
                  name="email"
                  readOnly
                  {...register("email")}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400"
                />
              </div>

              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="phone_number"
                  {...register("phone_number")}
                  placeholder="Phone Number "
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-gray-100 text-gray-900 focus:dark:border-violet-400"
                />
              </div>

              <button className=" w-full p-3 text-center rounded-md text-gray-100 bg-accent">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
