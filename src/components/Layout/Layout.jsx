import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Link, List, Line } from "./Layout.styled";

export const Layout = () => {
    return (
    <>
    <header>
        <nav>
            <List>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/movies'>Movies</Link>
                </li>
            </List>
        </nav>
            <Line></Line>
    </header>
    <main>
            <Suspense>
                <Outlet/>
            </Suspense>   
    </main>
    </>
    )
}