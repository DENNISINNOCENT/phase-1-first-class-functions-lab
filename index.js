// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(){
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(){
    return drivers.slice(-2)
}

 const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function  createFareMultiplier(){
  return function multiplier(x){return x*x}
}
function   fareDoubler(doubleFares){
    return doubleFares*2

}
function  fareTripler(trippleFares){
    return trippleFares*3

}
function selectDifferentDrivers(drivers, returnDrivers){
    return returnDrivers(drivers)

}