from textwrap import dedent
from random import randint
from functools import reduce
from control.either import Right, Left

# State :: [ [(Row, Col), Mark] ]

def isWin(state):
	turn = state[-1][1]

	rows = [list(map(lambda move: move[1],
					filter(lambda move: move[0][0] == row, state)))
			for row in range(3)]
	cols = [list(map(lambda move: move[1],
					filter(lambda move: move[0][1] == col, state)))
			for col in range(3)]
	diag = list(map(lambda move: move[1], 
					filter(lambda move: move[0][0] == move[0][1], state)))
	antidiag = list(map(lambda move: move[1],
					filter(lambda move: (move[0][0] + move[0][1]) == 2, state)))

	winnableSides = list(filter(lambda side: len(side) == 3, [*rows, *cols, diag, antidiag]))

	return reduce(lambda win,side: win or (list(side).count(turn) == len(side)),
				[False, *winnableSides])

getWinnerOrState = (lambda state: Left(f'{state[-1][1]} wins')
									if isWin(state) else 
									Right(state))

update = (lambda mark:
			lambda state:
				lambda pos:
					Left(f'Position Taken: ({pos[0]+1}, {pos[1]+1})')
					if list(map(lambda m: m[0], state)).count(pos) > 0
					else Right([*state, [pos, mark]]))


gameTurn = (lambda getNextMove: lambda mark:
					lambda nextTurn:
						lambda state:
							Left('Draw!') 
							if len(state) >= 9 else
							getNextMove(state)
							.chain(update(mark)(state))
							.chain(getWinnerOrState)
							.chain(nextTurn))


def formatState(state):
	grid = [[' ' for i in range(3)] for j in range(3)]
	for s in state:
		mark = s[1]
		row = s[0][0]
		col = s[0][1]
		grid[row][col] = mark

	return dedent(f"""
				 {grid[0][0]} | {grid[0][1]} | {grid[0][2]}
				-----------
				 {grid[1][0]} | {grid[1][1]} | {grid[1][2]}
				-----------
				 {grid[2][0]} | {grid[2][1]} | {grid[2][2]}
			""")


def getPos(state):
	print(formatState(state))

	toIntList = lambda arr: map(int, arr)
	filterEmptyStr = lambda arr: filter(lambda x: x != '', arr)

	plr = 'O' if len(state) > 0 and (state[-1][1] == 'X') else 'X'
	try:
		row, col = tuple(toIntList(filterEmptyStr(input(f'{plr} Move:\t').split())))
		if row < 1 or row > 3:
			return Left('Row position must be in range [1-3]')
		if col < 1 or col > 3:
			return Left('Column position must be in range [1-3]')
		return Right((row-1, col-1))
	except IndexError:
		return Left('Expected two integers: row col')
	except ValueError:
		return Left('Inputs must be integers')
	except:
		return Left('Something went wrong')


def getBotPos(state): # TODO
	return (randint(0, 2), randint(0, 2))


bot = gameTurn(lambda state: Right(getBotPos(state)))
player = gameTurn(getPos)

tutorial = gameTurn(lambda state: 
						Right(getBotPos(state))
							.map(lambda pos:
									print(f'{(len(state) == 0 or (state[-1][1] == "X")) and "O" or "X"} Move:\t{pos[0]+1} {pos[1]+1}')
									or pos))

def multiplayer(state):
	plr1 = player('X')(lambda state: plr2(state))
	plr2 = player('O')(lambda state: plr1(state))
	return plr1([]) # X starts off

def singleplayer(state):
	plr1 = player('X')(lambda state: plr2(state))
	plr2 = bot('O')(lambda state: plr1(state))
	return plr2([]) # Bot starts off

def example(state):
	plr1 = tutorial('X')(lambda state: print(formatState(state)) or plr2(state))
	plr2 = tutorial('O')(lambda state: print(formatState(state)) or plr1(state))
	return plr1([]) # X starts off


def main():
	mode = input(f'Game Mode \n\t| [M]ulti \n\t| [S]ingle \n\t| [E]xample) \n~>\t').upper()
	if mode == 'M':
		print(multiplayer([]))
	elif mode == 'S':
		print(singleplayer([]))
	elif mode == 'E':
		print(example([]))
	else:
		print('Invalid Game Mode')


if __name__ == '__main__':
	main()