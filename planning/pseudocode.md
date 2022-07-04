grid object, 3x3


On start of game/new game, (click of restart game button), run rendering function

RENDERING:
1 prompt free, so other 8 will have prompts pulled from array
For each one, add inner text of a value of the array at random. 

Check if the ones chosen are the same anywhere else on the board (to make sure no duplicates)
(loops)

MARKING SQUARE:
MVP: function to add class of "marked" to ones that are clicked on
stretch: animations, transitions


CHECK WIN:
MVP: alert, ask to play again
stretch: modal/effects,
if 3 in a row horizontally vertically have class of marked
Winning combinations:
sq 1, sq 2, sq 3
sq 4, sq 5, sq 6
sq 7, sq 8, sq 9
sq 1, sq 4, sq 7
sq 2, sq 5, sq 8
sq 3, sq 6, sq 9

IF
if have win, alert win and offer to replay
if not, continue

