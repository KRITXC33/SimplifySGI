import Swal from 'sweetalert2'
Swal.fire({
    icon: "warning",
    title: "Warning!",
    text: "Auto closing!  Claim your reward!",
    timer: 2000   
})
let LR = "defaultCurrency"
const dailyReward = {
    loginReward : "LR",
    frequency : "Daily",
    fullReward : function() {
        let fullReward = () => {
            return this.fullReward
        }
    }
}
