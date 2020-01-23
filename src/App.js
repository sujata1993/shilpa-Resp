import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubList from './View/subPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="container" >
      <div style={{ background: "blue", width: "100%", height: "52%" }}><img src="" /></div>
      <Router>
        <div className="row">
          <div className="col-sm-2">
            <div style={{ background: "whitesmoke" }}>
              <button type="button" class="btn btn-success">Add Candidates</button>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  Candidates
              </li>
                <li className="nav-item">
                  Work Pass Checks
              </li>
                <li className="nav-item">
                  Organisations
              </li>
                <li className="nav-item">
                  Payments
              </li>
              </ul></div>
          </div>
          <div className="col-sm-4">
            <div style={{ background: "whitesmoke", width: "100%", height: "42%" }}>
              <span>Work Pass Administration</span>
              <span>Guidant Global</span>
            </div>
            <TableHeader />
            <div style={{ background: "whitesmoke" }}>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <Link to="/sublist">British Airways</Link>
                </li>
                <li className="nav-item">
                  <Link to="/AA">AA</Link>
                </li>

              </ul>
            </div>
            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-6">
            <div style={{ background: "whitesmoke" }}>
              <Switch>
                <Route path="/sublist">
                  <SubList />
                </Route>
                <Route path="/AA">
                  <AA />
                </Route>
              </Switch>
            </div>
          </div>
        </div>

      </Router>
    </div>
  );
}

function AA() {
  return (
    <div>AA</div>
  );
}
function TableHeader() {
  return (
    <div>
      <div class="btn-group btn-group-sm" style={{ background: "blue" }}>
        <p>Company</p>
        <button type="button" class="btn btn-primary">Add</button>
        <button type="button" class="btn btn-primary">Remove</button>
        <p>Persona</p>
        <button type="button" class="btn btn-primary">New</button>
        <button type="button" class="btn btn-primary">Remove</button>
        <p>Checks</p>
      </div>
    </div>
  );
}
export default App;
