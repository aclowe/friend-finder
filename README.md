# friend-finder

**Deployed Link:  : https://quiet-ocean-50941.herokuapp.com/

*Friend Finder is an interactive dating application consisting of HTML, CSS, and Javacript (node.js and express).

### Instructions
1. The user begins at the homepage ("url/"). Upon clicking "start," the user is directed to a survey ("url/survey").

2. The survey requests basic information (name, link to a photograph, and a headline) followed by 10 questions in which the user rates their agreeance with each statements on a scale from 1 ("Not at all me") to 5 ("Exactly like me").

3. Upon submitting the survey, the user is matched with the most compatible friend in the database and a modal appears with the match's name and photograph.

- The match is calculated by converting the user's scores for each of the 10 survey questions into an array. Each number in this array is then compared to the same array for all current friends in the database. The friend with the least total difference in scores is the match.
