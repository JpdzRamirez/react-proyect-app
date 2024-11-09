import React from "react";


function Footer() {
  return (
        <footer className="footer pt-3  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                © 2024
                made with <i className="fa fa-heart"></i> by
                <a href="https://github.com/JpdzRamirez" className="font-weight-bold" target="_blank">JPDZSoftware.com </a>
                for a better web.
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a href="https://github.com/JpdzRamirez" className="nav-link text-muted" target="_blank">JPDZSoftware Github</a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/JpdzRamirez?tab=repositories" className="nav-link text-muted" target="_blank">Repository</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

  );
}

export default Footer;