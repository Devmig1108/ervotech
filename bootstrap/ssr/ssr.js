import * as jsxRuntime from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const appName = "Ervotech";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/About.jsx": () => import("./assets/About-c10d08f3.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-f683640c.js"), "./Pages/Admin/Posts/Create.jsx": () => import("./assets/Create-ed09940d.js"), "./Pages/Admin/Posts/Edit.jsx": () => import("./assets/Edit-78d92587.js"), "./Pages/Admin/Posts/Index.jsx": () => import("./assets/Index-683025dd.js"), "./Pages/Auth/ConfirmPassword.jsx": () => import("./assets/ConfirmPassword-d3ba4cd5.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-52fcdd0e.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-b569374d.js"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-eba165a7.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-32cb13f2.js"), "./Pages/Auth/VerifyEmail.jsx": () => import("./assets/VerifyEmail-03fc2060.js"), "./Pages/Blog/Index.jsx": () => import("./assets/Index-2b547306.js"), "./Pages/Blog/Show.jsx": () => import("./assets/Show-90215d73.js"), "./Pages/BlogIndex.jsx": () => import("./assets/BlogIndex-bf08d044.js"), "./Pages/BlogShow.jsx": () => import("./assets/BlogShow-91c51a82.js"), "./Pages/Case.jsx": () => import("./assets/Case-1892e813.js"), "./Pages/Consulting.jsx": () => import("./assets/Consulting-8d329c4a.js"), "./Pages/Contact.jsx": () => import("./assets/Contact-d50cd902.js"), "./Pages/Dashboard.jsx": () => import("./assets/Dashboard-95bab150.js"), "./Pages/DigitalCard.jsx": () => import("./assets/DigitalCard-1fc7415b.js"), "./Pages/FAQ.jsx": () => import("./assets/FAQ-37ee837d.js"), "./Pages/Home.jsx": () => import("./assets/Home-1024f2d3.js"), "./Pages/Portfolio.jsx": () => import("./assets/Portfolio-5e094d77.js"), "./Pages/Profile/Edit.jsx": () => import("./assets/Edit-b06e9a15.js"), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => import("./assets/DeleteUserForm-79bfab6b.js"), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => import("./assets/UpdatePasswordForm-6217b779.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => import("./assets/UpdateProfileInformationForm-65c71aa1.js"), "./Pages/Services.jsx": () => import("./assets/Services-a3a560ba.js"), "./Pages/Sitemap.jsx": () => import("./assets/Sitemap-07648412.js"), "./Pages/WebDevelopmentElPaso.jsx": () => import("./assets/WebDevelopmentElPaso-b0548088.js"), "./Pages/Welcome.jsx": () => import("./assets/Welcome-46f2276f.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
export {
  Fragment as F,
  jsx as a,
  jsxs as j
};
