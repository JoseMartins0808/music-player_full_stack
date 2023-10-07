export default function verifyIsLogged(): boolean | null {

    if (typeof window !== "undefined") {
        const token: string | null = window.localStorage.getItem("@Musics_userToken");

        return !!token;
    }

    return null;
}