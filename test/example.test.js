// IMPORT MODULES under test here:
import { renderTeam } from '../render-utils.js';

// import { example } from '../example.js';

const test = QUnit.test;

test('Gets a div element of name, and score', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = Div;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTeam('Team', 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(`${actual}`, `${expected}`, 'This will get a div element');
});
