"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLabel }) {
  //useFormStatus has to be in the form that we want to use it but we have to put it as a component that will be in the form.
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
