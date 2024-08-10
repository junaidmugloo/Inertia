import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { useForm, Link, createInertiaApp } from "@inertiajs/react";
import _ from "lodash";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.min.js";
import { hydrateRoot } from "react-dom/client";
function About({ name, age }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    name,
    " ",
    age
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
function Home({ dataa, error }) {
  const { data: formData, setData, post, errors, processing } = useForm({
    body: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post("/posts", {
      onSuccess: () => {
        setData("body", "");
      },
      onError: (error2) => {
        console.log(error2);
      }
    });
  };
  const { delete: deleteItem } = useForm();
  const handleDelete = (id, e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this post?")) {
      deleteItem(`/posts/${id}`, {
        onSuccess: () => {
        },
        onError: (error2) => {
          console.log("Deletion error:", error2);
        }
      });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "container-fluid", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "modal fade",
        id: "createPostModal",
        tabIndex: "-1",
        "aria-labelledby": "createPostModalLabel",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsx("div", { className: "modal-dialog", children: /* @__PURE__ */ jsxs("div", { className: "modal-content", children: [
          /* @__PURE__ */ jsxs("div", { className: "modal-header", children: [
            /* @__PURE__ */ jsx("h5", { className: "modal-title", id: "createPostModalLabel", children: "Update Post" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "btn-close",
                "data-bs-dismiss": "modal",
                "aria-label": "Close"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsxs(
            "form",
            {
              children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "postBody", className: "form-label", children: "Post Content" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "postBody",
                      className: "form-control",
                      placeholder: "Enter post content"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-primary", children: "Update" })
              ]
            }
          ) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("div", { className: "card mt-5 p-0", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "row", children: [
        /* @__PURE__ */ jsxs("div", { className: "form-group col-10", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: formData.body,
              onChange: (e) => setData("body", e.target.value),
              className: "form-control",
              placeholder: "Enter Description"
            }
          ),
          errors.body && /* @__PURE__ */ jsx("div", { className: "text-danger", children: errors.body })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "form-group col-2", children: /* @__PURE__ */ jsx("button", { className: "btn btn-success", disabled: processing, children: "Submit" }) })
      ] }),
      !error ? /* @__PURE__ */ jsxs("table", { className: "table table-striped", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "ID" }),
          /* @__PURE__ */ jsx("th", { children: "Name" }),
          /* @__PURE__ */ jsx("th", { children: "Description" }),
          /* @__PURE__ */ jsx("th", { colSpan: 2, children: "Options" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: dataa.map((item) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: item.id }),
          /* @__PURE__ */ jsx("td", { children: "Junaid" }),
          /* @__PURE__ */ jsx("td", { children: item.body }),
          /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
            "button",
            {
              "data-bs-toggle": "modal",
              "data-bs-target": "#createPostModal",
              className: "btn btn-warning btn-sm",
              children: "Edit"
            }
          ) }),
          /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("form", { onSubmit: (e) => handleDelete(item.id, e), children: [
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "_method", value: "delete" }),
            /* @__PURE__ */ jsx("button", { className: "btn btn-danger btn-sm", type: "submit", children: "Delete" })
          ] }) })
        ] }, item.id)) })
      ] }) : /* @__PURE__ */ jsx("h4", { className: "text-center text-danger", children: " No data found" })
    ] }) })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
window._ = _;
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const bootstrap_min = "";
function Nav({ children }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("nav", { className: "fixed-top navbar navbar-expand-lg bg-body-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container-fluid", children: [
      /* @__PURE__ */ jsx(Link, { className: "navbar-brand", href: "/posts", children: "Inertia" }),
      /* @__PURE__ */ jsx("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation", children: /* @__PURE__ */ jsx("span", { className: "navbar-toggler-icon" }) }),
      /* @__PURE__ */ jsxs("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent", children: [
        /* @__PURE__ */ jsxs("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0", children: [
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { className: "nav-link active", "aria-current": "page", href: "/posts", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { className: "nav-link", href: "/about", children: "About" }) }),
          /* @__PURE__ */ jsxs("li", { className: "nav-item dropdown", children: [
            /* @__PURE__ */ jsx(Link, { className: "nav-link dropdown-toggle", href: "#", role: "button", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: "Dropdown" }),
            /* @__PURE__ */ jsxs("ul", { className: "dropdown-menu", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "dropdown-item", href: "#", children: "Action" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "dropdown-item", href: "#", children: "Another action" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "dropdown-item", href: "#", children: "Something else here" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { className: "nav-link disabled", "aria-disabled": "true", children: "Disabled" }) })
        ] }),
        /* @__PURE__ */ jsxs("form", { className: "d-flex", role: "search", children: [
          /* @__PURE__ */ jsx("input", { className: "form-control me-2", type: "search", placeholder: "Search", "aria-label": "Search" }),
          /* @__PURE__ */ jsx("button", { className: "btn btn-outline-success", type: "submit", children: "Search" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("main", { children })
  ] });
}
createInertiaApp({
  resolve: (name) => {
    const pages = /* @__PURE__ */ Object.assign({ "./Pages/About.jsx": __vite_glob_0_0, "./Pages/Home.jsx": __vite_glob_0_1 });
    let page = pages[`./Pages/${name}.jsx`];
    page.default.layout = page.default.layout || ((page2) => /* @__PURE__ */ jsx(Nav, { children: page2 }));
    return page;
  },
  setup({ el, App, props }) {
    hydrateRoot(el, /* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    // The delay after which the progress bar will appear, in milliseconds...
    delay: 250,
    // The color of the progress bar...
    color: "lightgreen",
    // Whether to include the default NProgress styles...
    includeCSS: true,
    // Whether the NProgress spinner will be shown...
    showSpinner: false
  }
  // ...
});
