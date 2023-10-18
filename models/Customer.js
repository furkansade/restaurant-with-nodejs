const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const CustomerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  password: {
    type: String,
    required: true,
  },
  permissions: {
    admin: {
      type: Boolean,
      default: false,
    },
  },
  orders: [
    {
      orderDate: {
        type: Date,
        required: true,
      },
      items: [
        {
          name: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
      totalAmount: {
        type: Number,
        required: true,
      },
      deliveryAddress: {
        street: {
          type: String,
        },
        city: {
          type: String,
        },
        state: {
          type: String,
        },
        postalCode: {
          type: String,
        },
        country: {
          type: String,
        },
      },
      status: {
        type: String,
        enum: ["Preparing", "On the way", "Delivered", "Canceled"],
        default: "Preparing",
      },
    },
  ],
  paymentMethods: [
    {
      cardType: {
        type: String,
      },
      cardNumber: {
        type: String,
      },
      expirationDate: {
        type: String,
      },
    },
  ],
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

CustomerSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
