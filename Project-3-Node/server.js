const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const server = express();
const port = 8000;

server.set("view engine", "ejs");
server.use("/", express.static(path.join(__dirname, "public")));
server.use(bodyParser.urlencoded());

server.get("/", (req, res) => {
    res.render("index");
});

server.get("/app-calender", (req, res) => {
    res.render("app-calender");
});

server.get("/app-profile", (req, res) => {
    res.render("app-profile");
});

server.get("/calendar-page", (req, res) => {
    res.render("calendar-page");
});

server.get("/chart-chartist", (req, res) => { 
    res.render("chart-chartist");
});

server.get("/chart-chartjs", (req, res) => {
    res.render("chart-chartjs");
});

server.get("/chart-flot", (req, res) => {
    res.render("chart-flot");
});

server.get("/chart-morris", (req, res) => {
    res.render("chart-morris");
});

server.get("/chart-peity", (req, res) => {
    res.render("chart-peity");
});

server.get("/chart-sparkline", (req, res) => {
    res.render("chart-sparkline");
});

server.get("/contacts", (req, res) => {
    res.render("contacts");
})

server.get("/ecom-checkout", (req, res) => {
    res.render("ecom-checkout");
});

server.get("/ecom-customers", (req, res) => {
    res.render("ecom-customers");
});

server.get("/ecom-invoice", (req, res) => {
    res.render("ecom-invoice");
});
server.get("/ecom-product-detail", (req, res) => {
    res.render("ecom-product-detail");
});
server.get("/ecom-product-grid", (req, res) => {
    res.render("ecom-product-grid");
});
server.get("/ecom-product-list", (req, res) => {
    res.render("ecom-product-list");
});
server.get("/ecom-product-order", (req, res) => {
    res.render("ecom-product-order");
});
server.get("/email-compose", (req, res) => {
    res.render("email-compose");
});
server.get("/email-inbox", (req, res) => {
    res.render("email-inbox");
});
server.get("/email-read", (req, res) => {
    res.render("email-read");
});
server.get("/empty-page", (req, res) => {
    res.render("empty-page");
});
server.get("/form-ckeditor", (req, res) => {
    res.render("form-ckeditor");
});
server.get("/form-element", (req, res) => {
    res.render("form-element");
});
server.get("/form-pickers", (req, res) => {
    res.render("form-pickers");
});
server.get("/form-validation", (req, res) => {
    res.render("form-validation");
});
server.get("/form-wizard", (req, res) => {
    res.render("form-wizard");
});
server.get("/index-2", (req, res) => {
    res.render("index-2");
});

server.get("/kanban", (req, res) => {
    res.render("kanban");
});
server.get("/map-jqvmap", (req, res) => {
    res.render("map-jqvmap");
});
server.get("/message", (req, res) => {
    res.render("message");
});
server.get("/page-error-400", (req, res) => {
    res.render("page-error-400");
});
server.get("/page-error-403", (req, res) => {
    res.render("page-error-403");
});
server.get("/page-error-404", (req, res) => {
    res.render("page-error-404");
});
server.get("/page-error-500", (req, res) => {
    res.render("page-error-500");
});
server.get("/page-error-503", (req, res) => {
    res.render("page-error-503");
});
server.get("/page-forgot-password", (req, res) => {
    res.render("page-forgot-password");
});
server.get("/page-lock-screen", (req, res) => {
    res.render("page-lock-screen");
});
server.get("/page-login", (req, res) => {
    res.render("page-login");
});
server.get("/page-register", (req, res) => {
    res.render("page-register");
});
server.get("/post-details", (req, res) => {
    res.render("post-details");
});
server.get("/project-page", (req, res) => {
    res.render("project-page");
});
server.get("/table-bootstrap-basic", (req, res) => {
    res.render("table-bootstrap-basic");
});
server.get("/table-datatable-basic", (req, res) => {
    res.render("table-datatable-basic");
});
server.get("/uc-lightgallery", (req, res) => {
    res.render("uc-lightgallery");
});
server.get("/uc-nestable", (req, res) => {
    res.render("uc-nestable");
});
server.get("/uc-noui-slider", (req, res) => {
    res.render("uc-noui-slider");
});
server.get("/uc-select2", (req, res) => {
    res.render("uc-select2");
});
server.get("/uc-sweetalert", (req, res) => {
    res.render("uc-sweetalert");
});
server.get("/uc-toastr", (req, res) => {
    res.render("uc-toastr");
});
server.get("/ui-accordion", (req, res) => {
    res.render("ui-accordion");
});
server.get("/ui-alert", (req, res) => {
    res.render("ui-alert");
});
server.get("/ui-badge", (req, res) => {
    res.render("ui-badge");
});
server.get("/ui-button-group", (req, res) => {
    res.render("ui-button-group");
});
server.get("/ui-button", (req, res) => {
    res.render("ui-button");
});
server.get("/ui-card", (req, res) => {
    res.render("ui-card");
});
server.get("/ui-carousel", (req, res) => {
    res.render("ui-carousel");
});
server.get("/ui-dropdown", (req, res) => {
    res.render("ui-dropdown");
});
server.get("/ui-grid", (req, res) => {
    res.render("ui-grid");
});
server.get("/ui-list-group", (req, res) => {
    res.render("ui-list-group");
});
server.get("/ui-modal", (req, res) => {
    res.render("ui-modal");
});
server.get("/ui-pagination", (req, res) => {
    res.render("ui-pagination");
});
server.get("/ui-popover", (req, res) => {
    res.render("ui-popover");
});
server.get("/ui-progressbar", (req, res) => {
    res.render("ui-progressbar");
});
server.get("/ui-typography", (req, res) => {
    res.render("ui-typography");
});
server.get("/ui-tab", (req, res) => {
    res.render("ui-tab");
});
server.get("/widget-basic", (req, res) => {
    res.render("widget-basic");
});


server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});