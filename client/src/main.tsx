import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add Font Awesome CSS
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faLeaf, faUtensils, faHiking, faSpa, 
  faUserFriends, faVectorSquare, faBed, 
  faArrowRight, faCheck, faBars, faMapMarkerAlt, 
  faPhoneAlt, faEnvelope, faSearch, faCoffee,
  faWifi, faPhone, faUsers, faCar, faTrain,
  faStar, faStarHalfAlt, faBus
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebookF, faInstagram, faTwitter 
} from "@fortawesome/free-brands-svg-icons";

// Add icons to the library
library.add(
  faLeaf, faUtensils, faHiking, faSpa, 
  faUserFriends, faVectorSquare, faBed, 
  faArrowRight, faCheck, faBars, faMapMarkerAlt,
  faPhoneAlt, faEnvelope, faSearch, faCoffee,
  faWifi, faPhone, faUsers, faCar, faTrain,
  faFacebookF, faInstagram, faTwitter,
  faStar, faStarHalfAlt, faBus
);

createRoot(document.getElementById("root")!).render(<App />);
