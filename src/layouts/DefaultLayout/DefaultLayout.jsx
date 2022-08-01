import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
function DefaultLayout({ children }) {
    return (
        <div className="App">
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
