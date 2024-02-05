const readline = require('readline');
const Spacecraft = require('./src/spacecraft');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter commands (e.g., f,u,r): ', (commands) => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    commands = commands.split(',')

    spacecraft.executeCommands(commands);

    console.log('Final Position:', spacecraft.position);
    console.log('Final Direction:', spacecraft.direction);

    rl.close();
});
