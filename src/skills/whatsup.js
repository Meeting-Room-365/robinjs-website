module.exports.trigger = (sen) => (sen === 'how are you' || sen === 'what\'s up' );
module.exports.resolve = () => new Promise((resolve) => {
  resolve("I am good. - How about you?'");
});
