/* BUILD AND CONSTRUCTION API POSSIBLES
BUILD DATA - curl -H 'X-API-Key: nb_live_IMBjPJS_JfOQZuRUWilQs_hLErkxpCR8_zLRwohS' \
  'https://api.builddata.ca/permit?municipality=toronto&limit=5' KEY=nb_live_IMBjPJS_JfOQZuRUWilQs_hLErkxpCR8_zLRwohS
  Get New Permit Leads - curl -H 'X-API-Key: nb_live_IMBjPJS_JfOQZuRUWilQs_hLErkxpCR8_zLRwohS' \
  'https://api.builddata.ca/permit?municipality=toronto&limit=5'
  USE - using newly issued building/renovation permits as a source of potential customers.*/

//   NEEDS FOR PROJECT
// Input for Date Range - Maybe Month
// Output places for for each thing to pull (status, address, description, current_use)

// const res = fetch("https://api.builddata.ca/permit?municipality=toronto&permit_type=renovation&issued_after=2026-07-01&sort_by=date&sort_order=desc&limit=200", {
//   headers: {
//     "X-API-Key": "nb_live_IMBjPJS_JfOQZuRUWilQs_hLErkxpCR8_zLRwohS",
//   },
// });
// const data = res.json();
// console.log(data);

// fetch = ('X-API-Key: nb_live_la5NILWdB34jEUfL4sbPgqqiPUN7hTuynhpygqTZ' \
//   'https://api.builddata.ca/permit?municipality=toronto&limit=5'


document.querySelector('button').addEventListener('click', findBathroom )
function findBathroom() {
        // const url = "https://cors.io/?url=https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=en&format=json"
    let city = document.querySelector('input').value

    fetch(`https://cors.io/?url=https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=en&format=json`)
        .then(res => res.json())
        .then((data) => {

        const dataReform = JSON.parse(data.body);
        console.log(dataReform)
        // console.log(data)

            for(let i = 0; i < dataReform.length ; i++){

            let lat = dataReform[i].results.latitude
            console.log(lat)
    
            const lon = dataReform[i].results.longitude



            }






    })
 }

/* https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json

        // // headers: {
        // //      "X-API-Key": `nb_live_IMBjPJS_JfOQZuRUWilQs_hLErkxpCR8_zLRwohS`,
        // // }

        // .then((res) => {
        //     // if(!res.ok) {
        //     //     throw new Error(`http ${res.status}`);
        //     // }
        //     // return res.json();
        // })
    
        // .then((data) => {
        // console.log(data)
        // })
        */
