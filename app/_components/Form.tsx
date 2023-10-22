"use client";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
interface SubjectInfo {
  subject: string;
  o_marks: string;
  f_marks: string;
}

interface AcademicRecord {
  degree: string;
  subjects: SubjectInfo[];
}

interface InitialValues {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  address: string;
  state: string;
  city: string;
  pin: string;
  a_record: AcademicRecord[];
}
const Form = () => {
  const sub_init: SubjectInfo = {
    subject: "",
    o_marks: "",
    f_marks: "",
  };
  const init_acd: AcademicRecord = {
    degree: "",
    subjects: [sub_init],
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        address: "",
        state: "",
        city: "",
        pin: "",
        a_record: [init_acd],
      }}
      validationSchema={yup.object({
        firstName: yup.string().required("Please Enter the First Name"),
        lastName: yup.string().required("Please Enter the Last Name"),
        email: yup.string().email().required("Please Enter the Email"),
        country: yup.string().required("Please Select the Country"),
        address: yup.string().required("Please enter your address"),
        state: yup.string().required("Please Select the State"),
        city: yup.string().required("Please enter your city"),
        pin: yup.string().required("Please enter your Pin Code"),
        a_record: yup.array().of(
          yup.object().shape({
            degree: yup
              .string()
              .required("Please enter the name of the degree."),
            subjects: yup.array().of(
              yup.object().shape({
                subject: yup.string().required("Please Enter the subject Name"),
                o_marks: yup
                  .string()
                  .required("Please Enter the Obtained Marks"),
                f_marks: yup.string().required("Please Enter the Full Marks"),
              })
            ),
          })
        ),
      })}
      onSubmit={(values, action) => {}}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        setValues,
        handleBlur,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-white"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                  onBlur={handleBlur}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {touched.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName}
                  </span>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-white"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                  onBlur={handleBlur}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {touched.lastName && (
                  <span className="text-red-500 text-sm">
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {touched.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-white"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  onChange={handleChange}
                  value={values.country}
                  onBlur={handleBlur}
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                {touched.country && (
                  <span className="text-red-500 text-sm">{errors.country}</span>
                )}
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-white"
              >
                Street address
              </label>
              <div className="mt-2">
                <textarea
                  rows={3}
                  name="address"
                  id="address"
                  onChange={handleChange}
                  value={values.address}
                  onBlur={handleBlur}
                  autoComplete="address"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {touched.address && (
                  <span className="text-red-500 text-sm">{errors.address}</span>
                )}
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="state"
                className="block text-sm font-medium leading-6 text-white"
              >
                State
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="state"
                  id="state"
                  onChange={handleChange}
                  value={values.state}
                  onBlur={handleBlur}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {touched.state && (
                  <span className="text-red-500 text-sm">{errors.state}</span>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-white"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="region"
                  onChange={handleChange}
                  value={values.city}
                  onBlur={handleBlur}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {touched.city && (
                  <span className="text-red-500 text-sm">{errors.city}</span>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="pin"
                className="block text-sm font-medium leading-6 text-white"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="pin"
                  maxLength={6}
                  id="pin"
                  onChange={handleChange}
                  value={values.pin}
                  onBlur={handleBlur}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {touched.pin && (
                  <span className="text-red-500 text-sm">{errors.pin}</span>
                )}
              </div>
            </div>
          </div>
          <div className="border-b mt-4 border-white/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white">
              Academics Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <h2 className="text-base font-semibold leading-7 mt-4  text-white">
            Qualifications{" "}
            <button
              type="button"
              onClick={() => {
                setValues((prev) => ({
                  ...prev,
                  a_record: [...prev.a_record, init_acd],
                }));
              }}
              className="rounded-md bg-transparent border-2 ml-2 hover:bg-indigo-500 duration-300 border-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm "
            >
              + Add more
            </button>
          </h2>
          {values.a_record.map((r, idx) => (
            <React.Fragment key={idx}>
              <div className="grid grid-cols-1 gap-8 mt-4">
                <div className=" sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    degree
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="degree"
                      value={r.degree}
                      onChange={(e) => {
                        const updatedARecord = [...values.a_record];
                        updatedARecord[idx] = {
                          ...updatedARecord[idx],
                          degree: e.target.value,
                        };
                        setValues((prev) => ({
                          ...prev,
                          a_record: updatedARecord,
                        }));
                      }}
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                    />
                    {
                      <span className="text-red-500 text-sm">
                        {errors.a_record?.[idx]?.degree as string}
                      </span>
                    }
                  </div>
                </div>
                <h2 className="text-base font-semibold leading-7  text-white">
                  Subjects{" "}
                  <button
                    type="button"
                    onClick={() => {
                      const updatedARecord = [...values.a_record];
                      updatedARecord[idx] = {
                        ...updatedARecord[idx],
                        subjects: [
                          ...updatedARecord[idx].subjects,
                          { ...sub_init },
                        ],
                      };
                      setValues((prev) => ({
                        ...prev,
                        a_record: updatedARecord,
                      }));
                    }}
                    className="rounded-md bg-transparent border-2 ml-2 hover:bg-indigo-500 duration-300 border-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm "
                  >
                    + Add more
                  </button>
                </h2>
                {r.subjects.map((s, index) => (
                  <div
                    key={idx}
                    className="px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
                  >
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Subject
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="subject"
                          value={s.subject}
                          onChange={(e) => {
                            setValues((prev) => ({
                              ...prev,
                              a_record: prev.a_record.map(
                                (record, recordIndex) => {
                                  if (recordIndex !== idx) return record;
                                  return {
                                    ...record,
                                    subjects: record.subjects.map(
                                      (subject, subjectIndex) => {
                                        if (subjectIndex !== index)
                                          return subject;
                                        return {
                                          ...subject,
                                          subject: e.target.value,
                                        };
                                      }
                                    ),
                                  };
                                }
                              ),
                            }));
                          }}
                          id="city"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                        {
                          <span className="text-red-500 text-sm">
                            {errors.a_record?.[idx]?.subjects?.[index]?.subject}
                          </span>
                        }
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Obtained Marks
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="o_marks"
                          value={s.o_marks}
                          onChange={(e) => {
                            setValues((prev) => ({
                              ...prev,
                              a_record: prev.a_record.map(
                                (record, recordIndex) => {
                                  if (recordIndex !== idx) return record;
                                  return {
                                    ...record,
                                    subjects: record.subjects.map(
                                      (subject, subjectIndex) => {
                                        if (subjectIndex !== index)
                                          return subject;
                                        return {
                                          ...subject,
                                          o_marks: e.target.value,
                                        };
                                      }
                                    ),
                                  };
                                }
                              ),
                            }));
                          }}
                          id="region"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                        {
                          <span className="text-red-500 text-sm">
                            {errors.a_record?.[idx]?.subjects?.[index]?.o_marks}
                          </span>
                        }
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Full Marks
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="f_marks"
                          value={s.f_marks}
                          onChange={(e) => {
                            setValues((prev) => ({
                              ...prev,
                              a_record: prev.a_record.map(
                                (record, recordIndex) => {
                                  if (recordIndex !== idx) return record;
                                  return {
                                    ...record,
                                    subjects: record.subjects.map(
                                      (subject, subjectIndex) => {
                                        if (subjectIndex !== index)
                                          return subject;
                                        return {
                                          ...subject,
                                          f_marks: e.target.value,
                                        };
                                      }
                                    ),
                                  };
                                }
                              ),
                            }));
                          }}
                          id="region"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                        {
                          <span className="text-red-500 text-sm">
                            {errors.a_record?.[idx]?.subjects?.[index]?.f_marks}
                          </span>
                        }
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Apply
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
