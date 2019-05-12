import {expect} from 'chai'

import UserModel from '../src/app'

import {descriptorsByEnvironmentPatcher} from '@s-ui/test/lib/descriptor-environment-patcher'
descriptorsByEnvironmentPatcher()

let user

describe('UserModel', () => {
  beforeEach(() => {
    user = new UserModel({name: 'carlos', age: '27'})
  })

  it('#constructor', () => {
    expect(user).to.be.an.instanceof(UserModel)
  })

  it('#toString', () => {
    expect('' + user).to.be.eql('My name is carlos and I am 27 years old')
  })

  it.client('#saveLocal', () => {
    user.saveLocal()
    expect(
      JSON.parse(window.localStorage.getItem(UserModel.STORAGE_KEY))
    ).to.be.eql({name: 'carlos', age: '27'})
  })
})
