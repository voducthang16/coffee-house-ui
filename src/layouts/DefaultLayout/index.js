import Header from '~/layouts/components/Header';
function DefaultLayout({ children }) {
    return (
        <div className="App">
            <Header />
            <main className="main">{children}</main>
        </div>
    );
}

export default DefaultLayout;
