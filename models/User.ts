import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    provider: {
      type: String,
      required: false,
    },
    cart: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
        },
        size: {
          type: String,
        },
      },
    ],
    orders: [
      {
        purshasedMethod: {
          type: String,
        },
        products: [
          {
            productId: {
              type: String,
            },
            quantity: {
              type: Number,
            },
            size: {
              type: String,
              required: false,
            },
          },
        ],
        total: {
          type: Schema.Types.Decimal128,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default models.User || model('User', userSchema);
