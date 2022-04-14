import Swal from 'sweetalert2'


const basicStarter = {
    avatarClothes : "Pants, Shirt, Boots",
    avatarName : "Default-001",
    avatarLevel: "1",
    avatarType : "Basic",
    fullDesc : function(){
return this.avatarName+""+this.avatarLevel;
    }
    
};

console.log("Make sure to add an id!")

Swal.fire({
    icon: "error",
    title: "Error!",
    text: "There is no id!",
    

})

const addplayerID = {
    playerID : "001",
    playerjoinTime : "2022",
    fullDesc : function(){
        return this.playerID;
    }
}

let addIDs = () => {
    return "IDs were added!"
}
console.log("...")

const avataraboveWaist = {
    basicShirts : "tank top, short sleeve, sweater", //you can add your own values 
    basicHats : "wide brim, bucket, basic hat",
    facialAccessiories : "glasses, tinted, mask, baclava, ski",
    AAW : function(){   //aaw is avatar above waist
        return this.basics;

        let aawItems = () => {
            return this.aawItems, console.log("these are your choices")
        }
    }

}
Swal.fire({
    icon: "success",
    title: "Success!",
    text: "These are you options for above the waist."
})
let availibleTags 
let availibleAvatars
let Defaults
const defaultPack = {
    dp1 : "avatarClothes",
    dp2 : "avatarName",
    dp3 : "avatarLevel",
    dpTotal : function() {
        let dpTotal = () =>{
            return this.dpTotal
            
        }
    }
    

}
let dpTotal = prompt(`Is this the basic pack?`, 'Yes')
console.log(`${dpTotal}`), [1,2,3].forEach

let otherItems
let pants, shoes = true


const ABW = {
abwClothing : "Pants",
abwClothing2: "Shoes",
abwDouble : function() {
    let abwDouble = () => {
        return this.abwDouble, console.log(), Swal.fire({
            icon: 'success',
            title: 'Perfect!',
            text: 'All the clothes are here!'
            
        })
    }
}
}
//abw is avatar below waist
let Question = prompt(`Are all the clothes here?`, `Yes`)
alert(`${Question}`)

const totalItems = {
    totalAAW : "fullPack",
    totalBaw : "fullPack",
    completePacks : function() {
        let completePacks = () =>{
            return this.completePacks
        }
    }
}