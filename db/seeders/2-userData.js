"use strict";

module.exports = {
  up: (queryInterface, Sequelize,
    randomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() *
      (end.getTime() - start.getTime()));
  },) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          first_name: "Bill",
          last_name: "Gates",
          email: "billgates@microsoft.com",
          hashedPassword:
            "$2y$08$yRvoJ0WKbw9doOqFAd3YcuSvb2TBbsXTrII/VGNUbnSVvB.eS7W.K",
          bio: "Founder of Microsoft",
          username: "bill_gates",
          createdAt: randomDate(),
          updatedAt: randomDate(),
        },
        {
          first_name: "Steve",
          last_name: "Wozniak",
          email: "woz@apple.com",
          hashedPassword:
            "$2y$08$yRvoJ0WKbw9doOqFAd3YcuSvb2TBbsXTrII/VGNUbnSVvB.eS7W.K",
          bio: "Founder of Apple",
          username: "wozwoz",
          createdAt: randomDate(),
          updatedAt: randomDate(),
        },
        {
          first_name: "Ada",
          last_name: "Lovelace",
          email: "ada@lovelace.com",
          hashedPassword:
            "$2y$08$yRvoJ0WKbw9doOqFAd3YcuSvb2TBbsXTrII/VGNUbnSVvB.eS7W.K",
          bio: "History's first programmer",
          username: "lovelace",
          createdAt: randomDate(),
          updatedAt: randomDate(),
        },
        {
          first_name: "Margaret",
          last_name: "Hamilton",
          email: "marg@hamilton.com",
          hashedPassword:
            "$2y$08$yRvoJ0WKbw9doOqFAd3YcuSvb2TBbsXTrII/VGNUbnSVvB.eS7W.K",
          bio: "Made the 'small step for man' possible",
          username: "onesmallstep",
          createdAt: randomDate(),
          updatedAt: randomDate(),
        },
        {
          first_name: "Louis",
          last_name: "Pouzin",
          email: "lpouzin@internet.com",
          hashedPassword:
            "$2y$08$yRvoJ0WKbw9doOqFAd3YcuSvb2TBbsXTrII/VGNUbnSVvB.eS7W.K",
          bio: "The man who didn't invent the internet",
          username: "lpouzin",
          createdAt: randomDate(),
          updatedAt: randomDate(),
        },
        {
          first_name: "Larry",
          last_name: "Page",
          email: "larrypage@google.com",
          hashedPassword:
            "$2y$08$yRvoJ0WKbw9doOqFAd3YcuSvb2TBbsXTrII/VGNUbnSVvB.eS7W.K",
          bio: "Creator of Google",
          username: "googling_page",
          createdAt: randomDate(),
          updatedAt: randomDate(),
        },
        {
          first_name: "Karen",
          last_name: "Spaerck",
          email: "spaerck@ai.com",
          hashedPassword:
            "$2y$08$yRvoJ0WKbw9doOqFAd3YcuSvb2TBbsXTrII/VGNUbnSVvB.eS7W.K",
          bio: "Pioneer of Artificial Intelligence",
          username: "AIamI",
          createdAt: randomDate(),
          updatedAt: randomDate(),
        },
        {
          first_name: "Linus",
          last_name: "Torvalds",
          email: "linus@unix.com",
          hashedPassword:
            "$2y$08$yRvoJ0WKbw9doOqFAd3YcuSvb2TBbsXTrII/VGNUbnSVvB.eS7W.K",
          bio: "The father of Linux",
          username: "linuslinux",
          createdAt: randomDate(),
          updatedAt: randomDate(),
        },
        {
          first_name: "Alan",
          last_name: "Turing",
          email: "turingthemachine@turing.com",
          hashedPassword:
            "$2y$08$yRvoJ0WKbw9doOqFAd3YcuSvb2TBbsXTrII/VGNUbnSVvB.eS7W.K",
          bio:
            "Computer scientist, mathematician and logician who created the Turing machine.",
          username: "turing_the_machine",
          createdAt: randomDate(),
          updatedAt: randomDate(),
        },
        {
          first_name: "Vint",
          last_name: "Cerf",
          email: "vgc43@internet.com",
          hashedPassword:
            "$2y$08$yRvoJ0WKbw9doOqFAd3YcuSvb2TBbsXTrII/VGNUbnSVvB.eS7W.K",
          bio: "FI helped pioneer the Internet",
          username: "vgc43",
          createdAt: randomDate(),
          updatedAt: randomDate(),
        },
        {
          first_name: "Samarendra Kumar",
          last_name: "Mitra",
          email: "skmitra@india.com",
          hashedPassword:
            "$2y$08$yRvoJ0WKbw9doOqFAd3YcuSvb2TBbsXTrII/VGNUbnSVvB.eS7W.K",
          bio:
            "Designed, developed and constructed India's first indigenous computer in ISI in 1953.",
          username: "samkumitra",
          createdAt: randomDate(),
          updatedAt: randomDate(),
        },
        {
          first_name: "Melba Roy",
          last_name: "Mouton",
          email: "melba@nasa.com",
          hashedPassword:
            "$2y$08$yRvoJ0WKbw9doOqFAd3YcuSvb2TBbsXTrII/VGNUbnSVvB.eS7W.K",
          bio: "One of NASA's human computers",
          username: "human_computer",
          createdAt: randomDate(),
          updatedAt: randomDate(),
        },
        {
          first_name: "Demo",
          last_name: "User",
          email: "demo@demo.com",
          hashedPassword:
            "$2y$08$yRvoJ0WKbw9doOqFAd3YcuSvb2TBbsXTrII/VGNUbnSVvB.eS7W.K",
          bio: "Demo Bio",
          username: "demoUser",
          createdAt: randomDate(),
          updatedAt: randomDate(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
