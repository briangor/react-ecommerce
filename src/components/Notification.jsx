import Swal from 'sweetalert2';

const Notification = (props) => {
    console.log(props);
    alert("Notification");

    const success = (props) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })    
        Toast.fire({
          icon: 'success',
          text: props,
          color: '#193561'
        })
      }

    const handleAlert = () => {
        console.log("Alert fn in Note");
    }
    
    return ( 
        <h1>Notification</h1>
     );
}
 
export default Notification;