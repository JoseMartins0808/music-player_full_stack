"use client";
import verifyIsLogged from "@/utils/verifyIsLogged";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface iPrivateRouteProps {
    children: React.ReactNode;
}

export default function PrivateRoute({ children }: iPrivateRouteProps) {
    const navigate = useRouter();

    const isAuthenticated: boolean | null = verifyIsLogged();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate.push("/");
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            {!isAuthenticated && null}
            {isAuthenticated && children}
        </>
    );
};
