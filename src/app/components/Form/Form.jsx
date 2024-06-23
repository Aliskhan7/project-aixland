"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@/app/components/UI/Button/Button";
import Arrow from "../../../../public/assets/icons/Arrow/Arrow";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Form.scss";

const schema = yup.object().shape({
  name: yup.string().required("Name required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "The phone number must contain only digits"),
  email: yup
    .string()
    .required("Email is required")
    .email("Incorrect e-mail address"),
  agree: yup
    .boolean()
    .oneOf([true], "Consent is required")
    .required("Consent is required"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Логика отправки данных на сервер
    fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form flex flex-col gap-y-6"
    >
      <div>
        <input
          type="text"
          placeholder="Name"
          className={`${errors.phone ? "form-input__error" : ""} form-input`}
          {...register("name")}
        />
        {errors.name && <p className="error-text">{errors.name.message}</p>}
      </div>
      <div>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <PhoneInput
              country={"de"}
              value={field.value}
              onChange={field.onChange}
              className={`${errors.phone ? "form-input__error" : ""} form-input_number`}
              countryCodeEditable={false}
              enableSearch={true}
              specialLabel=""
            />
          )}
        />
        {errors.phone && <p className="error-text">{errors.phone.message}</p>}
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          className={`${errors.phone ? "form-input__error" : ""} form-input`}
          {...register("email")}
        />
        {errors.email && <p className="error-text">{errors.email.message}</p>}
      </div>
      <textarea
        className="form-input h-[166px]"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Message"
      ></textarea>
      <div className="flex gap-x-4 mt-2 items-start">
        <Button
          type="submit"
          bg="bg-gray-100"
          p="px-3 py-2"
          classStyle="hover:bg-gray-200 duration-150 ease-in text-sm flex gap-x-[13.2px] items-center mx-auto "
        >
          Send message <Arrow />
        </Button>
        <div>
          <label className="text-dark-200 text-[12px] flex items-start gap-x-2">
            <input type="checkbox" {...register("agree")} />
            I agree with the processing of my personal data <br /> and the
            public offer agreement
          </label>
          {errors.agree && <p className="error-text">{errors.agree.message}</p>}
        </div>
      </div>
    </form>
  );
};

export default Form;
