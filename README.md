Much Better CSS
===============

_This repository is in alpha state. More docs and improvements soon. =]_

This project is a quick start to work with a modular and maintainable CSS structure with SASS.

It's framework agnostic, so you can use this to work with projects that uses ASP.NET, Ruby, Java, Node.js, etc. 

Awesome! So, how can I get this?!

### Get Started

1. You'll need to install [Node.js](https://nodejs.org).
2. Open your command line tool (_bash_ for Mac and Linux and _cmd_ for Windows) and check if Node was installed correctlly by typing 
```npm -v```. If it's ok, it will appear the current version of _npm_ in your console like this ```2.5.1```.
3. Create a directory with name like ```Projects``` and navigate to it in your console (to navigate, use ```cd path/to/my/ProjectsFolder```).
4. Clone the project with command ```git clone https://github.com/danilojrr/BetterCSS.git```.
Now you can navigate to the _BetterCSS_ folder with command ```cd BetterCSS```.
5. Install grunt client and bower globally ```npm install -g grunt-cli bower```.
6. Install bower dependencies ```bower install```.
7. Done! Just type ```grunt``` before any modifications to your sass files.

Now you can modify your sass files and see that the styles.css is updated automatically. =]

### TO DO

Make a little project with several branches to do a design layout:

- With Bootstrap, but no (almost) CSS classes on HTML markup
- With a Bootstrap skeleton, but over this, a custom style (PRIORITY)
- Without Bootstrap

### Technologies

- SASS
- Grunt
- Bootstrap
- Bourbon
