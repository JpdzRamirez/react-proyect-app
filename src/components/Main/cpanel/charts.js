import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// Resources
import carouselImageFirst from '../../../assets/img/carousel-1.jpg';
import carouselImageSecond from '../../../assets/img/carousel-2.jpg';
import carouselImageLast from '../../../assets/img/carousel-3.jpg';

function Charts() {
  const chartRef = useRef(null); // Creamos una referencia para el canvas
  const chartInstance = useRef(null); // Guardamos la instancia del gráfico

  useEffect(() => {
    // Obtener el contexto del canvas y crear el gráfico
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke1.addColorStop(1, "rgba(94, 114, 228, 0.2)");
      gradientStroke1.addColorStop(0.2, "rgba(94, 114, 228, 0.0)");
      gradientStroke1.addColorStop(0, "rgba(94, 114, 228, 0)");

      // Si ya existe un gráfico, lo destruimos
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Inicializamos el gráfico de ventas
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Mobile apps",
              tension: 0.4,
              borderWidth: 0,
              pointRadius: 0,
              borderColor: "#5e72e4",
              backgroundColor: gradientStroke1,
              borderWidth: 3,
              fill: true,
              data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
              maxBarThickness: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          interaction: {
            intersect: false,
            mode: "index",
          },
          scales: {
            y: {
              grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
              },
              ticks: {
                display: true,
                padding: 10,
                color: "#fbfbfb",
                font: {
                  size: 11,
                  family: "Open Sans",
                  style: "normal",
                  lineHeight: 2,
                },
              },
            },
            x: {
              grid: {
                drawBorder: false,
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
                borderDash: [5, 5],
              },
              ticks: {
                display: true,
                color: "#ccc",
                padding: 20,
                font: {
                  size: 11,
                  family: "Open Sans",
                  style: "normal",
                  lineHeight: 2,
                },
              },
            },
          },
        },
      });
    }

    // Cleanup: destruir el gráfico al desmontarse
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // El array vacío asegura que el gráfico se inicialice solo una vez después de que el componente se haya montado

  return (
    <div className="row mt-4">
      {/* Chart Sales */}
      <div className="col-lg-7 mb-lg-0 mb-4">
        <div className="card z-index-2 h-100">
          <div className="card-header pb-0 pt-3 bg-transparent">
            <h6 className="text-capitalize">Sales overview</h6>
            <p className="text-sm mb-0">
              <i className="fa fa-arrow-up text-success"></i>
              <span className="font-weight-bold">4% more</span> in 2021
            </p>
          </div>
          <div className="card-body p-3">
            <div className="chart">
              <canvas
                ref={chartRef} // Usamos la referencia aquí
                className="chart-canvas"
                height="300"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
      {/* END Chart Sales */}

      <div className="col-lg-5">
        {/* Carrousel */}
        <div className="card card-carousel overflow-hidden h-100 p-0">
          <div
            id="carouselExampleCaptions"
            className="carousel slide h-100"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner border-radius-lg h-100">
              <div className="carousel-item h-100 active"
                style={{
                    backgroundImage: `url(${carouselImageFirst})`,
                    backgroundSize: "cover"
                  }}>
                <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                  <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                  <i className="fa-solid fa-camera"></i>
                  </div>
                  <h5 className="text-white mb-1">Get started with Argon</h5>
                  <p>
                    There’s nothing I really wanted to do in life that I wasn’t
                    able to get good at.
                  </p>
                </div>
              </div>
              <div className="carousel-item h-100" 
                style={{
                    backgroundImage: `url(${carouselImageSecond})`,
                    backgroundSize: "cover"
                  }}>
                <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                  <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                  <i className="fa-sharp fa-solid fa-lightbulb"></i>
                  </div>
                  <h5 className="text-white mb-1">
                    Faster way to create web pages
                  </h5>
                  <p>
                    That’s my skill. I’m not really specifically talented at
                    anything except for the ability to learn.
                  </p>
                </div>
              </div>
              <div className="carousel-item h-100"
                style={{
                    backgroundImage: `url(${carouselImageLast})`,
                    backgroundSize: "cover"
                  }}>
                <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                  <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                  <i className="fa-sharp fa-solid fa-trophy"></i>
                  </div>
                  <h5 className="text-white mb-1">
                  Share with us your design tips!
                  </h5>
                  <p>
                    Don’t be afraid to be wrong because you can’t learn anything
                    from a compliment.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev w-5 me-3"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previo</span>
            </button>
            <button
              className="carousel-control-next w-5 me-3"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
        {/* END Carrousel */}
      </div>
    </div>
  );
}

export default Charts;
