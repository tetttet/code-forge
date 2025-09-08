// for layout folder
import navbar from "./layout/navbar.json";

// for common folder
import products from "./common/products.json";
import customer from "./common/customer.json";
import testimonial from "./common/testimonial.json";
import faq from "./common/faq.json";
import hero from "./common/hero.json";
import article from "./common/article.json";
import coursework from "./common/coursework.json";

// for web folder
import webHero from "./web/web-hero.json";
import webServices from "./web/web-services.json";
import webCTA from "./web/web-cta.json";

const messages = {
  Navbar: navbar,

  // for common folder
  Customer: customer,
  Products: products,
  Article: article,
  FAQ: faq,
  Testimonial: testimonial,
  Coursework: coursework,
  Hero: hero,

  // for web folder
  WebHero: webHero,
  WebServices: webServices,
  WebCTA: webCTA,
};

export default messages;
