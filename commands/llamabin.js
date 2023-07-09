const Dalai = require('dalai');
const { exec } = require("node:child_process");
const { SlashCommandBuilder } = require('discord.js');

const sanitize = (s) => {
  return s.replaceAll('"','');
}

module.exports = {
  data: new SlashCommandBuilder().setName('llamabin')
                                 .setDescription('interact with llama language model')
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
    const inputString = sanitize(interaction.options.getString('input'));

    const execCommand = '~/dalai/llama/main -m ~/dalai/llama/models/7B/ggml-model-q4_0.bin -n 256 -p "' + inputString + '"';
    process.stdout.write('Executing llamabin : '+ execCommand+'\n');
    exec(execCommand, (error, stdout, stderr) => {
      interaction.editReply((stdout).substr(0, 2000));
      process.stdout.write(stdout);
      process.stderr.write(stderr);
    });
  },
};

