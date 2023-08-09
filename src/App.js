import Navbar from "./components/Navbar";
import React from "react";
import News from "./components/News";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact key="general" path="/">
            <News
              pageSize={pageSize}
              country="us"
              apiKey={apiKey}
              category="general"
            />
          </Route>

          <Route exact key="business" path="/business">
            <News
              pageSize={pageSize}
              country="us"
              apiKey={apiKey}
              category="business"
            />
          </Route>

          <Route exact key="entertainment" path="/entertainment">
            <News
              pageSize={pageSize}
              country="us"
              apiKey={apiKey}
              category="entertainment"
            />
          </Route>

          <Route exact key="general" path="general">
            <News
              pageSize={pageSize}
              country="us"
              apiKey={apiKey}
              category="general"
            />
          </Route>

          <Route exact key="sports" path="/sports">
            <News
              pageSize={pageSize}
              country="us"
              apiKey={apiKey}
              category="sports"
            />
          </Route>

          <Route exact key="health" path="/health">
            <News
              pageSize={pageSize}
              country="us"
              apiKey={apiKey}
              category="health"
            />
          </Route>

          <Route exact key="science" path="/science">
            <News
              pageSize={pageSize}
              country="us"
              apiKey={apiKey}
              category="science"
            />
          </Route>

          <Route exact key="technology" path="/technology">
            <News
              pageSize={pageSize}
              country="us"
              apiKey={apiKey}
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
