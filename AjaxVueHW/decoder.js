var vehicleArray = [];
var times = 0;
var car1;


window.addEventListener('load', () => {
    let vinForm = $('#infoForm');


    vinForm.submit((e) => {
        e.preventDefault();
        console.log(e);
        let vin = (e.target[0].value);

        readVin(vin, (e.target[1].value));

    });

    function readVin(vin, name) {
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/" + vin + "?format=json").
            then(
                response => response.json()).
            then(function (car) {
                console.log(car.Results[0])
                //let infoArray = car.Results[0];

                //console.log(infoArray);

                //let name = (e.target[1].value);
                var make = car.Results[0].Make;
                var model = car.Results[0].Model;
                var year = car.Results[0].ModelYear;
                var DisplacementCC = car.Results[0].DisplacementCC;
                var DisplacementCI = car.Results[0].DisplacementCI;
                var DisplacementL = car.Results[0].DisplacementL;
                var EngineCylinders = car.Results[0].EngineCylinders;
                var EngineHP = car.Results[0].EngineHP;


                $("#nickname").text(name);
                $("#make1").text(make);
                $("#model1").text(model);
                $("#year1").text(year);
                $("#DisplacementCC").text(DisplacementCC);
                $("#DisplacementCI").text(DisplacementCI);
                $("#DisplacementL").text(DisplacementL);
                $("#EngineCylinders").text(EngineCylinders);
                $("#EngineHP").text(EngineHP);


                car1 = new Vehicle(vin, name, make, model, year, DisplacementCC, DisplacementCI,
                    DisplacementL, EngineCylinders, EngineHP);

            });
    }

});

function AddVehicleToArray(car1) {
    //test
    alert("It works");

    vehicleArray.push(car1);

    //test
    console.log(vehicleArray[times].name);



    //adding name to compare table
    var NameEL = document.createElement("th");
    NameEL.id = "name1";       // Create a <li> node
    var nameText = document.createTextNode(car1.name);
    NameEL.appendChild(nameText);
    document.getElementById("names").appendChild(NameEL);

    //Adding year to compare table
    var yearEL = document.createElement("td");
    yearEL.id = "year";         // Create a <li> node
    var yeartext = document.createTextNode(car1.year);
    yearEL.appendChild(yeartext);
    document.getElementById("years").appendChild(yearEL);

    //Adding make to compare table
    var node = document.createElement("td");
    node.id = "make";         // Create a <li> node
    var textnode = document.createTextNode(car1.make);
    node.appendChild(textnode);
    document.getElementById("makes").appendChild(node);

    //Adding model to compare table
    var modelEL = document.createElement("td");
    modelEL.id = "model";         // Create a <li> node
    var modeltext = document.createTextNode(car1.model);
    modelEL.appendChild(modeltext);
    document.getElementById("models").appendChild(modelEL);

    //Add dispcc to compare table
    var dispccEL = document.createElement("td");
    dispccEL.id = "discc";         // Create a <li> node
    var dispcctext = document.createTextNode(car1.DisplacementCC);
    dispccEL.appendChild(dispcctext);
    document.getElementById("disCC").appendChild(dispccEL);

    //Add dispci to compare table
    var dispciEL = document.createElement("td");
    dispciEL.id = "disci";         // Create a <li> node
    var dispcitext = document.createTextNode(car1.DisplacementCI);
    dispciEL.appendChild(dispcitext);
    document.getElementById("disCI").appendChild(dispciEL);

    //Add dispL to compare table
    var dispLEL = document.createElement("td");
    dispLEL.id = "disl";         // Create a <li> node
    var dispLtext = document.createTextNode(car1.DisplacementL);
    dispLEL.appendChild(dispLtext);
    document.getElementById("disL").appendChild(dispLEL);

    //Add engine cylinders to compare table
    var engineCylEL = document.createElement("td");
    engineCylEL.id = "enginecyl1";         // Create a <li> node
    var engineCyltext = document.createTextNode(car1.EngineCylinders);
    engineCylEL.appendChild(engineCyltext);
    document.getElementById("EngineCyl").appendChild(engineCylEL);

    //Add engine cylinders to compare table
    var enginehpEL = document.createElement("td");
    enginehpEL.id = "enginehp";         // Create a <li> node
    var enginehptext = document.createTextNode(car1.EngineHP);
    enginehpEL.appendChild(enginehptext);
    document.getElementById("Engine").appendChild(enginehpEL);

    

    times = times + 1;

}

// function AddVehicleToArray()
// {
// document.getElementById("name").innerHTML = "";
// }

class Vehicle {
    constructor(Vin, Name, Make, Model, Year, DisplacementCC, DisplacementCI, DisplacementL, EngineCylinders,
        EngineHP) {
        this.Vin = Vin;
        this.Name = Name;
        this.Make = Make;
        this.Model = Model;
        this.Year = Year;
        this.DisplacementCC = DisplacementCC;
        this.DisplacementCI = DisplacementCI;
        this.DisplacementL = DisplacementL;
        this.EngineCylinders = EngineCylinders;
        this.EngineHP = EngineHP;

    }

    Results() {


    }
}


/*
DisplacementCC: "7538.049440"
DisplacementCI: "460"
DisplacementL: "7.5"

Doors
DriveType
EngineConfiguration
EngineCylinders: "8"
EngineHP: "230"
EngineKW: "171.5110"
EngineManufacturer: "Ford"
FuelTypePrimary
GVWR
Make: "FORD"
MakeID: "460"
Manufacturer: "FORD MOTOR COMPANY, USA"
ManufacturerId: "976"
Model: "F-250"
ModelID: "1805"
ModelYear: "1989"
OtherEngineInfo
PlantCity: "NORFOLK"
PlantCountry: "UNITED STATES (USA)"
PlantState: "VIRGINIA"
VIN: "1FTHF25GXKNB66907"
VehicleType: "TRUCK "
TransmissionStyle
BodyCabType: "Not Applicable"
BodyClass:
*/