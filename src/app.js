/* eslint no-console:0 */

class UserModel {
  constructor({name, age}) {
    this._name = name
    this._age = age
  }

  saveLocal() {
    window.localStorage.setItem(
      UserModel.STORAGE_KEY,
      JSON.stringify({name: this._name, age: this._age})
    )
  }

  toString() {
    return `My name is ${this._name} and I am ${this._age} years old`
  }
}
UserModel.STORAGE_KEY = '__USER_MODEL__'

module.exports = UserModel
