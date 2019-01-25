import { createAction } from 'redux-actions'

const test = createAction('TEST', async val => ({
    test: val
}))

export default {
    test
}
