const db = require("./connection");
const { User }
db.once("open", async () => {
    await User.deleteMany();

    await User.create({
        firstName: "Derimar",
        lastName: "Gray",
        email: "derimarg@email.com",
        password: "password",
        orders: []
    });

    await User.create({
        firstName: "Rob",
        lastName: "Atalla",
        email: "Roba@email.com",
        password: "password",
        orders: []
    });

    await User.create({
        firstName: "Audry",
        lastName: "Ford",
        email: "audryf@email.com",
        password: "password",
    });

    console.log("users seeded");

    process.exit();
});
