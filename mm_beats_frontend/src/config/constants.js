/* URLS */
export const API_ENDPOINT = "http://localhost:3001/api/v1/"
export const LOGIN_URL = `${API_ENDPOINT}sessions`
export const REGISTRATION_URL = `${API_ENDPOINT}registrations`

/* SERVER */
export const SERVER_STATUS_MESSAGES = {
  400: ":bad_request",
  401: ":unathorized",
  403: ":forbidden",
  404: ":not_found",
  422: ":unprocessable_entity",
  500: ":internal_server_error"
}
