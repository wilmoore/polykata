# Text Stream Processing (JavaScript)

> Takes a flat data file, greps for lines that include a question, extracts the text, keeps only questions that look like questions, upper-case the first letter of the question, and add a question mark.

## Example

    % cat stackoverflow.txt | node javascript

## Text

    % diff expected-output.txt <(cat stackoverflow.txt | node javascript) || echo 'FAILED'

