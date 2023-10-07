const APP_ROUTES = {
    public: {
        login: "/",
        dashboard: "/dashboard",
        musics: "/musics/**",
    },
    private: {
        profile: {
            name: "/profile"
        }
    }
}

export default APP_ROUTES;