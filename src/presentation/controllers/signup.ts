import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missingParamError'
import { badRequest } from '../helpers/httpHelper'
export class SingUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    } else if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    } else {
      return {
        statusCode: 200,
        body: {}
      }
    }
  }
}
