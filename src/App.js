import { createContext, useEffect, useState } from "react";
import { useHistory, useLocation, Switch, Route, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Page1, Page2, Page3 } from "./pages";

export const RecentHistoryContext = createContext([]);
export const MaxHistory = 5;

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const [recentPaths, setRecentPaths] = useState([location.pathname]);

  // Assign a listener to 'history' so that we can track recently visited pages
  useEffect(() => {
    history.listen((route) => setRecentPaths((recentPaths) => [route.pathname, ...recentPaths].slice(0, MaxHistory)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <RecentHistoryContext.Provider value={recentPaths}>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <main>
            <Route exact path="/page-1" component={Page1} />
            <Route exact path="/page-2" component={Page2} />
            <Route exact path="/page-3" component={Page3} />
            <Redirect to="/page-1" />
          </main>
        </Switch>
      </AnimatePresence>
    </RecentHistoryContext.Provider>
  );
};

export default App;
