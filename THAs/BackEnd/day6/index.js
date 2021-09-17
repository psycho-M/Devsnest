const fs = require('fs/promises');

const commander = require('commander');

commander.command('mkdir <directory-name>').action(async (dir) => {
    await fs.mkdir(dir);
})

commander.parse(process.argv);