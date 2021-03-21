export default {
  methods: {
    async joinToEvent(eventId) {
      await this.updateProfile(null, { event: eventId });
      this.$swal.fire({
        icon: "success",
        title: "Se ha unido al evento!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    async leaveEvent() {
      if (this.currentEvent) {
        this.$swal
          .fire({
            title: "¿Estas seguro de abandonar tu evento actual?",
            text:
              "¡Esta acción es irreversible!. Quedarás vetado de este evento",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, abandonar!",
            cancelButtonText: "Cancelar",
          })
          .then(async result => {
            if (result.isConfirmed) {
              await this.updateProfile(null, { event: null });
            }
          });
      }
    },
  },
};
