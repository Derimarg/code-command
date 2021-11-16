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
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Full Stack Web Application Development",
      description: "description 1",
      image: "karen.jpg",
      category: categories[0]._id,
      price: 2.99,
      quantity: 40,
    },
    {
      name: "Full Stack Web Application Development",
      description: "description 2",
      image: "karen.jpg",
      category: categories[0]._id,
      price: 1.99,
      quantity: 500,
    },
    {
      name: "Full Stack Web Application Development",
      category: categories[0]._id,
      description: "description 3",
      image: "karen.jpg",
      price: 7.99,
      quantity: 20,
    },
    {
      name: "Computer Science",
      category: categories[1]._id,
      description: "description 4",
      image: "karen.jpg",
      price: 3.99,
      quantity: 50,
    },
    {
      name: "Computer Science",
      category: categories[1]._id,
      description: "description 5",
      image: "karen.jpg",
      price: 14.99,
      quantity: 100,
    },
    {
      name: "Python",
      category: categories[2]._id,
      description: "Python - COMPLETETHIS",
      image: "pythonlogo.png",
      price: 399.99,
      quantity: 30,
    },
    {
      name: "Python - Machine Learning",
      category: categories[2]._id,
      description: "Machine learning COMPLETETHIS",
      image: "pythonML.jpg",
      price: 199.99,
      quantity: 30,
    },
    {
      name: "Cybersecurity",
      category: categories[3]._id,
      description: "Cybersecurity COMPLETETHIS",
      image: "cybersecurity.jpg",
      price: 329.85,
      quantity: 100,
    },
    {
      name: "Digital Marketing",
      category: categories[4]._id,
      description: "Modern Guide to Digital Marketing COMPLETETHIS",
      image: "digitalmarketing.jpg",
      price: 499.99,
      quantity: 1000,
    },
    {
      name: "Introduction to Linux",
      category: categories[5]._id,
      description: "Introduction to Linux COMPLETETHIS",
      image: "linuxlogo.png",
      price: 195.49,
      quantity: 1000,
    },
    {
      name: "Beginners guide to Tails and TOR",
      category: categories[5]._id,
      description: "Beginners guide to Tails and TOR COMPLETETHIS",
      image: "tails.svg",
      price: 327.27,
      quantity: 100,
    },
    {
      name: "Introduction to Docker with Kubernetes",
      category: categories[5]._id,
      description: "Introduction to Docker with Kubernetes COMPLETETHIS",
      image: "dockerlogo.svg",
      price: 249.99,
      quantity: 600,
    },
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
