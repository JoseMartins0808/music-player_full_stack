import APP_ROUTES from "@/constants/appRoutes";

function checkIsPublicRoute(path: string): boolean {
    const allPublicValues: string[] = Object.values(APP_ROUTES.public);

    return allPublicValues.includes(path);
}

export default checkIsPublicRoute;