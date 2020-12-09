const express = require("express");
const path = require("path");

const app = express();

// Set pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Set public
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.render("index", {
    title: "NOMADS | Home",
    categories: ["Backpacks", "Carteras", "Purses", "Coalas"],
    products: [
      {
        img:
          "https://res.cloudinary.com/jguaura/image/upload/q_80/v1607472219/cirrus_q4istq.webp",
        name: "Cirrus",
        price: "250",
      },
      {
        img:
          "https://res.cloudinary.com/jguaura/image/upload/v1607472219/cumulus_vpex6r.webp",
        name: "Cumulus",
        price: "195",
      },
      {
        img:
          "https://res.cloudinary.com/jguaura/image/upload/v1607472221/dbn_doowhj.webp",
        name: "Dance bag nylon",
        price: "200",
      },
      {
        img:
          "https://res.cloudinary.com/jguaura/image/upload/v1607472220/mini-circle_ppdtca.webp",
        name: "Mini circle",
        price: "135",
      },
      {
        img:
          "https://res.cloudinary.com/jguaura/image/upload/v1607472220/gallery_qpftjm.webp",
        name: "Stratus backpack",
        price: "250",
      },
      {
        img:
          "https://res.cloudinary.com/jguaura/image/upload/v1607472222/sbv_mibnc3.webp",
        name: "Studio bag vaqueta",
        price: "195",
      },
      {
        img:
          "https://res.cloudinary.com/jguaura/image/upload/v1607472221/sling_wu2d6s.webp",
        name: "Sling",
        price: "125",
      },
      {
        img:
          "https://res.cloudinary.com/jguaura/image/upload/v1607472222/studio-bag_q0ctsx.webp",
        name: "Studio bag",
        price: "135",
      },
    ],
  });
});

//Product detail route
app.get("/product", (req, res) => {
  res.render("product", {
    tittle: "NOMADS | Commuter Briefcase",
  });
});

//Dashboard route
app.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    title: "Dashboard | Nikky",
    navItems: [
      { name: "Dashboard", icon: "icon-apps---material", active: "active" },
      { name: "Cards", icon: "icon-credit_card---material" },
      { name: "Statistics", icon: "icon-poll---material" },
      { name: "Premium", icon: "icon-bookmark---material" },
      { name: "Profile", icon: "icon-Usuario" },
      { name: "Settings", icon: "icon-Configuracion-Relleno" },
    ],
    gaugeItems: [
      { title: "Utility", date: "01 Apr. 1:30px", percentage: "50%" },
      { title: "Transfered", date: "10 Apr. 1:30pm", percentage: "25%" },
      { title: "Food", date: "15 Apr. 4:30pm", percentage: "15%" },
      { title: "Beauty", date: "15 Apr. 7:30pm", percentage: "10%" },
    ],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  });
});

app.listen(1900, () => {
  console.log("Listening");
});
