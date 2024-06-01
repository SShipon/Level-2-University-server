import express from 'express';
import validateRequest from '../../middleware/validRequest';
import { AcademicSemesterControllers } from './academicSemester.controller';
import { AcademicSemesterValidations } from './academicSemester.validation';

const router = express.Router();
//1. create semester
router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema
  ),
  AcademicSemesterControllers.createAcademicSemester
);
//2.getAll semester
router.get(
  '/',
  AcademicSemesterControllers.getAllAcademicSemester
);
//3.get single semester by id
router.get('/:semesterId', AcademicSemesterControllers.getSingleAcademicSemester);
export const AcademicSemesterRoutes = router;