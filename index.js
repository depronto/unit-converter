/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.getElementById("input-number")
const btnConvert = document.getElementById("btn-convert")
let lengthGrid = document.getElementById("length-grid")
let volumeGrid = document.getElementById("volume-grid")
let massGrid = document.getElementById("mass-grid")

btnConvert.addEventListener("click", function(){
    let saveInput = parseFloat(input.value)
    
    if(saveInput === 1) {
        lengthGrid.textContent = ("1 meter = 3.281 feet | 1 feet = 0.305 meters")
        volumeGrid.textContent = ("1 liter = 0.264 gallons | 1 gallon = 3.785 liters")
        massGrid.textContent = ("1 kilogram = 2.204 pounds | 1 pound = 0.454 liters")
    }else{
        lengthGrid.textContent = `${saveInput} meters = ${(saveInput * 3.281).toFixed(3)} feet | 
        ${saveInput} feet = ${(saveInput / 3.281).toFixed(3)} meters`
        volumeGrid.textContent = `${saveInput} liters = ${(saveInput * 0.264).toFixed(3)} gallons | ${saveInput} gallons = ${(saveInput / 0.264).toFixed(3)} liters`
        massGrid.textContent = `${saveInput} kilos = ${(saveInput * 2.204).toFixed(3)} pounds | 
        ${saveInput} pounds = ${(saveInput / 2.204).toFixed(3)} kilos`
    }
    
})

