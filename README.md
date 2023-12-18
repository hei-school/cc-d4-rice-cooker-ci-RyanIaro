[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/PHq8Kfj_)

# Rice cooker
Need a rice cooker? Go buy one then, or if you're not sure about how that dark magic works, you can try it first with this program imitating an actual rice cooker (without the rice you eat).

## Languages:
This program is available in these languages:
* [Typescript](https://github.com/hei-school/cc-d2-my-rice-cooker-RyanIaro/tree/feature/typescript)

## Features:
1. Cook rice (duh), need to add the rice and some water first
2. Boil water, because you can
3. Check cooking status: cooking, finished or idle
4. Keep warm, for a certain duration
5. Disable warm mode
6. Interrupt/Resume cooking
7. Unplug the rice cooker(exit the program)

## Installation:
First you want to download this project on this current branch

Make sur you have Node.js installed on your computer, download it [here](https://nodejs.org/en/download) and install it on your computer. To be sure it is correctly installed, open your terminal and execute this commandn your should see the version of node installed on your computer:

    node --version

Then you need to install the dependencies, in your terminal, navigate to the directory where the index.ts file is and execute this command:

    npm install

## Usage:
Now is the time to use your rice cooker, no, not the one in your kitchen, this virtual program.

All you need to do is compile the typescript, this command will transform the typescript code into javascript code, you should see a new file named index.js:

    npx tsc index.ts

then execute the program with:

    node index.js