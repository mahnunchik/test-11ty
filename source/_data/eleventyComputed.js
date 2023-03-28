module.exports = function() {
  return {
    bar: '{{ "bar" | myFilter }}',
    baz() {
      return this.myFilter('baz');
    },
  };
}
