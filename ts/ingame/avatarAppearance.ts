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
let shop = "open"
const shopValues = "shopisOpen"

Swal.fire({
    icon: "error",
    title: "Error!",
    text: "There is no id!",
    

})
const addIds = {
    
}