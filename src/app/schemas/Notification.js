import mongoose from 'mongoose';
import { roundToNearestMinutesWithOptions } from 'date-fns/fp';

const NotificationsSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Notification', NotificationsSchema);
