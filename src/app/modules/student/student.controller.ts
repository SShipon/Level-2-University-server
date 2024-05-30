import {  NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from "./student.service";
import studentValidationSchema from "./student.validation";
import catchAsync from '../../utils/catchAsync';




//3. GET single student by ID
const getSingleStudent = catchAsync(async (req, res) => {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    //send single get response bt ID
    //send post response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'single student is retrieved successfully',
      data: result,
    });
});




//2. GET controller
const getAllStudents = catchAsync(async (req,res) => {
    const result = await StudentServices.getAllStudentsFromDB();
    //send get response
     sendResponse(res, {
       statusCode: httpStatus.OK,
       success: true,
       message: 'Students are retrieved successfully',
       data: result,
     });
 
});




const deleteStudent = catchAsync( async (req,res) => {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'student is deleted successfully',
      data: result,
    });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent
};






//1. POST controller
// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const { student: studentData } = req.body;

//     //zod validation start
//     const zodparseData = studentValidationSchema.parse(studentData);

//     //for zod
//     const result = await StudentServices.createStudentIntoDB(zodparseData);
//     //zod validation end




//     //will call service function to send this data
//     // const result = await StudentServices.createStudentIntoDB(studentData); //for original model
//     //send post response
//     res.status(200).json({
//       success: true,
//       message: 'Student is created successfully',
//       data: result,
//     });
//   } catch (err) {
//      res.status(500).json({
//        success: false,
//        message: 'Something went wrong',
//        error: err,
//      });
//   }
// };