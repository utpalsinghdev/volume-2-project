import React from "react";
import Form from "./_components/Form";
export default async function Home() {
  return (
    <div className="max-w-screen-md mx-auto sm:px-6 px-4 py-4 lg:px-8">
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            Use a permanent address where you can receive mail.
          </p>
        </div>
      </div>
      <Form />
    </div>
  );
}
