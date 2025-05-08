import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/custom.css";

// Add Font Awesome CSS
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faLeaf, faUtensils, faHiking, faSpa, 
  faUserFriends, faVectorSquare, faBed, 
  faArrowRight, faCheck, faBars, faMapMarkerAlt, 
  faPhoneAlt, faEnvelope, faSearch, faCoffee,
  faWifi, faPhone
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebookF, faInstagram, faTwitter 
} from "@fortawesome/free-brands-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add(
  faLeaf, faUtensils, faHiking, faSpa, 
  faUserFriends, faVectorSquare, faBed, 
  faArrowRight, faCheck, faBars, faMapMarkerAlt,
  faPhoneAlt, faEnvelope, faSearch, faCoffee,
  faWifi, faPhone,
  faFacebookF, faInstagram, faTwitter,
  faStar, faStarHalfAlt
);

createRoot(document.getElementById("root")!).render(<App />);
