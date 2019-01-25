import apis from '@/fetch'
import { handleActions } from 'redux-actions'
import { test } from './actions'

// 初始化状态
const initialState = {
    apis,
    visiable: false,
    test: 1
}
// let loadChild = 0;
// function root(state = initialState, action) {
//     switch (action.type) {
//     case 'LOADING':
//         loadChild += 1;
//         return {
//             ...state,
//             visiable: loadChild !== 0,
//         };
//     case 'UNLOADING':
//         if (loadChild > 0) loadChild -= 1;
//         return {
//             ...state,
//             visiable: loadChild !== 0,
//         };
//     default:
//         return state;
//     }
// }

const rootReducer = handleActions({
    [test]: (state, action) => ({
        ...state,
        test: action.test
    })
}, initialState)

export default rootReducer
