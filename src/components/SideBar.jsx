import React, { Component } from "react";

class SideBar extends Component {
  state = {};
  handleChange = id => {
    console.log(id);
    return (<h1>new</h1>);
  };

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
                <span data-feather="home" />
                <button type="button" class="btn btn-secondary" onClick={()=>this.handleChange({id:1})}>
                  Orders
                </button>
                <span class="sr-only" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
