/**
 * Follow the list of student below, try to get and print to the console the student(s) that satified the conditions:
 * 
 * 1. Print the list of student with the full-name (fistname lastName)
 * 
 * 2. Print the list of student with the full-name by this format firstName middleName lastName, if the middleName is undefined, use the genre to populate the middle name:
 * Ex: 
 * {
        id: 16,
        firstName: 'Nhat',
        lastName: 'Nguyen',
        middleName: 'Minh',
        birthdate: '1990-01-21',
        isMale: true,
        scores: {
            math: 5,
            word: 6,
            excel: 9
        }
    } -> Nguyen Minh Nhat

    {
        id: 56,
        firstName: 'Thoai',
        lastName: 'Tran',
        birthdate: '1993-11-25',
        isMale: false, // middleName is Thi
        scores: {
            math: 6,
            word: 6,
            excel: 6
        }
    } -> Tran Thi Thoai

    {
        id: 4,
        firstName: 'Hao',
        lastName: 'Huynh',
        birthdate: '1985-06-09',
        isMale: true, // middleName is Minh
        scores: {
            math: 9,
            word: 9,
            excel: 9
        }
    }

    3. Print the student has the avarage score is highest and lowest as format:
    The best student is Nguyen Van A with 9.5 score
    The worst student is Nguyen Van B with 3.3 score

    4. Sort the list of student by the id with 2 way Acending and Descending and print it out with the id and average score only

    5. Print out the list of student (full fields) without the best and the worst student

    6. Print the student has the age is highest and lowest as format:
    The youngest: Nguyen Van A - 25 year olds
    The youngest: Nguyen Van B - 100 year olds

 */

const studentList = [
    {
        id: 16,
        firstName: 'Nhat',
        lastName: 'Nguyen',
        middleName: 'Minh',
        birthdate: '1990-01-21',
        isMale: true,
        scores: {
            math: 5,
            word: 6,
            excel: 9
        }
    },
    {
        id: 24,
        firstName: 'Hanh',
        lastName: 'Nguyen',
        middleName: 'Thi Duc',
        birthdate: '1990-06-24',
        isMale: false,
        scores: {
            math: 7,
            word: 7,
            excel: 7
        }
    },
    {
        id: 56,
        firstName: 'Thoai',
        lastName: 'Tran',
        birthdate: '1993-11-25',
        isMale: false,
        scores: {
            math: 6,
            word: 6,
            excel: 6
        }
    },
    {
        id: 4,
        firstName: 'Minh',
        lastName: 'Nguyen',
        birthdate: '1983-06-09',
        isMale: true,
        scores: {
            math: 9,
            word: 9,
            excel: 9
        }
    },
    {
        id: 69,
        firstName: 'Tai',
        lastName: 'Do',
        birthdate: '1994-06-09',
        isMale: false,
        scores: {
            math: 6.9,
            word: 6.9,
            excel: 6.9
        }
    }
];