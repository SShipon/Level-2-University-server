import { model, Schema } from 'mongoose';
import {
  academicSemesterCode,
  academicSemesterName,
  months,
} from './academicSemester.constant';
import { AcademicSemester } from './academicSemester.interface';

const academicSemesterSchema = new Schema<AcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: academicSemesterName,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: months,
    },
  },
  {
    timestamps: true,
  }
);

// With this setup, Mongoose will enforce the condition that only two fall semesters can be created in the year 2030. If you attempt to save a third fall semester for that year, Mongoose will throw an error.

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemesterModel.findOne({
    //this er user Mudde data pabo
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error('Semester is already Exists sorry for that !!!');
  }
  next();
});



// academicSemesterSchema.pre<AcademicSemester>('save', async function (next) {
//   // Check if the semester is 'Fall' and year is '2030'
//   if (this.name === 'Fall' && this.year === '2030') {
//     // Count existing fall semesters for the year 2030
//     const count = await AcademicSemesterModel.countDocuments({
//       name: 'Fall',
//       year: '2030',
//     });

//     // If there are already two fall semesters, prevent saving
//     if (count >= 2) {
//       const error = new Error('Only two fall semesters are allowed per year.');
//       next(error);
//     }
//   }
//   next();
// });





// 3. Create a Model.
export const AcademicSemesterModel = model<AcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema
);
