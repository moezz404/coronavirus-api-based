var statButton = document.getElementsByClassName("statButton")[0];
var countryInput = document.getElementsByClassName("countryInput")[0];
var results = document.getElementsByClassName("results")[0];

results.style.display = "none";

statButton.addEventListener("click", (e) => {
    e.preventDefault();

    fetch("https://api.covid19api.com/summary")
        .then((request)=>{
            return request.json();
        })
        .then((data)=>{
            results.style.display = "";
            for(var i = 0; i < 247 ; i++){
                if(data.Countries[i].Country.toLowerCase() === countryInput.value.toLowerCase()){
                    results.innerHTML = `<h2>${data.Countries[i].Country} Results</h2>
                                         <p>New Confirmed: <span>${data.Countries[i].NewConfirmed}</span></p>
                                         <p>New Deaths: <span>${data.Countries[i].NewDeaths}</span></p>
                                         <p>New Recovered: <span>${data.Countries[i].NewRecovered}</span></p>
                                         <p>Total Case Confirmed: <span>${data.Countries[i].TotalConfirmed}</span></p>
                                         <p>Total Deaths: <span>${data.Countries[i].TotalDeaths}</span></p>
                                         <p>Total Recovered: <span>${data.Countries[i].TotalRecovered}</span></p>`;
                }
            }
            if(countryInput.value.toLowerCase() === "Global".toLowerCase()){
                results.innerHTML = `<h2>Global Results</h2>
                                    <p>Total Case Confirmed: <span>${data.Global.TotalConfirmed}</span></p>
                                    <p>Total Deaths: <span>${data.Global.TotalDeaths}</span></p>
                                    <p>Total Recovered: <span>${data.Global.TotalRecovered}</span></p>`;
            }
        }); 
    
    
});
