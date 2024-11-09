import React from "react";

function Cards() {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">
                      Dinero en Caja
                    </p>
                    <h5 className="font-weight-bolder">$53,000</h5>
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">
                        +55%
                      </span>
                      Desde ayer
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                  <i className="fa-regular fa-money-bill-trend-up"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">
                      Ingresos brutos
                    </p>
                    <h5 className="font-weight-bolder">2,300</h5>
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">
                        +3%
                      </span>
                      ultima semana
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                  <i className="fa-regular fa-money-bill-trend-up"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">
                      Comidas preparadas
                    </p>
                    <h5 className="font-weight-bolder">+3,462</h5>
                    <p className="mb-0">
                      <span className="text-danger text-sm font-weight-bolder">
                        -2%
                      </span>
                      durante el ultimo mes
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                    <i className="fa-sharp fa-solid fa-turkey"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">
                      Ventas
                    </p>
                    <h5 className="font-weight-bolder">$103,430</h5>
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">
                        +5%
                      </span>{" "}
                      ultimo mes
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                  <i className="fa-duotone fa-solid fa-wallet"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
