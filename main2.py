# The function localize takes the following arguments:
#
# colors:
#        2D list, each entry either 'R' (for red cell) or 'G' (for green cell)
#
# measurements:
#        list of measurements taken by the robot, each entry either 'R' or 'G'
#
# motions:
#        list of actions taken by the robot, each entry of the form [dy,dx],
#        where dx refers to the change in the x-direction (positive meaning
#        movement to the right) and dy refers to the change in the y-direction
#        (positive meaning movement downward)
#        NOTE: the *first* coordinate is change in y; the *second* coordinate is
#              change in x
#
# sensor_right:
#        float between 0 and 1, giving the probability that any given
#        measurement is correct; the probability that the measurement is
#        incorrect is 1-sensor_right
#
# p_move:
#        float between 0 and 1, giving the probability that any given movement
#        command takes place; the probability that the movement command fails
#        (and the robot remains still) is 1-p_move; the robot will NOT overshoot
#        its destination in this exercise
#
# The function should RETURN (not just show or print) a 2D list (of the same
# dimensions as colors) that gives the probabilities that the robot occupies
# each cell in the world.
#
# Compute the probabilities by assuming the robot initially has a uniform
# probability of being in any cell.
#
# Also assume that at each step, the robot:
# 1) first makes a movement,
# 2) then takes a measurement.
#
# Motion:
#  [0,0] - stay
#  [0,1] - right
#  [0,-1] - left
#  [1,0] - down
#  [-1,0] - up
import random
def generate(x,y,values):
    q = []
    for r in range(x):
        a = []
        for c in range(y):
            a.append(random.choice(values))
        q.append(a)
    return q

def path(valueMap, moves):
    a = random.randint(0, len(valueMap))
    b = random.randint(0, len(valueMap[0]))
    start = [a,b]
    current = [a,b]
    motions = []
    measurements = []
    for moves in range(moves):
        a = random.choice([-1, 0, 1, 1, 1])
        b = random.choice([-1, 0, 1, 1, 1])
        current[0] = (current[0] + a) % len(valueMap)
        current[1] = (current[1] + b) % len(valueMap[0])
        motions.append([a,b])
        measurements.append(valueMap[current[0]][current[1]])
    return (current, motions, measurements, start)

def localize(valueMap, measurements, motions, sensor_right, p_move):
    # initializes p to a uniform distribution over a grid of the same dimensions as colors
    pinit = 1.0 / float(len(valueMap)) / float(len(valueMap[0]))
    p = [[pinit for row in range(len(valueMap[0]))] for col in range(len(valueMap))]

    for actions in range(len(measurements)):
        p = move(p, motions[actions], valueMap, p_move)
        p = sense(p, measurements[actions], valueMap, sensor_right)
        # show(p)
        # print('\n')

    return p
def move(p, moves, valueMap, p_move):
    q = []
    for rows in range(len(valueMap)):
        c = []
        for collums in range(len(valueMap[0])):
            a =  (collums+moves[1]) % (len(valueMap[0]) - 1)
            s = p[(rows-moves[0]) % (len(valueMap))][(collums - moves[1]) % (len(valueMap[0]))] * p_move + ((1 - p_move) * p[rows][collums])
            c.append(s)
        q.append(c)
    return q

def sense(p, measurement, valueMap, sensor_right):
    q = []
    sum = 0
    for rows in range(len(valueMap)):
        c = []
        for collums in range(len(valueMap[0])):
            hit = (measurement == valueMap[rows][collums])
            s = p[rows][collums] * (hit*sensor_right + (1-hit)*(1-sensor_right))
            c.append(s)
            sum += s
        q.append(c)
    for rows in range(len(valueMap)):
        for collums in range(len(valueMap[0])):
            q[rows][collums]= (q[rows][collums]/sum)
    return q


def show(p):
    rows = ['[' + ','.join(map(lambda x: '{0:.5f}'.format(x), r)) + ']' for r in p]
    print  ("[" + ',\n '.join(rows) + "]")

def printout(p):
    for rows in range(len(p)):
        print(p[rows])

def locate(p):
    max = 0
    maxLoc = []
    for rows in range(len(p)):
        for collums in range(len(p[0])):
            if p[rows][collums] > max:
                max = p[rows][collums]
                maxLoc = [rows, collums]
    return maxLoc, max

###################################################################################################
#                                 functions above, action below                                   #
###################################################################################################


values = ['R', 'O', 'Y', 'G', 'B', 'I', 'V']


valueMap1 = [['R', 'G', 'G', 'R', 'R', 'R', 'G', 'R'],
          ['R', 'R', 'G', 'R', 'R', 'R', 'G', 'R'],
          ['R', 'R', 'G', 'G', 'R', 'R', 'G', 'R'],
          ['R', 'R', 'R', 'G', 'R', 'R', 'G', 'R'],
          ['R', 'R', 'G', 'G', 'G', 'R', 'G', 'R'],
          ['R', 'R', 'R', 'R', 'G', 'R', 'G', 'R'],
          ['R', 'R', 'R', 'R', 'G', 'R', 'G', 'R'],
          ['R', 'R', 'R', 'R', 'R', 'G', 'G', 'G']]

correct = 0
wrong = 0
for times in range(10):
    valueMap = generate(10, 10, values)

    pathRes = path(valueMap, 15)
    end = pathRes[0]
    motions = pathRes[1]
    measurements = pathRes[2]
    start = pathRes[3]

    q = localize(valueMap, measurements, motions, sensor_right=.7, p_move=.7)

    if end == locate(q):
        correct += 1
    else:
        wrong += 1
    print(end)
    print (locate(q))
    print
    show(q)
print("\n\ncorrect: {} \nwrong: {} \nPercent right: {}".format(correct, wrong, (correct/(correct+wrong))*100))