//Donate Now Checkout:
//fetching data from AirTable
fetch(
  "https://api.airtable.com/v0/appbtXCIxHEbuyqI7/Potential%20Venues?api_key=keyvU0uKE41uLGqVX"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // Project Card #1
    document.getElementById(
      "p1name"
    ).innerHTML = `${data.records[0].fields.Name}`;
    document
      .getElementById("p1img")
      .setAttribute("src", `${data.records[0].fields.Photos[0].url}`);

    document.getElementById(
      "p1date"
    ).innerHTML = `${data.records[0].fields.Date}`;

    document.getElementById("p1cost").innerHTML =
      `$` + `${data.records[0].fields.Cost}`;

    // Project Card #2
    document.getElementById(
      "p2name"
    ).innerHTML = `${data.records[1].fields.Name}`;
    document
      .getElementById("p2img")
      .setAttribute("src", `${data.records[1].fields.Photos[0].url}`);

    document.getElementById(
      "p2date"
    ).innerHTML = `${data.records[1].fields.Date}`;

    document.getElementById("p2cost").innerHTML =
      `$` + `${data.records[1].fields.Cost}`;
    // Project Card #3
    document.getElementById(
      "p3name"
    ).innerHTML = `${data.records[2].fields.Name}`;
    document
      .getElementById("p3img")
      .setAttribute("src", `${data.records[2].fields.Photos[0].url}`);

    document.getElementById(
      "p3date"
    ).innerHTML = `${data.records[2].fields.Date}`;

    document.getElementById("p3cost").innerHTML =
      `$` + `${data.records[2].fields.Cost}`;
    // Project Card #4
    document.getElementById(
      "p4name"
    ).innerHTML = `${data.records[3].fields.Name}`;
    document
      .getElementById("p4img")
      .setAttribute("src", `${data.records[3].fields.Photos[0].url}`);

    document.getElementById(
      "p4date"
    ).innerHTML = `${data.records[3].fields.Date}`;

    document.getElementById("p4cost").innerHTML =
      `$` + `${data.records[3].fields.Cost}`;
    // Project Card #5
    document.getElementById(
      "p5name"
    ).innerHTML = `${data.records[4].fields.Name}`;
    document
      .getElementById("p5img")
      .setAttribute("src", `${data.records[4].fields.Photos[0].url}`);

    document.getElementById(
      "p5date"
    ).innerHTML = `${data.records[4].fields.Date}`;

    document.getElementById("p5cost").innerHTML =
      `$` + `${data.records[4].fields.Cost}`;
    // Project Card #6
    document.getElementById(
      "p6name"
    ).innerHTML = `${data.records[5].fields.Name}`;
    document
      .getElementById("p6img")
      .setAttribute("src", `${data.records[5].fields.Photos[0].url}`);

    document.getElementById(
      "p6date"
    ).innerHTML = `${data.records[5].fields.Date}`;

    document.getElementById("p6cost").innerHTML =
      `$` + `${data.records[5].fields.Cost}`;
  });
