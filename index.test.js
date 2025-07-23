const { getUserById, calculateAge, formatUserList } = require('./index');

describe('User API Functions', () => {

  // TEST 1: Test the getUserById function
  describe('getUserById', () => {
    /* 
    STUDENT INSTRUCTIONS:
    Write tests for the getUserById function. Consider these test cases:
    - Valid ID (0-9) should return the correct name
    - Invalid ID (negative, too large, non-numeric) should return null
    - Edge cases like string IDs that can be parsed vs cannot be parsed
    
    Example test structure:
    test('should return correct user for valid ID', () => {
      // Your test code here
      // Use expect(getUserById(0)).toBe('Amy');
    });
    */

    // TODO: Write your tests here

  });

  // TEST 2: Test the calculateAge function  
  describe('calculateAge', () => {

    /*
    STUDENT INSTRUCTIONS:
    Write tests for the calculateAge function. Consider these test cases:
    - Valid birth year should return correct age
    - Test with current year (age should be 0)
    - Test with a known year (e.g., if current year is 2024, birth year 2000 should return 24)
    
    Hint: You might need to mock the current year or use a known year for consistent testing
    
    Example:
    test('should calculate correct age', () => {
      // Your test code here
    });
    */

    // TODO: Write your tests here

  });

  // TEST 3: Test the formatUserList function
  describe('formatUserList', () => {

    /*
    STUDENT INSTRUCTIONS:
    Write tests for the formatUserList function. Consider these test cases:
    - Should return a string with all users formatted as "index: name"
    - Should join users with commas and spaces
    - Should include all 10 users from the nameList
    
    Example:
    test('should format user list correctly', () => {
      const result = formatUserList();
      expect(result).toContain('0: Amy');
      expect(result).toContain('9: Jack');
      // Add more assertions
    });
    */

    // TODO: Write your tests here

  });

});

/*
ADDITIONAL CHALLENGES (Optional):
1. Add tests for edge cases you can think of
2. Try to achieve 100% test coverage
3. Add tests that verify the functions work together correctly
4. Research and try using Jest matchers like toContain, toMatch, toBeNull, etc.

TO RUN TESTS:
npm test

JEST MATCHERS YOU MIGHT FIND USEFUL:
- expect(value).toBe(expected) - for exact equality
- expect(value).toEqual(expected) - for object/array equality  
- expect(value).toBeNull() - checks if value is null
- expect(value).toContain(item) - checks if string/array contains item
- expect(value).toMatch(regex) - checks if string matches regex
*/
