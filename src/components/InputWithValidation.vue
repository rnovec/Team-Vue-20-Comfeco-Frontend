<template>
  <ValidationProvider
    :vid="vid"
    :name="$attrs.name || $attrs.label"
    :rules="rules"
    v-slot="{ errors, valid }"
  >
    <b-field
      class="mb-2"
      v-bind="$attrs"
      :type="{ 'is-danger': errors[0], 'is-success': valid }"
      :message="getMessage(errors, valid, $attrs.message)"
    >
      <b-input v-model="innerValue" v-bind="$attrs"></b-input>
    </b-field>
  </ValidationProvider>
</template>

<script>
  import { ValidationProvider } from "vee-validate";
  import inputMixin from "@/mixins/input";

  export default {
    mixins: [inputMixin],
    components: {
      ValidationProvider,
    },
    props: {
      vid: {
        type: String,
      },
      rules: {
        type: [Object, String],
        default: "",
      },
    },
    methods: {
      getMessage(errors, valid, message) {
        if (errors[0]) return errors[0];
        if (valid) return "";
        return message;
      },
    },
  };
</script>
