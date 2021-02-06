"use strict";

module.exports = {
  up: (queryInterface, Sequelize,
    randomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * 
      (end.getTime() - start.getTime()));
  },) => {
    return queryInterface.bulkInsert("Videos", [
      {
        title: "Learn JavaScript in 3 Hours!",
        description: "Everyone needs to know JavaScript. Be a pro in a few hours!",
        link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        languageId: 3,
        userId: 1,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Cool Projects in Python",
        description: "Get some experience with these awesome programming projects that use Python.",
        link: "https://www.youtube.com/watch?v=OXi4T58PwdM",
        languageId: 1,
        userId: 2,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Become a Gaming Dev with C++",
        description: "Used industry-wide, C++ is your window into the huge world of videogame making.",
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
        description: "Ready to take your Python skills further? Check out this video course!",
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
        description: "Whether you're a beginner or looking to advance your existing skills, this C++ tutorial is perfect.",
        link: "https://www.youtube.com/watch?v=mUQZ1qmKlLY",
        languageId: 2,
        userId: 12,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "No One Likes CSS, but You've Gotta Learn It",
        description: "I know, just take your medicine.",
        link: "https://www.youtube.com/watch?v=iHEkRIF7zxI",
        languageId: 10,
        userId: 12,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Learn FORTRAN in One Video",
        description: "Meet the first programming language. I promise, it's still being used.",
        link: "https://www.youtube.com/watch?v=__2UgFNYgf8",
        languageId: 5,
        userId: 10,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Coding for Physics - Dot Products in Python",
        description: "If you're like me and hate doing dot products, you should check out this video! ",
        link: "https://www.youtube.com/watch?v=1hm_NdnbsGg&t=1s",
        languageId: 1,
        userId: 9,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Swift in 3 Hours - Full Course",
        description: "Learn how to code in Swift and go through all of the core concepts. Swift is fast, powerful and intuitive.",
        link: "https://www.youtube.com/watch?v=comQ1-x2a1Q",
        languageId: 10,
        userId: 2,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "MATLAB for Scientists and Engineers",
        description: "Why take a 5 month course, when you can watch this video?",
        link: "https://www.youtube.com/watch?v=NSSTkkKRabI",
        languageId: 11,
        userId: 9,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
      {
        title: "Code-It-Yourself! Flappy Bird in C++",
        description: "This video shows an implementation of, sigh, Flappy Bird at the command prompt.",
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
        description: "I know, just take your medicine.",
        link: "https://www.youtube.com/watch?v=roumzWd4XJU",
        languageId: 3,
        userId: 12,
        createdAt: randomDate(),
        updatedAt: randomDate(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Videos", null, {});
  },
};
