import CounterSchema, { Counter } from './counter.schema';
import AppointmentSchema, { Appointment } from './appointment.schema';
import ClassSessionSchema, { ClassSession } from './class-session.schema';
import UserSchema, { User } from './user.schema';
import BookingSchema, { Booking } from './booking.schema';
import UploadSchema, { Upload } from './upload.schema';

export default [
  CounterSchema,
  AppointmentSchema,
  ClassSessionSchema,
  UserSchema,
  BookingSchema,
  UploadSchema
];

export { Counter, Appointment, ClassSession, User, Booking, Upload };
