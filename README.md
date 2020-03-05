# nodejs-project

This README outlines the details of collaborating on this Node JS application.

---
## Requirements

For development, you will only need Node.js and a node global package, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

## To install a package
package.json contains all the dependensies required for the node project. You can either install them seperately using command prompt or powershell in windows or terminal in linux. (Make sure your path in the terminal is the project path e.g. C:\Users\<User Name>\Desktop\nodejs)

    $ `npm install --global <package_name>` for global installation.

    $ `npm install --save <package_name>` to install the package as a project dependency or a development dependency.

## To install all dependencies from a package.json file
An easy way to install all dependensies given in package.json file is to run the following command(s).

    $ npm install

## nodemon (optional)
Install nodemon package if you want server to restart automatically when changes are made in aby file.
`nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.`

    $ npm install -g nodemon

## Running the project

    $ npm start
    or
    $ nodemon
