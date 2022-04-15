import Swal from "sweetalert2"

let playerName: String = "Default1"
const itemsInIventory = 'food, bandage, melee, firearm, ammo'
console.log('play has all items needed')

Swal.fire({
    icon: "success",
    title: "Perfect",
    text: "You have all you items!"

    
})

let totalItems;
let totals = prompt("Does the player have enough?", '')
if(totalItems < 5){
    totalItems = false
}


