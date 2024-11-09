import React from "react";

//Assets Img
const images = require.context('../../assets/img', false, /\.(png|jpe?g|gif)$/);


function Aside() {
  return (
    <div>
          <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
            <div className="sidenav-header">
            <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
            <a className="navbar-brand m-0 d-flex" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
                <img src={images('./logo-ct-dark.png')} width="26px" height="26px" className="navbar-brand-img h-100" alt="main_logo"/>
                <span className="ms-1 font-weight-bold aside-title">JpdzSoftware Template Dashboard REACT</span>                              
            </a>
            </div>
            <hr className="horizontal dark mt-0" />
            <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" href="../pages/dashboard.html">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">                    
                    </div>
                    <i className="fa-solid fa-grid-horizontal"></i>
                    <span className="nav-link-text ms-1">Dashboard</span>
                    
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link " href="../pages/tables.html">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">                    
                    </div>
                    <i className="fa-sharp fa-regular fa-table-picnic"></i>
                    <span className="nav-link-text ms-1">Mesas</span>
                </a>
                </li>
                <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder ">Account pages</h6>
                </li>
                <li className="nav-item">
                <a className="nav-link " href="../pages/profile.html">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">                    
                    </div>
                    <i className="fa-sharp fa-solid fa-user"></i>
                    <span className="nav-link-text ms-1">Profile</span>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link " href="../pages/sign-in.html">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    </div>
                    <i className="fa-solid fa-arrow-right-to-arc"></i>
                    <span className="nav-link-text ms-1">Sign In</span>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link " href="../pages/sign-up.html">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">                    
                    </div>
                    <i className="fa-sharp fa-solid fa-user-plus"></i>
                    <span className="nav-link-text ms-1">Sign Up</span>
                </a>
                </li>
            </ul>
            </div>
            <div className="sidenav-footer mx-3 ">
            <div className="card card-plain shadow-none" id="sidenavCard">
                <img className="w-50 mx-auto" style={{
                    borderRadius: "3px",
                    filter: "invert(1)"
                }} src={images('./jpdzSoftwareLogo.png')} alt="sidebar_illustration"/>
                <div className="card-body text-center p-3 w-100 pt-0">
                <div className="docs-info">
                    <h6 className="mb-0">¡Conactame para más diseños!</h6>                    
                </div>
                </div>
            </div>                        
            </div>
        </aside>
    </div>
  );
}

export default Aside;