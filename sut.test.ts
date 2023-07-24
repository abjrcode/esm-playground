test('It should pass', async () => {
  const sut = await import('./sut')
  expect(sut.sut()).toBe(1)
})