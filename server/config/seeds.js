const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Full Stack Web Application Development" },
    { name: "Computer science" },
    { name: "Python" },
    { name: "Cybersecurity" },
    { name: "Digital Marketing" },
    { name: "Bonus Courses" },
    { name: "Subscription" }
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "HTML / CSS / JavaScript / Bootstrap",
      description: "If you think of a web application like a car, the frame would be HTML, the body panels and wheels would be CSS, and the engine would be JavaScript. By themselves, each offers very little utility, but together they are powerful. As an aspiring web developer you will need to master each of these languages, and this course will show you how. We will even introduce you to the Bootstrap library that will help simplify the development process and take your applications to the next level!",
      image: "big3.png",
      category: categories[0]._id,
      price: 598.87,
      quantity: 40,
    },
    {
      name: "SQL / MongoDB",
      description: "We live in a data driven world. As a full stack developer, you will need to build back end databases that can manage and serve data on demand. This course will teach you how to build robust back ends using relational database languages like SQL and MongoDB, as well as show you the differences between the two and in which situations each should be used.",
      image: "sqlmongoo.png",
      category: categories[0]._id,
      price: 598.87,
      quantity: 500,
    },
    {
      name: "MVC / PWA / MERN",
      category: categories[0]._id,
      description: "The file count in modern websites can number in the thousands, and users' performance expectations continue to increase. As a successful programmer, you will need experience using methods and frameworks that can organize complex file structures while being able to deliver high quality user experiences - This is where the Model, View, Controller pattern, Progressive Web Application, and MERN (MongoDB, Express, React, Node) stack come in. We will show you how to build several full stack social media style applications using all of these technologies. While extremely challenging, this experience will define your status as a legitimate full stack web developer!",
      image: "mern.png",
      price: 598.87,
      quantity: 20,
    },
    {
      name: "Computer Science",
      category: categories[1]._id,
      description: "To be a successful programmer, understanding how, where, and why computer memory is allocated is critical. This course will teach you the priciples of memory allocation, state, and how the stack and heap functions. You will also learn about various sorting algorithms and when to use them, as well as how and when to use regular expressions (regex).",
      image: "computerscience.jpg",
      price: 249.99,
      quantity: 50,
    },
    {
      name: "Beginners guide to C++ and machine code compiling",
      category: categories[1]._id,
      description: "This challenging course will teach you how to write complex algorithims and programs in C++. You will also learn how to write C++ code that can be compiled into machine code that will control devices like the Raspberry Pi and ATtiny85.",
      image: "cpluslogo.svg",
      price: 249.99,
      quantity: 100,
    },
    {
      name: "Python",
      category: categories[2]._id,
      description: "Python is a popular, all purpose, versatile programming language that's usage is steadily increasing. We will show you how to use Python for web development, data analysis, automation, and even build chat bots!",
      image: "pythonlogo.png",
      price: 399.99,
      quantity: 30,
    },
    {
      name: "Python - Machine Learning",
      category: categories[2]._id,
      description: "Data-driven decision makers are in high demand, this course will teach to how to become one. You will begin learning the basics of data science, and by the end of the course you will be able to create models that can automate data processes, recognize patterns, and even make autonomous decisions.",
      image: "pythonML.jpg",
      price: 199.99,
      quantity: 30,
    },
    {
      name: "Cybersecurity",
      category: categories[3]._id,
      description: "Cybersecurity experts are in high demand. We will equip you with the tools and knowledge to compete in this growing field. In this course you will learn Microsoft security, Linux security, computer networking, cloud security, cyber infrastructure technology, ethical hacking, digital forensics, incident response and threat hunting. At the end of the course you will even have the opportunity to compete against other students for cyber supremacy in a real time attack and defense simulation!",
      image: "cybersecurity.jpg",
      price: 329.85,
      quantity: 100,
    },
    {
      name: "Digital Marketing",
      category: categories[4]._id,
      description: "You will learn how to create and launch a successful marketing strategy, including business planning, user acquisition, digital advertising, content development, user retention and search engine optimization. You will also gain experience using popular tools like Google Analytics, Google Ads, and WordPress.",
      image: "digitalmarketing.jpg",
      price: 499.99,
      quantity: 1000,
    },
    {
      name: "Introduction to Linux",
      category: categories[5]._id,
      description: "Linux is a stable efficient, and secure open source operating system that is favored by many developers. Linux is used in many applications ranging from servers to mainframes, even automobiles! In this course we will focus on Linux Ubuntu, but by the end of the course you will learn everything you need to know to navigate any Linux version.",
      image: "linuxlogo.png",
      price: 195.49,
      quantity: 1000,
    },
    {
      name: "Beginners guide to Tails and TOR",
      category: categories[5]._id,
      description: "For penitration testing experts interested in adding to their ethical hacking arsenal, we will explain the features and benefits of using the Tails Linux distribution in conjunction with the TOR network to create a totally secure testing environment. We will teach you how to use applications like Aircrack-ng, Hydra, and Hashcat in conjunction with Tails and TOR to compromise most conventional network security measures.",
      image: "tails.svg",
      price: 327.27,
      quantity: 100,
    },
    {
      name: "Introduction to Docker with Kubernetes",
      category: categories[5]._id,
      description: "No previous Docker experience is needed, we will teach you everything! By the end of the course you will know how to: Build a CI + CD pipeline from scratch, Use the Docker CLI to inspect and debug running containers, and learn the purpose and theory of Kubernetes by building a complex application",
      image: "dockerlogo.svg",
      price: 249.99,
      quantity: 600,
    },
    {
      name: "Subscription to Full Stack courses",
      category: categories[6]._id,
      description: "Unlock all courses in the Full Stack web development category for a low monthly price. This includes the 'HTML / CSS / JavaScript / Bootstrap' course, the 'SQL / MongoDB' course, and the 'MVC / PWA / MERN' stack course. Stand out from the competition by gaining real world skills.",
      image: "big3.png",
      price: 89.99,
      quantity: 600,
    },
    {
      name: "Subscription to Computer Science courses",
      category: categories[6]._id,
      description: "Unlock all courses in the Computer Science category for a low monthly price. This includes both the 'Computer Science' course and the 'Beginners guide to C++ and machine code compiling' course. Ace the interview by showing off your new algorthm skills and techniques.",
      image: "cpluslogo.svg",
      price: 89.99,
      quantity: 600
    },
    {
      name: "Subscription to Python courses",
      category: categories[6]._id,
      description: "Unlock all courses in the Python category for a low monthly price. This includes the 'Python' course and the 'Python - Machine Learning' course. Learn how to use Python for web development, data analysis, automation, and even build chat bots!",
      image: "pythonlogo.png",
      price: 89.99,
      quantity: 600
    }
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Audry",
    lastName: "Ford",
    email: "audryf@email.com",
    password: "password",
  });

  await User.create({
    firstName: "Derimar",
    lastName: "Gray",
    email: "derimarg@email.com",
    password: "password",
    orders: [
      {
        products: [
          products[0]._id,
          products[0]._id,
          products[1]._id,
          products[4]._id,
        ],
      },
    ],
  });

  await User.create({
    firstName: "Robert",
    lastName: "Atalla",
    email: "roba@email.com",
    password: "password",
  });

  await User.create({
    firstName: "George",
    lastName: "Mendoza",
    email: "georgem@email.com",
    password: "password",
  });

  console.log("users seeded");

  process.exit();
});
