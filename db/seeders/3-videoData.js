"use strict";

module.exports = {
  up: (
    queryInterface,
    Sequelize,
    randomDate = () => {
      const start = new Date(2020, 0, 1);
      const end = new Date();
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }
  ) => {
    return queryInterface.bulkInsert("Videos", [
      {
        title: "Learn JavaScript in 3 Hours!",
        description:
          "Everyone needs to know JavaScript. Be a pro in a few hours!",
        link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        languageId: 3,
        userId: 1,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Cool Projects in Python",
        description:
          "Get some experience with these awesome programming projects that use Python.",
        link: "https://www.youtube.com/watch?v=OXi4T58PwdM",
        languageId: 1,
        userId: 2,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Become a Gaming Dev with C++",
        description:
          "Used industry-wide, C++ is your window into the huge world of videogame making.",
        link: "https://www.youtube.com/watch?v=AwWD0XhLzbE",
        languageId: 2,
        userId: 3,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "C Programming for Beginners",
        description: "Take your first steps into the world of C!",
        link: "https://www.youtube.com/watch?v=8PopR3x-VMY",
        languageId: 9,
        userId: 4,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Intermediate Python Programming Course",
        description:
          "Ready to take your Python skills further? Check out this video course!",
        link: "https://www.youtube.com/watch?v=HGOBQPFzWKo",
        languageId: 1,
        userId: 5,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "C++ for Beginners",
        description: "Become a C++ programmer in no time!",
        link: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
        languageId: 2,
        userId: 9,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "C++ From the Basics to the Advanced",
        description:
          "Whether you're a beginner or looking to advance your existing skills, this C++ tutorial is perfect.",
        link: "https://www.youtube.com/watch?v=mUQZ1qmKlLY",
        languageId: 2,
        userId: 12,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "CSS isn't fun, but You've Gotta Learn It",
        description: "Here's a video that might help!",
        link: "https://www.youtube.com/watch?v=iHEkRIF7zxI",
        languageId: 10,
        userId: 12,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Learn FORTRAN in One Video",
        description:
          "Meet the first programming language. I promise, it's still being used.",
        link: "https://www.youtube.com/watch?v=__2UgFNYgf8",
        languageId: 5,
        userId: 10,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Coding for Physics - Dot Products in Python",
        description:
          "If you're like me and hate doing dot products, you should check out this video! ",
        link: "https://www.youtube.com/watch?v=1hm_NdnbsGg&t=1s",
        languageId: 1,
        userId: 9,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Swift in 3 Hours - Full Course",
        description:
          "Learn how to code in Swift and go through all of the core concepts. Swift is fast, powerful and intuitive.",
        link: "https://www.youtube.com/watch?v=comQ1-x2a1Q",
        languageId: 10,
        userId: 2,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "MATLAB for Scientists and Engineers",
        description:
          "Why take a 5 month course, when you can watch this video?",
        link: "https://www.youtube.com/watch?v=NSSTkkKRabI",
        languageId: 11,
        userId: 9,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Code-It-Yourself! Flappy Bird in C++",
        description:
          "This video shows an implementation of, sigh, Flappy Bird at the command prompt.",
        link: "https://www.youtube.com/watch?v=b6A4XHkTjs8",
        languageId: 2,
        userId: 6,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Basic SQL in 10 Minutes",
        description: "Check out the fancy logo!",
        link: "https://www.youtube.com/watch?v=bEtnYWuo2Bw",
        languageId: 14,
        userId: 3,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "5 Javascript Projects to Build",
        description: "Here's a video that might help!",
        link: "https://www.youtube.com/watch?v=roumzWd4XJU",
        languageId: 3,
        userId: 12,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `Check out this cool Video on Python!`,
        description: "This video really helped me learn!",
        link:
          "https://www.youtube.com/watch?v=rfscVS0vtbw&t=2707s&ab_channel=freeCodeCamp.org",
        languageId: 1,
        userId: 1,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `This is a really good video on C++!`,
        description: "I really recommend this video!",
        link:
          "https://www.youtube.com/watch?v=vLnPwxZdW4Y&ab_channel=freeCodeCamp.org",
        languageId: 2,
        userId: 2,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `This is a great video on Javascript!`,
        description: "This was a great resource!",
        link:
          "https://www.youtube.com/watch?v=rfscVS0vtbw&t=2707s&ab_channel=freeCodeCamp.org",
        languageId: 3,
        userId: 3,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `This video on Java was almost as good as a cup of coffee!`,
        description: "What a great video!",
        link:
          "https://www.youtube.com/watch?v=eIrMbAQSU34&ab_channel=ProgrammingwithMosh",
        languageId: 4,
        userId: 4,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `What the heck is Fortran? Let's find out!`,
        description: "It's cool to see the world's first programming language!",
        link:
          "https://www.youtube.com/watch?v=7BbE5C7cek8&ab_channel=ConfianceLabs",
        languageId: 5,
        userId: 5,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `C# isn't just a key on a piano!`,
        description: "This would be a really good language to learn!",
        link:
          "https://www.youtube.com/watch?v=GhQdlIFylQ8&ab_channel=freeCodeCamp.org",
        languageId: 6,
        userId: 6,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `Want to C a really good programming video?`,
        description: "This video helped me a lot!",
        link:
          "https://www.youtube.com/watch?v=KJgsSFOSQv0&ab_channel=freeCodeCamp.org",
        languageId: 7,
        userId: 7,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `This video will help you SWIFT-ly learn!`,
        description: "This video was very informative!",
        link:
          "https://www.youtube.com/watch?v=FcsY1YPBwzQ&ab_channel=CodeWithChris",
        languageId: 8,
        userId: 8,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `HTML crash course`,
        description: "Very helpful!",
        link:
          "https://www.youtube.com/watch?v=UB1O30fR-EE&ab_channel=TraversyMedia",
        languageId: 9,
        userId: 9,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `Learn CSS in 20 minutes! Any more time is too painful`,
        description: "What a super fantastic amazing language!",
        link:
          "https://www.youtube.com/watch?v=1PnVor36_40&ab_channel=WebDevSimplified",
        languageId: 10,
        userId: 10,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `MATLAB tutorial - it isn't a guy named Mat in a lab`,
        description: "This is good for math stuff!",
        link:
          "https://www.youtube.com/watch?v=qGiKv3-02vw&ab_channel=JosephDelgadillo",
        languageId: 11,
        userId: 11,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `PHP is a great language to know!`,
        description: "Here's a video on it!",
        link:
          "https://www.youtube.com/watch?v=XBj_le81sAc&ab_channel=DaniKrossing",
        languageId: 12,
        userId: 12,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `This video on Ruby is a real gem`,
        description: "This video was very helpful and informative.",
        link:
          "https://www.youtube.com/watch?v=XBj_le81sAc&ab_channel=DaniKrossing",
        languageId: 13,
        userId: 13,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `Here's a video on SQL, the programming language you have to yell at`,
        description: "Caps lock just seems so aggressive",
        link:
          "https://www.youtube.com/watch?v=HXV3zeQKqGY&ab_channel=freeCodeCamp.org",
        languageId: 14,
        userId: 1,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `This video is on PostgreSQL`,
        description: "Extremely helpful!",
        link:
          "https://www.youtube.com/watch?v=qw--VYLpxG4&ab_channel=freeCodeCamp.org",
        languageId: 15,
        userId: 2,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `This video was very helpful!`,
        description: "This was very helpful for learning Visual Basic",
        link:
          "https://www.youtube.com/watch?v=3FkWddODLno&ab_channel=DerekBanas",
        languageId: 16,
        userId: 3,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: `Here is a tutorial on Scala`,
        description: "This video was very informative!",
        link:
          "https://www.youtube.com/watch?v=DzFt0YkZo8M&ab_channel=DerekBanas",
        languageId: 17,
        userId: 4,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Videos", null, {});
  },
};
