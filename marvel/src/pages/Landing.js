import React, { useContext } from "react";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import CharacterContext from "../contexts/CharacterContext";

function Landing() {
    const { pageLoading } = useContext(CharacterContext);
    return (
        <>
            {
                pageLoading ? <Loading /> : (
                    <>
                        <CardList />
                        <Pagination />
                    </>
                )
            }
        </>
    );
}

export default Landing;