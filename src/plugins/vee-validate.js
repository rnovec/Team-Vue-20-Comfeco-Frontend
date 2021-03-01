import Vue from "vue";
import { ValidationObserver, extend } from "vee-validate";
import InputWithValidation from "@/components/InputWithValidation";
import { required, confirmed, email } from "vee-validate/dist/rules";

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("InputWithValidation", InputWithValidation);

extend("required", {
  ...required,
  message: "Este campo es obligatorio",
});

extend("email", {
  ...email,
  message: "Este campo debe ser un correo electrónico válido",
});

extend("confirmed", {
  ...confirmed,
  message: fieldName => {
    let msg = "Los campos no coinciden";
    switch (fieldName) {
      case "confirmation":
        msg = "Las contraseñas no coinciden";
        break;
      default:
        break;
    }
    return msg;
  },
});

extend("min", {
  validate(value, { length }) {
    return value.length >= length;
  },
  params: ["length"],
  message: fieldName => {
    let msg = `Este campo debe contener al menos ${length} carácteres`;
    switch (fieldName) {
      case "password":
        msg = `La contraseña debe contener al menos ${length} carácteres`;
        break;
      default:
        break;
    }
    return msg;
  },
});
