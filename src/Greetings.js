// Greetings.js located in ../src/Greetings
const greetingMessage = "Hello, from the custom module!";

const Greetings = () => {
    console.log(greetingMessage);  // This will be logged to the console
};

// Export the Greetings function so it can be used in other files
module.exports = Greetings;
