//Components;
import Footer from './Footer/Footer'
import Header from './Header/Header'

export default function layout({children}) {
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    )
}
