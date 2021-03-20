import technologies from "@/data-sources/technologies.json";

export default {
  data() {
    return {
      technologies,
    };
  },
  methods: {
    techImage(name) {
      const tech = this.technologies.data.filter(t => t.name === name);
      const image = tech[0] ? tech[0].image : "javascript.jpg";
      return this.technology(image);
    },
    techColor(name) {
      const tech = this.technologies.data.filter(t => t.name === name);
      return tech[0] ? tech[0].color : "light-gray";
    },
    technology(data) {
      return require(`@/assets/technology/${data}`);
    },
  },
};
