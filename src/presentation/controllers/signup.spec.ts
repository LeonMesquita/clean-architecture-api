import { SingUpController } from './signup'
describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SingUpController()
    const httpRequest = {
      email: 'any_email@mail.com',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
  test('Should return 400 if no email is provided', () => {
    const sut = new SingUpController()
    const httpRequest = {
      name: 'any_name',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: email'))
  })
})

// Primeiro commitar sempre o arquivo de produção e depois o de teste
// git add src/presentation/controllers/signup.ts
