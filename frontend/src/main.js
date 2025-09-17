import "./style.css";

async function loadRooms() {
  try {
    const res = await fetch("http://localhost:5000/rooms");
    const rooms = await res.json();

    const container = document.getElementById("app");
    container.innerHTML = "<h1>MHC Virtual Tour</h1>";

    rooms.forEach((room) => {
      const section = document.createElement("div");
      section.classList.add("room");

      section.innerHTML = `
        <h2>${room.name}</h2>
        <p>${room.description}</p>
        <div id="panorama-${room.id}" class="panorama"></div>
      `;

      container.appendChild(section);

      // render panorama (pannellum global dari CDN)
      pannellum.viewer(`panorama-${room.id}`, {
        type: "equirectangular",
        panorama: room.panorama_url,
        autoLoad: true,
        pitch: 10,
        yaw: 180,
        hfov: 110,
      });
    });
  } catch (err) {
    console.error("Gagal ambil rooms:", err);
  }
}

loadRooms();
