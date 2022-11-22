import { HttpResponse, HttpRequest } from '../protocols/http'
export class SingUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    } else if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    } else {
      return {
        statusCode: 200,
        body: {}
      }
    }
  }
}
