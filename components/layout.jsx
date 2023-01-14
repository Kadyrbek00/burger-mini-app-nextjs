import Footer from "./footer"
import Header from "./header"

function Layout({ children }) {
    return (
        <div className="content">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout