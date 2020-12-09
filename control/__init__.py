lift2 = lambda f,a,b: b.ap(a.map(f))

def curry(fn):
	argcount = fn.__code__.co_argcount
	if argcount == 0:
		return lambda : fn()
	unwrap = lambda f, argsleft, args: (
				(lambda x, *remainder: f(*args, x, *remainder))
				if argsleft == 1 else
				(lambda x: unwrap(f, argsleft-1, [*args, x]))
			)
	return unwrap(fn, argcount, [])