import React, { Component } from "react";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home" />
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home" />
                  Orders <span class="sr-only" />
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home" />
                  Products <span class="sr-only" />
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home" />
                  Customers <span class="sr-only" />
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home" />
                  Products <span class="sr-only" />
                </a>
              </li>
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a class="d-flex align-items-center text-muted" href="#">
                  <span data-feather="plus-circle" />
                </a>
              </h6>
              <li className="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home" />
                  Settings <span class="sr-only" />
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home" />
                  Orders <span class="sr-only" />
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home" />
                  Settings <span class="sr-only" />
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home" />
                  Orders <span class="sr-only" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
   
   );
  }
}

export default SideBar;
