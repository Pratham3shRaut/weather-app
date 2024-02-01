const apiKey = "047699a9eaccd3c9ce559537d9245268";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  console.log("Request URL:", url); // Log the URL to verify it's correctly formed

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weatherInfo").innerHTML = "City not found";
    } else {
      const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Description: ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherInfo").innerHTML = weatherInfo;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("weatherInfo").innerHTML =
      "Error fetching data. Please check the console for details.";
  }
}

particlesJS("particles-js", {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3.0000000000000004,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 250.00000000000003,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
