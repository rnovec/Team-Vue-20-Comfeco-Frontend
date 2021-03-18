module.exports = {
  methods: {
    async joinToEvent(eventId) {
      const events = [eventId];
      // update user profile without UserInfo
      await this.updateProfile(null, { events });
      this.$swal.fire({
        icon: "success",
        title: "Se ha unido al evento!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    async leaveEvent(eventId) {
      const events = this.currentEvents;
      if (events.indexOf(eventId) !== -1) {
        this.$swal
          .fire({
            title: "¿Estas seguro de abandonar el evento?",
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
              // TODO: remover el evento pero mantener los demas a los que esta inscrito
              // TODO: consumir API de baneos
              await this.updateProfile(null, { events });
            }
          });
      }
    },
  },
};
