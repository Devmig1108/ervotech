import { a as jsx, j as jsxs } from "../ssr.js";
import { useEffect } from "react";
import { G as Guest } from "./GuestLayout-5a6f6549.js";
import { T as TextInput, I as InputError } from "./TextInput-6176fc5f.js";
import { I as InputLabel } from "./InputLabel-164e4edc.js";
import { P as PrimaryButton } from "./PrimaryButton-f6376536.js";
import { useForm, Head, Link } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-3e8c8466.js";
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " + className
    }
  );
}
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center min-h-screen bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "full max-w-md bg-white shadow-md rounded-lg p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-center text-gray-800 mb-6", children: "Welcome Back" }),
      status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-green-600 text-center", children: status }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email Address", className: "font-semibold" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "email",
              type: "email",
              name: "email",
              value: data.email,
              className: "w-full mt-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500",
              autoComplete: "username",
              isFocused: true,
              onChange: (e) => setData("email", e.target.value)
            }
          ),
          errors.email && /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2 text-red-600" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password", className: "font-semibold" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "password",
              type: "password",
              name: "password",
              value: data.password,
              className: "w-full mt-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500",
              autoComplete: "current-password",
              onChange: (e) => setData("password", e.target.value)
            }
          ),
          errors.password && /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2 text-red-600" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                name: "remember",
                checked: data.remember,
                onChange: (e) => setData("remember", e.target.checked)
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-gray-600", children: "Remember me" })
          ] }),
          canResetPassword && /* @__PURE__ */ jsx(
            Link,
            {
              href: route("password.request"),
              className: "text-sm text-indigo-600 hover:underline",
              children: "Forgot password?"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500", disabled: processing, children: processing ? "Logging in..." : "Log in" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center text-sm text-gray-600", children: [
        "Need an account?",
        " ",
        /* @__PURE__ */ jsx(Link, { href: "/register", className: "text-indigo-600 hover:underline", children: "Sign up here" })
      ] })
    ] }) })
  ] });
}
export {
  Login as default
};
