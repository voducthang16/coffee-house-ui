import Slider from '~/layouts/components/Slider';
import Reservations from '~/layouts/components/Reservations';
import Posts from '~/layouts/components/Posts';
import Menu from '~/layouts/components/Menu';
function Home() {
    return (
        <div className="home">
            <Slider />
            <Reservations />
            <Posts />
            <Menu />
        </div>
    );
}

export default Home;
