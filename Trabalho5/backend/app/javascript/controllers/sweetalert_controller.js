import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    this.redirect = false;
  }

  showAlert(e) {
    if (this.redirect) return;

    e.stopImmediatePropagation();
    e.preventDefault();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success m-2",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        background: "#212529",
        color: "#FFF",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            icon: "success",
            background: "#212529",
            color: "#FFF",
            title: "Deleted!",
            text: "Your register has been deleted.",
            confirmButtonText: "Ok",
          }).then(() => {
            this.redirect = true;
            this.element.click();
          });
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            icon: "error",
            background: "#212529",
            color: "#FFF",
            title: "Cancelled",
            text: "Your register is safe.",
            confirmButtonText: "Ok",
          });
        }
      });
  }
}
