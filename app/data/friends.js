// friends currently in database (these user's scores will be compared against the newFriend's scores to determine the bestMatch)
var friends = [
    {
      name: "Debbie Downer",
      photo: "https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ec06066b4e67eac5adb24031ed8b009&auto=format&fit=crop&w=1050&q=80",
      about: "This is never going to work.",
      scores: [1, 4, 5, 2, 5, 5, 1, 1, 1, 2]
    },
    {
      name: "Chatty Kathy",
      photo: "https://images.unsplash.com/photo-1472746729193-36ad213ac4a5?ixlib=rb-0.3.5&s=2de2745ecdb36b499519fdb74c6191d0&auto=format&fit=crop&w=1050&q=80",
      about: "Someone please talk to me.",
      scores: [1, 2, 3, 1, 5, 2, 5, 2, 4, 3]
    },
    {
        name: "Pessemistic Pat",
        photo: "https://images.unsplash.com/photo-1509942371272-a61e1ec6c1a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1544765fe04e112a399b0c43337180dd&auto=format&fit=crop&w=934&q=80",
        about: "It doesn't matter anyways.",
        scores: [1, 4, 3, 4, 5, 4, 4, 3, 1, 3]
      },
    {
        name: "Slick Rick",
        photo: "https://images.unsplash.com/photo-1487793433179-ce0b55eda342?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=725b6bea097a2a75c43279fe2f437cc4&auto=format&fit=crop&w=1050&q=80",
        about: "(Insert slick comment here)",
        scores: [1, 4, 3, 4, 5, 4, 4, 3, 1, 3]
      },
      {
        name: "Mad Max",
        photo: "https://images.unsplash.com/photo-1527949888006-7e322f595b35?ixlib=rb-0.3.5&s=5ff4925fec1a59f07ad214b1e3bd08da&auto=format&fit=crop&w=934&q=80",
        about: "Don't call me.",
        scores: [2, 5, 2, 4, 5, 5, 4, 1, 2, 2]
      },
      {
        name: "Nervous Nelly",
        photo: "I don't give out my pictures - and you shouldn't either. It makes me nervous.",
        about: "No one told me I would have to talk about myself :(",
        scores: [3, 5, 1, 4, 5, 2, 5, 5, 2, 1]
    },
    {
        name: "Angry Ale",
        photo: "https://images.unsplash.com/photo-1528089129176-3dd4a57f6461?ixlib=rb-0.3.5&s=9829406b5d3dc62cbe417b1751b540de&auto=format&fit=crop&w=1055&q=80",
        about: "EEEERRRRRGGGG!",
        scores: [3, 5, 1, 1, 5, 2, 5, 5, 2, 2]
    },
    ];

  module.exports = friends;