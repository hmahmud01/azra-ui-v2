import { useEffect } from 'react';

import Footer from '../components/Footer/Footer';
import TopBar from '../components/Header/TopBar';
import SideBar from '../components/Header/SideBar';
import Scripts from '../components/Footer/Scripts';

function App ({ Component, pageProps }) {

    useEffect(() => {
        document.body.classList.add("fix-header");
        document.body.classList.add("fix-sidebar");
        document.body.classList.add("card-no-border");
    });

    return (
        <>
            <div id="main-wrapper">
                <TopBar />
                <SideBar />
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <Component {...pageProps} />
                    </div>
                    <Footer />
                </div>
            </div>
            <Scripts />
        </>
    )
}

export default App;