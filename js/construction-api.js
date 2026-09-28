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

        let job = document.querySelector('input').value

    fetch(`https://paycrunch.co/api/v1/jobs/${job}.json`)
        .then(res => res.json())
        .then(data => {
        console.log(data)
    })
 }
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


    //RESTAURANT API -  vhttps://www.givefood.org.uk/api/2/foodbanks/
    // Construction API - https://paycrunch.co/api/v1/jobs.json <<< search for job salaries. (https://paycrunch.co/api.html#jobs)
    // MedSpa API - https://verifiedsupplementdata.com/api possibly OR 
