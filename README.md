# PillBot
## Awesome AI chatbot for Discord

This bot is actually not a language model but a middle man to a language model. The model used is Llama and needs at least 4GB of ram to run on your computer (I recommend having at least 8GB or 16GB to have room for other things)

## Install Llama

There could be few different ways to install Llama language model on your computer but I will tell you how I did it. For me, I installed through DalaiJS. 

Here is a link about dalai.js

https://github.com/cocktailpeanut/dalai

but basically just run this:

```
npx dalai llama install 7B
```

I dont think your machine is ready to handle other models, but in case you would like to install bigger models, you can also install 13B (8GB quantized), 30B(16GB quantized) or 65B(32GB quantized).

## Adjust the path in commands/llamabin.js

You will want to adjust the path in commands/llamabin.js to point where the main binary is and where the model is. (line 25)

## Config.json

You will need to have valid token, clienId and guildId for your bot. help here -> https://discordjs.guide/creating-your-bot/#using-config-json

## Reason to ditch Dalai.js

I tried the dalai.js api and it was easy to use. The problem was that it was really slow on my machine(i5 with 8GB ram) and so as you have noticed, my bot now only use the llama binary directly which is a lot faster. If your machine can handle the extra work of running dalai.js, then sure that might be better design in your case.


