"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
};

export default function MyForm() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" {...register("name")} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" {...register("email")} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}