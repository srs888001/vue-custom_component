<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "SrsForm",
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  methods: {
    validate(cb) {
      var children = [];
      const findChilds = (childs) => {
        if (!childs || childs.length == 0) {
          return;
        }

        childs.forEach(function (child) {
          if (child.$options.name === "SrsFormItem") {
            children.push(child);
          } else {
            findChilds(child.$children);
          }
        });
      };
      findChilds(this.$children);

      const tasks = children
        .filter((child) => child.prop)
        .map((child) => child.validate());

      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>

<style>
</style>
