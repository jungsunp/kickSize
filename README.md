# wordUp

*What size should I get for these sneakers?*

Have you ever wanted to know the right size for sneakers you want to purchase online without even trying them on? Kicksize can help.

I created Kicksize to tackle this challenge of predicting the right sneaker size using the large set of user data. As a user, you enter three pieces of information: weight, height, and different sneakers you own with their sizes. Then, using a regression analysis library and a scoring algorithm, this web application attempts to calculate the size to suggest to the user. I am also using data visualization library React-D3 to display different sets of data used for the calculation.

## Motivation

I always have been a big fan of sneakers since I was a kid. As a sneakers fan, I enjoy collecting rare sneakers that are sometimes very hard to get. A struggle I often face from this is that I don't know which size to get when I purchase those rare sneakers online. I have always wished there was a tool that can tell me the right size for sneakers without even trying them on. With my background in Math and Programming, I tackled this challenge.

## Build Status

* **_[DISCUSS TRAVIS-CI WITH GROUP]_**

## Screenshots

* **_[INSERT LOGO]_**
* **_[INSERT SCREENSHOTS]_**

## Tech Used

### Built with

* *[Neo4j, a graph database](https://neo4j.com/)*
* *[D3.js, data visualization tool](https://d3js.org/)*
* *[PostgreSQL, an object-relational database system](https://www.postgresql.org/)*
* *[Node.js, an asynchronous event driven JavaScript runtime environment](https://nodejs.org/en/)*
* *[npm, dependency management](https://www.npmjs.com/)*

## Features

* Vocal speech analysis
* Interactive games
* User level assignment
* Challenging quizzes based on user's level
* Custom, tailored word suggestions for each user
* Complex and interactive data visualizations for each user
* User profile page

## How To Run Locally

To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer.

You'll also need [Neo4j](https://neo4j.com/download/?ref=home), a popular graph database, as well as [PostgreSQL](https://www.postgresql.org/download/), a traditional object-relational database.

Lastly, you'll need to make accounts for several APIs:
* [twinword](https://www.twinword.com/api/)
  * Natural language processing
* [ROSETTE](https://developer.rosette.com/)
  * Text analysis
* [Google API](https://developers.google.com/identity/sign-in/web/devconsole-project)
  * Not necessary to run application, but only if you would like to test login through a Google username/email account

From your command line:
```
# Clone this repository
$ git clone https://github.com/wordupapp/wordup.git

# Go into the repository
$ cd wordup

# Install dependencies
$ npm install

# Run the application
$ npm run start-dev
```

## API Reference

* **twinword**
  * [Word Dictionary](https://www.twinword.com/api/word-dictionary.php)
  * [Language Scoring](https://www.twinword.com/api/language-scoring.php)
* **ROSETTE**
  * [Morphological Analysis](https://www.rosette.com/capability/morphological-analysis/#overview)
* **Google**
  * [Google OAuth 2.0](https://developers.google.com/identity/protocols/OAuth2)

## Tests

* **_[DESCRIBE TESTS AND SHOW HOW TO RUN THEM WITH CODE EXAMPLES]_**

## How To Use

1. Go to *[wordUp](https://wordup-app.herokuapp.com/)* and make a user account or log in with your Google account
2. Record yourself using a sample prompt or your own imagination to get your first diagnostic baseline and an appropriate vocabulary level
3. Start playing games, completing quizzes, and reviewing the recommended words section to improve your vocabulary!

## Credits

* **_[Janine Garcia](https://github.com/jannncodes)_**
* **_[Jonathan Kammo](https://github.com/jonathankammo)_**
* **_[Jungsun Park](https://github.com/jungsunp)_**
* **_[Robert Shaw](https://github.com/RobertShaw1)_**

## License

* **_[INSERT APPROPRIATE LICENSE ONCE IT HAS BEEN ADDED TO REPO]_**
