class Left:
	__slots__ = ('_v', )

	def __repr__(self):
		return f'Left({self._v})'

	def __init__(self, value=None):
		self._v = value

	def map(self, fn):
		return self

	def chain(self, fn):
		return self

	def ap(self, b):
		return self


class Right:
	__slots__ = ('_v', )

	def __repr__(self):
		return f'Right({self._v})'

	def __init__(self, value=None):
		self._v = value

	def map(self, fn):
		return Right(fn(self._v))

	def chain(self, fn):
		return fn(self._v)

	def ap(self, b):
		if isinstance(b, Left): return b
		return Right(b._v(self._v))


isLeft = lambda x: isinstance(x, Left)
isRight = lambda x: isinstance(x, Right)
