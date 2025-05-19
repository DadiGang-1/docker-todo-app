const GREETING = ['Hello world!', 'Hola mundo!', 'Bonjour le monde!', 'Hallo Welt!', 'Ciao mondo!'];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
    });
};
