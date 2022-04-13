import Swal from 'sweetalert2'

const avatarAppearance = {
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
    basicShirts : "tank top, short sleeve, sweater",
    basicHats : "wide brim, bucket, basic hat",
    facialAccessiories : "glass, tinted, mask, baclava, ski",
    fullPacks : function(){
        return this.basics;

        let aawItems = () => {
            return this.aawItems, console.log("these are your choices")
        }
    }

}
