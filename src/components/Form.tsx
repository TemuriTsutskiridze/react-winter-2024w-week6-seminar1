import { ChangeEvent, useState } from "react";

type TValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type TErrors = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
};

export default function Form({
  setIsSuccess,
}: {
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [values, setValues] = useState<TValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<TErrors>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  console.log(errors);

  // const [newErrors, setNewErrors] = useState({
  //   email: "",
  // });

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmission = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setErrors({
      ...errors,
      firstName: !values.firstName,
      lastName: !values.lastName,
      email: !emailRegex.test(values.email),
      password: !values.password,
    });

    // if (!values.email) {
    //   setNewErrors({ ...newErrors, email: "email can not be empty" });
    // } else if (!emailRegex.test(values.email)) {
    //   setNewErrors({ ...newErrors, email: "email is not valid" });
    // } else {
    //   setNewErrors({ ...newErrors, email: "" });
    // }

    if (
      !errors.firstName &&
      !errors.lastName &&
      !errors.email &&
      !errors.password
    ) {
      setIsSuccess(true);
    }
  };
  return (
    <form onSubmit={handleSubmission}>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={values.firstName}
          onChange={(event) => handleChange(event)}
        />
        {errors.firstName && <p>First Name cannot be empty</p>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={values.lastName}
          onChange={(event) => handleChange(event)}
        />
        {errors.lastName && <p>Last Name cannot be empty</p>}
      </div>

      <div>
        <label htmlFor="email">Email Address </label>
        <input
          type="text"
          id="email"
          name="email"
          value={values.email}
          onChange={(event) => handleChange(event)}
        />
        {errors.email && <p>Looks like this is not an email</p>}
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          id="password"
          name="password"
          value={values.password}
          onChange={(event) => handleChange(event)}
        />
        {errors.password && <p>Password cannot be empty</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
