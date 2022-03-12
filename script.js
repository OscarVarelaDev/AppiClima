
let clima={
  
   appiClima:function(ciudad) {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    ciudad +
      "&units=metric&lang=es&appid=c488c6ce8e1245303234c98d1c24ce72"
  )
    .then((response) => response.json())
    .then((data) => this.mostrarInformacion(data));
   
  },
  mostrarInformacion:function (data){
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    console.log(name,description,temp,humidity,icon,speed)
    document.querySelector(".ciudad").innerText="Clima en " + name;
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".descripcion").innerText = description;
    document.querySelector(".temperatura").innerText = temp + "°C";
    document.querySelector(".humedad").innerText =
      "Humedad: " + humidity + "%";
    document.querySelector(".viento").innerText =
      "Viento: " + speed + " km/h";
      document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1920x900/?" + name + "')";
},
    busqueda:function(){
      this.appiClima(document.querySelector(".buscador-barra").value)

},
};


document.getElementById("boton").addEventListener("click", function () {
  clima.busqueda();
});

document
  .querySelector(".buscador-barra")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      clima.busqueda();
    }
  });

clima.appiClima("Mexico");


