import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Lang from "../components/Lang";
import Nav from "../components/Nav";

const Language = () => {

    const {t} = useTranslation()
    return (
        <div >
            <Header />
            <Nav />
            <div className="container d-flex justify-content-center p-5">
                <Lang />
            </div>
            <Footer />
            <Helmet>
                <title>{t("Language")} - FreeWsad</title>
            </Helmet>
        </div>
    )
}

export default Language;