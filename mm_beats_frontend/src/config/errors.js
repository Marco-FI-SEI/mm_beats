export default class ServerError {
  constructor(error) {
    this.error = error
    this.showError(error)
  }

  showError(e) {
    console.error(e)
  }
}
