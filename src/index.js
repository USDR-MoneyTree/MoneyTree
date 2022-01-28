import {StrictMode} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import WebFont from "webfontloader";
import {MoralisProvider} from "react-moralis";

import {
    HomePage,
    ConnectWalletPage,
    DashboardPage,
    DecreaseCollateralPage,
    IncreaseCollateralPage,
    LoanManagerPage,
    NothingToDisplayPage,
    LoanPage,
    SettleLoanPage,
    WrongNetworkPage
} from "./pages";

WebFont.load({
    google: {
        families: ['Poppins', "Raleway:700,600,500", "Roboto:400,700", "Poppins:600,400", "undefined:"]
    }
});


const APP_ID = "VYtI32ZHCboJxf3e8OILp3kPFZDNoEbZt4GtdVzM";
const SERVER_URL = "https://luia1zlqjmgd.usemoralis.com:2053/server";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/connect-wallet"} element={<ConnectWalletPage/>}/>
                    <Route path={"/wrong-network"} element={<WrongNetworkPage/>}/>
                    <Route path={"/loan"} element={<LoanPage/>}/>
                    <Route path={"/dashboard"} element={<DashboardPage/>}/>
                    <Route path={"/dashboard-nothing-to-display"} element={<NothingToDisplayPage/>}/>
                    <Route path={"/loan-manager"} element={<LoanManagerPage/>}/>
                    <Route path={"/increase-collateral"} element={<IncreaseCollateralPage/>}/>
                    <Route path={"/settle-loan"} element={<SettleLoanPage/>}/>
                    <Route path={"/decrease-collateral"} element={<DecreaseCollateralPage/>}/>
                    {/*For no match*/}
                    <Route
                        path="*"
                        element={
                            <main style={{padding: "1rem"}}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </MoralisProvider> </StrictMode>,
    rootElement
);
