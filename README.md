# pepper-web-games
Simple examples of how to code Web Games with HTML, CSS and JavaScript that can be played in the Pepper Robots Tablet.

It also includes a digital clock and a calculator as an application.

## Installation

You can choose whether you want to install the entire repository. In this case, we recommend cloning it and installing it locally on your `Pepper` robot. If you only want to use a single application, you can also run it remotely, for example, by downloading the Python file from the `remote` folder and executing it. Remote means that the application runs on a GitHub Pages page and the `Pepper` accesses this page as a client by executing the Python script.

### Local installation

At first you have to clone this repository on you local machine:

```
git clone https://github.com/Michdo93/pepper-web-games
```

Then you have to copy the whole folder on your `Pepper` robot using `scp`:

```
scp -R pepper-web-games nao@<your_ip>:/home/nao
```

Please replace `<your_ip>` with the IP address of your `Pepper` robot.

Then you have to connect with your `Pepper` using `ssh`:

```
ssh nao@<your_ip>
```

Please replace `<your_ip>` with the IP address of your `Pepper` robot and enter your `password`.

Then you have to navigate inside the `pepper-web-games` folder and execute the `symlink.bash`:

```
cd pepper-web-games
bash symlink.bash
```

This will create a symlink in the `apps` folder of Peppers `PackageManager`. After that you can run the separate `Python` files for executing one of the web games or applications.

As example you can run `Connect Four!` with:

```
python connectfour.py
```

### Remote installation

At first you have to connect with your `Pepper` using `ssh`:

```
ssh nao@<your_ip>
```

Please replace `<your_ip>` with the IP address of your `Pepper` robot and enter your `password`.

Then you have to download one of the `Python` files using `wget`, for example:

```
wget https://raw.githubusercontent.com/Michdo93/pepper-web-games/main/remote/connectfour.py
```

As example you can run it with:

```
python connectfour.py
```

## Play Games and run Applications

You can test and play the games and applications here:

[https://michdo93.github.io/pepper-web-games/](https://michdo93.github.io/pepper-web-games/)

### Calculator

### Digital Clock

### Connect Four!

### Hangman

### Memory

### Number Guessing

### Quiz

### TicTacToe

### Word Puzzle
