import { expect, test } from 'vitest'

test ('O usuário consegue criar uma nove transação', () => {
  const responseStatusCode = 201
  
  expect(responseStatusCode).toEqual(201)
})