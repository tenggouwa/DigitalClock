import loadableHandler from '@/components/loadableHandler'

module.exports = [{
    path: '/',
    exact: true,
    component: loadableHandler(() => import('./pages/home'))
}]
