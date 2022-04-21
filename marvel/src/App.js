import React from "react";
import Rooter from "./rooter/rooter";
import Layout from "./components/Layout";
import { CharacterProvider } from "./contexts/CharacterContext";

function App() {
    return (
        <CharacterProvider>
            <Layout>
                <Rooter />
            </Layout >
        </CharacterProvider>
    );
}

export default App;
