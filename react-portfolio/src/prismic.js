import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'farmok'

export const client = prismic.createClient(repositoryName, {
    // If your repository is private, add an access token
    accessToken: 'MC5aZkNVcmhJQUFDQUFyV1FG.77-977-9U--_vXgy77-9V--_ve-_vQzvv73vv70r77-9J--_vQJi77-9YO-_vQPvv73vv73vv73vv70GbO-_vQHvv70',

    // This defines how you will structure URL paths in your project.
    // Update the types to match the custom types in your project, and edit
    // the paths to match the routing in your project.
    //
    // If you are not using a router in your project, you can change this
    // to an empty array or remove the option entirely.
    // routes: [
    //     {
    //         type: 'home_page',
    //         uid: 'home',
    //         path: '/',
    //     },
    //     {
    //         type: 'landing_page',
    //         uid: 'design',
    //         path: '/design',
    //     },
    //     {
    //         type: 'landing_page',
    //         uid: 'leadership',
    //         path: '/leadership',
    //     },
    //     {
    //         type: 'landing_page',
    //         uid: 'about',
    //         path: '/about',
    //     },

    // ],
})