const { AuthenticationError } = require("apollo-server-express");
const { User, Order } = require("../models");

const { signToken } = require("../utils/auth");
const stripe = require("stripe")(
  sk_test_51JtQQtBO4p1JC18pSGrJ6b2zeNMyojxw2LdiT2ZiGPmxm2hSAWST7sWLlkdz7wvIWjMJ4PC5lEc6O9wXKqDgpJ8V00PMCdvzzL
);

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        user.orders.sort((a, b) => b.date - a.date);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args.user);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, context) => {
      console.log(context);

      if (context.user) {
        const order = new Order({});

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("INcorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
