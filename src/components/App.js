import TranslateApp from "./TranslateApp";
import ColorChooser from "./ColorChooserApp";
import SearchApp from "./SearchApp";
import AccordionApp from "./AccordionApp";

const routes = {
  "/": TranslateApp,
  "/dropdown": ColorChooser,
  "/search": SearchApp,
  "/accordion": AccordionApp,
};

const App = () => {
  return <>{routes[window.location.pathname]()}</>;
};

export default App;
