module.exports = {
  methods: {
    async joinToGroup(data) {
      const group = {
        id: data.id,
        name: data.name,
        lang: data.lang,
        role: "Participante",
      };

      this.$swal
        .fire({
          title: "¿Estas seguro de unirte a este grupo?",
          text: "Ya perteneces a un grupo",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, unirme!",
          cancelButtonText: "Cancelar",
        })
        .then(async result => {
          if (result.isConfirmed) {
            // update user profile without UserInfo
            await this.updateProfile(null, { group });
            this.$swal.fire({
              icon: "success",
              title: "Se ha unido al grupo!",
              showConfirmButton: false,
              timer: 1500,
            });

            // Añadiendo insignia por unirse a un grupo
            this.updateBadges("friendly");
          }
        });
    },
    async leaveGroup(groupId) {
      if (groupId) {
        this.$swal
          .fire({
            title: "¿Estas seguro de abandonar tu grupo?",
            text: "¡Esta acción es irreversible!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, abandonar!",
            cancelButtonText: "Cancelar",
          })
          .then(async result => {
            if (result.isConfirmed) {
              await this.updateProfile(null, { group: null });
            }
          });
      }
    },
  },
};
