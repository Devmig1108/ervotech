import { a as jsx, j as jsxs } from "../ssr.js";
import { useState } from "react";
import axios from "axios";
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    zip_code: ""
  });
  const [modal, setModal] = useState({ isOpen: false, type: "", message: "" });
  const [hasStarted, setHasStarted] = useState(false);
  const trackInteraction = (eventName, label) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, {
        "event_category": "Form Funnel",
        "event_label": label
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!hasStarted && name !== "zip_code") {
      setHasStarted(true);
      trackInteraction("form_start", "Agency Lead Form");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.zip_code.length > 0) {
      console.warn("Bot detected. Preventing submission.");
      setModal({
        isOpen: true,
        type: "success",
        message: "Message sent successfully!"
      });
      setFormData({ name: "", email: "", message: "", zip_code: "" });
      return;
    }
    axios.post("/contact", formData).then((response) => {
      setModal({
        isOpen: true,
        type: "success",
        message: "Message sent successfully!"
      });
      trackInteraction("generate_lead", "Agency Lead Form Submitted");
      setFormData({ name: "", email: "", message: "", zip_code: "" });
      setHasStarted(false);
      setTimeout(() => setModal({ isOpen: false, type: "", message: "" }), 1e4);
    }).catch((error) => {
      setModal({
        isOpen: true,
        type: "error",
        message: "Failed to send message. Please try again."
      });
    });
  };
  return /* @__PURE__ */ jsx("section", { className: "contact", id: "contact", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { children: "Get in Touch" }),
    /* @__PURE__ */ jsxs("form", { className: "contact-form", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "name",
          placeholder: "Your Name",
          value: formData.name,
          onChange: handleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          name: "email",
          placeholder: "Your Email",
          value: formData.email,
          onChange: handleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsxs("div", { style: { opacity: 0, position: "absolute", top: 0, left: 0, height: 0, width: 0, zIndex: -1 }, children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "zip_code", children: "Leave this field blank" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "zip_code",
            type: "text",
            name: "zip_code",
            value: formData.zip_code,
            onChange: handleChange,
            autoComplete: "off",
            tabIndex: "-1"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          name: "message",
          placeholder: "Your Message",
          rows: "5",
          value: formData.message,
          onChange: handleChange,
          minLength: "10",
          required: true
        }
      ),
      /* @__PURE__ */ jsx("button", { type: "submit", children: "Send Message" })
    ] }),
    modal.isOpen && /* @__PURE__ */ jsx("div", { className: "modal top-right", children: /* @__PURE__ */ jsxs("div", { className: `modal-content ${modal.type}`, children: [
      /* @__PURE__ */ jsx("p", { children: modal.message }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "close-btn",
          onClick: () => setModal({ isOpen: false }),
          children: "×"
        }
      )
    ] }) })
  ] }) });
}
export {
  ContactForm as C
};
