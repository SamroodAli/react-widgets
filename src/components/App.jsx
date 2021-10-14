import TranslateApp from "./TranslateApp";
import ColorChooser from "./ColorChooserApp";
import SearchApp from "./SearchApp";
import AccordionApp from "./AccordionApp";
import Languages from "./Language";
import Header from "./Header";
import Route from "./route";

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <TranslateApp />
      </Route>
      <Route path="/dropdown">
        <ColorChooser />
      </Route>
      <Route path="/search">
        <SearchApp />
      </Route>
      <Route path="/accordion">
        <AccordionApp />
      </Route>
      <Route path="/languages">
        <Languages />
      </Route>
    </div>
  );
};

export default App;
