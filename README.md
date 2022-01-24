In this assignment we are creating a Password Generator.
The Password Generator works as such.
GIVEN I need a new, secure password
When I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
When prompted for password criteria
THEN I select which criteria to include in the password
When prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
When asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
When I answer each prompt
THEN my input should be validated and at least one character type should be selected
When all prompts are answered
THEN a password is generated that matches the selected criteria
When the password is generated
THEN the password is either displayed in an alert or written to the page.