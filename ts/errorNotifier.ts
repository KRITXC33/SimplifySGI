import swal from 'sweetalert2';

swal.fire({
    icon: "error",
    title: "title",
    text: "Oh no!  An error has occured! Check the developer console!"
})

let errorsAllowed = (Boolean("Error"));

