import { useState } from "react";
import { useForm } from "react-hook-form";
import Parse from "./api/parse";

export default function Employee() {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePassword, setEmployeePassword] = useState("");

  const [employees, setEmployees] = useState([]);

  // prevent submitting invalid or empty emails
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createEmployee(data);
    reset();
  };

  const createEmployee = (data) => {
    const employee = new Parse.Object("Employee");
    employee
      .save({
        username: data.name,
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        setEmployeeName("");
        setEmployeeEmail("");
        setEmployeePassword("");
        alert(
          "New object create with success! ObjectId: " +
            response.id +
            ", " +
            employee.get("username")
        );
      })
      .catch(function (error) {
        alert("Error: " + error.message);
      });
  };

  const getEmployees = async () => {
    const query = new Parse.Query("Employee");
    const res = await query.findAll();
    const employees = res.map((employee) => ({
      name: employee.get("username"),
    }));

    if (employees.length === 0) {
      alert("No records found.");
    }
    setEmployees(employees);
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="relative py-3 sm:max-w-xl sm:mx-auto">
          <h2 className="text-5xl mt-2 mb-6 leading-tight font-semibold font-heading">
            Create an Employee{" "}
          </h2>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Employee Name
            </label>
            <input
              id="name"
              className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              placeholder="name"
              aria-invalid={errors.empName ? "true" : "false"}
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Employee Email
            </label>
            <input
              className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              placeholder="email"
              type="email"
              id="email"
              {...register("email", {
                required: "required",
                pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ },
              })}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Employee Password
            </label>
            <input
              className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              placeholder="password"
              type="password"
              {...register("password", { required: "required" })}
            />
          </div>

          <div className="flex items-center justify-center py-1 sm:max-w-xl sm:mx-auto">
            <button
              className="inline-block align-middle py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
              type="submit"
            >
              create employee
            </button>
          </div>
        </section>
      </form>
      <section className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative py-1 sm:max-w-xl sm:mx-auto">
          <button
            className="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
            onClick={getEmployees}
          >
            list created employees
          </button>
        </div>
      </section>
      <div className="max-w-md mx-auto">
        <section className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          <ul className="list-disc space-y-2">
            {employees.map(({ name }) => (
              <li className="flex items-start" key={name}>
                <span className="h-6 flex items-center sm:h-7">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-cyan-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="ml-2">{name}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
