const admin = [
    {
        path: "/admin",
        component: () => import("../layouts/admin.vue"),
        children: [
            {
                path: "users",
                name: "admin-users",
                component: () => import("../pages/admin/users/index.vue")
            },
            {
                path: "users/create",
                name: "admin-users-create",
                component: () => import("../pages/admin/users/create.vue")
            },
            {
                path: "users/edit/:id",
                name: "admin-users-edit",
                component: () => import("../pages/admin/users/edit.vue")
            },
            {
                path: "users/show/:id",
                name: "admin-users-show",
                component: () => import("../pages/admin/users/show.vue")
            },
            {
                path: "roles",
                name: "admin-roles",
                component: () => import("../pages/admin/roles/index.vue")
            },
            {
                path: "settings",
                name: "admin-settings",
                component: () => import("../pages/admin/settings/index.vue")
            }
        ] 
    }
];

export default admin;