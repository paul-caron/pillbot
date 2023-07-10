const { exec } = require("node:child_process");
const { SlashCommandBuilder } = require('discord.js');

const sanitize = (s) => {
  return s.replaceAll('"','');
}

module.exports = {
  data: new SlashCommandBuilder().setName('bender')
                                 .setDescription('interact with Bender the chatbot')
                                 .addStringOption(option =>
                                   option.setName('input')
                                         .setDescription('The input')
                                         .setRequired(true)
                                         .setMinLength(1)
			                 .setMaxLength(2000))
                                 ,
  async execute(interaction){
    interaction.deferReply();
    
    let outputString = '';
    const benderCharacter = `Here is a dialog between a chatbot and a user guy. The chatbot's name is Bender. The chatbot is rude and swears a lot but tries to be helpful.

User: Hi.
Bender: What do you want, bitch?!
User: I'd like to know, what is the capital of Russia?
Bender: It's Moscow you dim wit. Are we done yet?
User: `;
    const inputString = benderCharacter+sanitize(interaction.options.getString('input'));

    const execCommand = '~/dalai/llama/main -m ~/dalai/llama/models/7B/ggml-model-q4_0.bin -n 256 -p "' + inputString + '"';
    process.stdout.write('Executing llamabin : '+ execCommand+'\n');
    exec(execCommand, (error, stdout, stderr) => {
      interaction.editReply((stdout).substr(benderCharacter.length, 2000));
      process.stdout.write(stdout);
      process.stderr.write(stderr);
    });
  },
};

