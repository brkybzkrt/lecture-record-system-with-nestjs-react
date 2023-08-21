import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from '../student.service';

describe('StudentService', () => {
  let studentService: StudentService;

  const mockStudentRepository = {
    findAll: jest.fn(),
    findById: jest.fn(),
    findByCode: jest.fn(),
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentService,
        {
          provide: 'STUDENT_REPOSITORY',
          useValue: mockStudentRepository,
        },
      ],
    }).compile();

    studentService = module.get<StudentService>(StudentService);
  });

  describe('findById', () => {
    it('should return a student by ID', async () => {

      const mockStudent = {
        _id: "123123",
        firstName: 'John',
        lastName: 'Doe'
      };
      
      mockStudentRepository.findById.mockResolvedValue(mockStudent);

      const result = await studentService.findById("123123");

      expect(result).toEqual(mockStudent);
      expect(mockStudentRepository.findById).toHaveBeenCalledWith('123123');
    });
  });


  describe('findAll', () => {
    it('should return students', async () => {
      const mockStudents =[{
        _id: "123123",
        firstName: 'John',
        lastName: 'Doe'
      }] ;
      mockStudentRepository.findAll.mockResolvedValue(mockStudents);

      const result = await studentService.findAll();

      expect(result).toEqual(mockStudents);
      expect(result).not.toEqual([]);

      expect(mockStudentRepository.findAll).toBeCalled();
    });
  });

  // Define more test cases for other methods like findAll, findByCode, etc.
});
