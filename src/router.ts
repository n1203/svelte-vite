import NotFound from './pages/common/not-found.svelte'
import Home from './pages/home/index.svelte'


// https://github.com/ItalyPaleAle/svelte-spa-router
// https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.13&manage_type=myprojects&projectId=1507054&keyword=&project_type=&page=
export const routes = {
    '/': {
        name: '仪表盘',
        icon: 'dashboard_outline_',
        component: Home,
    },
    '/2': {
        name: '测试页面',
        icon: 'check_circle_fill',
        component: NotFound,
        children: {
            '/2/3': {
                name: '测试页面',
                icon: 'check_circle_fill',
                component: NotFound,
            }
        }
    },
    // // Exact path
    // '/': Home,

    // // Using named parameters, with last being optional
    // '/author/:first/:last?': Author,

    // // Wildcard parameter
    // '/book/*': Book,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': {
        name: 'NotFound',
        hide: true,
        component: NotFound,
    },
}

const _routes = {}
function mountRouter(params: any) {
    return Object.entries(params).forEach(([k,{component, children = {}}]: any) => {
        _routes[k] = component
        mountRouter(children)
    })
}
mountRouter(routes)

export default _routes