"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message..., please wait");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          },
        }
      )
      .then(
        () => {
          toast.success(
            "I've received your message, I'll get back to you soon!",
            { id: toastId }
          );
        },
        () => {
          toast.error(
            "There was an error sending your message, please try again later.",
            { id: toastId }
          );
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.firstName + " " + data.lastName,
      to_name: "Jerin Rubaiya",
      message: data.message,
      reply_to: data.email,
    };
    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl mx-auto px-4 py-6 bg-black border border-purple-100 text-white flex flex-col space-y-3 transition-all"
      >
        <input
          type="text"
          placeholder="First name"
          {...register("firstName", {
            required: "First name is required",
            maxLength: {
              value: 10,
              message: "First name must be at most 10 characters",
            },
            minLength: {
              value: 3,
              message: "First name must be at least 3 characters",
            },
          })}
          className="w-full p-2 border border-red-100 bg-black text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all text-sm sm:text-base"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}

        <input
          type="text"
          placeholder="Last name"
          {...register("lastName", {
            required: "Last name is required",
            maxLength: {
              value: 7,
              message: "Last name must be at most 7 characters",
            },
            minLength: {
              value: 3,
              message: "Last name must be at least 3 characters",
            },
          })}
          className="w-full p-2 border border-cyan-100 bg-black text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all text-sm sm:text-base"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}

        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          className="w-full p-2 border border-lime-100 bg-black text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all text-sm sm:text-base"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">Valid email is required</p>
        )}

        <input
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber", { required: true })}
          className="w-full p-2 border border-yellow-100 bg-black text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all text-sm sm:text-base"
        />
        {errors.mobileNumber && (
          <p className="text-red-500 text-sm">Mobile number is required</p>
        )}

        <textarea
          placeholder="Message"
          {...register("message")}
          className="w-full p-2 border border-white bg-black text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all text-sm sm:text-base"
          rows={3}
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-2 border hover:bg-white/5 hover:text-white transition-colors capitalize font-semibold text-sm sm:text-base"
        >
          Cast your message!
        </button>
      </form>
    </>
  );
}
