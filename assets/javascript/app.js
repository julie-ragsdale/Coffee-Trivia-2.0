$('document').ready(function() {
    
    // Trivia objects
    let triviaObjects = [ 
        {
            question: 'Which country is the greatest producer of coffee?',
            answer: 'Brazil',
            options: ['Brazil', 'Indonesia', 'Costa Rica', 'The U.S.'],
            image: 'https://muddydogcoffee.com/wp-content/uploads/2017/03/brazilian-coffee-berries-being-harvested.-source-viralgecko.com_-600x600.jpg'
        },
        {
            question: 'What is an Americano?',
            answer: 'Espresso diluted with water',
            options: ['Espresso diluted with water','Espresso with a splash of cream','Two shots of espresso','Weak coffee'],
            image: 'https://i.pinimg.com/originals/f0/b8/8f/f0b88ffc82c1127b4e56b7952791f5e5.jpg'
        },
        {
            question: 'A cappuccino is an espresso-based drink. What is the ratio of its components?',
            answer: '1/3 espresso : 1/3 steamed milk : 1/3 foam',
            options: ['1/3 espresso : 1/3 steamed milk : 1/3 foam', '1/2 espresso : 1/4 steamed milk : 1/4 foam', '1/3 espresso : 1/3 water : 1/3 cream', '1/2 espresso : 1/2 foam'],
            image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=500'
        },
        {
            question: 'What is a mocha?',
            answer: 'A latte flavored with chocolate',
            options: ['A latte flavored with chocolate', 'Hot chocolate', 'Coffee with a splash of chocolate milk', 'Chocolate flavored espresso'],
            image: 'https://i.pinimg.com/736x/f3/d2/38/f3d2381dc39d73a8c40f94476cef3906--starbucks-christmas-christmas-drinks.jpg'
        },
        {
            question: 'What is an espresso macchiato?',
            answer: 'Espresso marked with a spot of foamed milk',
            options: ['Espresso marked with a spot of foamed milk', 'A single shot of espresso', 'A shot of espresso pulled for 30 seconds', 'A shot of espresso flavored with caramel'],
            image: 'https://s3-media1.fl.yelpcdn.com/bphoto/fzCW3H_VW2tKFwgxyYfJVg/ls.jpg'
        },
        {
            question: 'What is a red eye?',
            answer: 'Drip coffee with a shot of espresso',
            options: ['Drip coffee with a shot of espresso', 'Drip coffee with two shots of espresso', 'two shots of espresso topped off with water', 'A latte made with decaf espresso'],
            image: 'http://wkutalisman.com/wp-content/uploads/2016/09/redblack-1024x961.jpg'
        },
        {
            question: 'How much caffeine is in coffee?',
            answer: 'About 95 mg per one 8 fl oz cup',
            options: ['About 95 mg per one 8 fl oz cup', '400 mg per 8 fl oz', 'Roughly 1 gram per cup', 'About 10 mg per 8 fl oz cup'],
            image: 'https://stefanprice.files.wordpress.com/2012/09/cafinev24.jpg'
        },
        {
            question: 'What is a key difference between light roasts and darker roasts?',
            answer: 'Light roasts contain more caffeine than dark roasts',
            options: ['Light roasts contain more caffeine than dark roasts', 'Light roasts are roasted in the sun, while dark roasts are roasted without light', 'The raw coffee beans are different colors', 'They are different varieties/subspecies'],
            image: 'https://s-media-cache-ak0.pinimg.com/originals/e0/e4/a8/e0e4a815823e147d70b70ef8d6ed878a.jpg'
        },
        {
            question: 'What is the relationship between coffee and Coffea?',
            answer: 'Coffea is a genus of plants from which coffee beans originate',
            options: ['Coffea is a genus of plants from which coffee beans originate', 'Coffea refers to the flowers of the coffee plant', 'Coffee plants are grown in Africa, while Coffea plants are gown in South America', 'They are unrelated'],
            image: 'https://i.ebayimg.com/images/g/rwoAAOSwKQ9Z9YwF/s-l300.jpg'
        },
        {
            question: 'A coffee bean is actually...',
            answer: 'The seed of a fruit',
            options: ['The seed of a fruit', 'Just a bean', 'A nut similar to hazelnuts', 'A type of fruit'],
            image: 'https://i.pinimg.com/originals/d3/14/fb/d314fb94d221cc814e950295c68c6129.jpg'
        },
        {
            question: 'Why is coffee roasted?',
            answer: 'To provide them with flavor and aroma',
            options: ['To provide them with flavor and aroma', 'To activate the caffeine', 'To make them safe to consume', 'To burn off the excess caffeine'],
            image: 'https://driftaway.coffee/wp-content/uploads/2015/08/shutterstock_182457260-min.jpg'
        },
        {
            question: 'What is an affogato?',
            answer: 'A scoop of vanilla ice cream topped with a shot of espresso',
            options: ['A scoop of vanilla ice cream or gelato topped with a shot of espresso', 'A cappuccino over ice', 'A milkshake made with chocolate syrup, espresso, and gelato', 'Coffee-flavored gelato'],
            image: 'https://photo.foodgawker.com/wp-content/uploads/2018/02/3169123.jpg'
        },
        {
            question: 'What is the difference between a cappuccino and a latte?',
            answer: 'Cappuccinos have much more foam, while lattes are milkier',
            options: ['Cappuccinos have much more foam, while lattes are milkier', 'Nothing - both names refer to the same drink', 'A cappuccino is made with cream, while a latte is made with milk', 'A latte is topped with foam, while a cappuccino is not'],
            image: 'https://i.pinimg.com/originals/59/68/e5/5968e59784c25a9d312dba1adddf5200.jpg'
        },
    ];

    // Variables
    let questionIndex = 0;
    
    let numOfRightGuesses = 0;
    let numOfWrongGuesses = 0;
    let numOfTimesRunOut = 0;

    const questionTime = 15;
    const delay = 5;

    // G A M E P L A Y

    // When Play button is clicked, game loads
    $('#playButton').on('click', nextQuestion);

    // Click event handler
    $('.option-button').click(function() {
        let userChoice = $(this).text();
        let correctAnswer = triviaObjects[questionIndex].answer;
        
        // Duplication can be prevented here in the future (aka refactoring!)

        // If answer is correct...
        if (userChoice === correctAnswer) {
            // Display message and relevant image
            $('#rightAnswer').css({visibility: 'visible'});
            $('.objImage').attr('src', triviaObjects[questionIndex].image);
            numOfRightGuesses++;
            questionIndex++;
            // Delay question here
            const delayQuestion = setTimeout(function() {
                nextQuestion();
            }, delay * 1000);
            
            // If answer is incorrect...
        } else {
            // Display message and relevant image and reveal correct answer
            $('#wrongAnswer').css({visibility: 'visible'});
            $('.objImage').attr('src', triviaObjects[questionIndex].image);
            $('.showCorrect').text('The correct answer is: ' + correctAnswer);
            numOfWrongGuesses++;
            questionIndex++;
            // Delay question here
            setTimeout(function(){
                nextQuestion();
            }, delay * 1000);
        }
    });
        
    // Load question
    function nextQuestion() {
        if (questionIndex >= triviaObjects.length) {
            showScores();
        } else {
            console.log(`Moving to question ${questionIndex}`);
            
            // Reset countdown timer,
            startTimer();
            
            // Hide start screen
            $('.intro-screen').css({visibility: 'hidden'});
            
            // Hide right/wrong message and image
            $('#rightAnswer').css({visibility: 'hidden'});
            $('#wrongAnswer').css({visibility: 'hidden'});

            // Display question and choices
            $('#question').text(triviaObjects[questionIndex].question);
            $('#option0').text(triviaObjects[questionIndex].options[0]);
            $('#option1').text(triviaObjects[questionIndex].options[1]);
            $('#option2').text(triviaObjects[questionIndex].options[2]);
            $('#option3').text(triviaObjects[questionIndex].options[3]);
        }
    }

    // Timer
    let timeRemaining;
    let lastTimer;
    function startTimer() {
        if (lastTimer) {
            clearInterval(lastTimer);
        }
        timeRemaining = questionTime; 
        $('#countdown').text(timeRemaining + ' s');
        
        // After 1 s, this decrements the time remaining
        lastTimer = setInterval(function() { 
            timeRemaining--;
            $('#countdown').text(timeRemaining + ' s');

            // If out of time...
            if (timeRemaining <= 0) {

                // Display message and relevant image and reveal correct answer
                $('.objImage').attr('src', triviaObjects[questionIndex].image);
                $('#timeIsUp').css({visibility: 'visible'});
                $('.showCorrect').text('The correct answer is: ' + triviaObjects[questionIndex].answer);
                numOfTimesRunOut++;
                questionIndex++;

                clearInterval(lastTimer);
                // Delay question here
                const delayQuestion = setTimeout(function() {
                    nextQuestion();
                    clearTimeout(delayQuestion);
                    $('#timeIsUp').css({visibility: 'hidden'});
                }, delay * 1000);
            }
        }, 1000);
    }

    // After each question, check if the game is over
    // If the game is over...
    function showScores() {
        //  Show scores
        $('#gameOverPosition').css({visibility: 'visible'});
        $('#gameOverScreen').css({visibility: 'visible'});
        $('#right').text('Number of Questions Right: ' + numOfRightGuesses);
        $('#wrong').text('Number of Questions Wrong: ' + numOfWrongGuesses);
        $('#timeRanOut').text('Times you ran out of time: ' + numOfTimesRunOut);   
        console.log('Youve answered all of the questions. Lets see how you did!');
        
        // Reset the game without reloading the page
        $('#playAgain').click(gameOver);
    }

    // If the player clicks "play again" button, reset all values
    function gameOver() {
        console.log('test')
        $('#gameOverPosition').css({visibility: 'hidden'});
        $('#gameOverScreen').css({visibility: 'hidden'});
        
        questionIndex = 0;
        numOfRightGuesses = 0;
        numOfWrongGuesses = 0;
        numOfTimesRunOut = 0;
        nextQuestion();
    }

// End ready
});