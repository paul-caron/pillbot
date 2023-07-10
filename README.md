# PillBot
## Awesome AI chatbot for Discord

This bot is actually not a language model but a middle man to a language model. The model use is Llama which needs at least 4GB of ram to run on your computer (I recommend having at least 8GB or 16GB to have room for other things)

## Install Llama

There could be few different ways to install Llama language model on your computer but I will tell you how I did it. For me, I installed through DalaiJS. 

Here is a link about dalai.js

https://github.com/cocktailpeanut/dalai

but basically just run this:

```
npx dalai llama install 7B
```

## Adjust the path in commands/llamabin.js

You will want to adjust the path in commands/llamabin.js to point where the main binary is and where the model is. (line 25)

