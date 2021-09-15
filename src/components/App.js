import TranslateApp from "./TranslateApp";
import ColorChooser from "./ColorChooserApp";
import SearchApp from "./SearchApp";
import AccordionApp from "./AccordionApp";
import Route from "./route";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
