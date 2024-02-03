const readline = require('readline');
const Spacecraft = require('./src/spacecraft');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter commands (e.g., ["f", "r", "u"]): ', (commands) => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');

    for (const command of commands) {
        spacecraft.executeCommands(command);
    }

    console.log('Final Position:', spacecraft.position);
    console.log('Final Direction:', spacecraft.direction);

    rl.close();
});
