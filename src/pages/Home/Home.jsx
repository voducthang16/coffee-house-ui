import Slider from '~/layouts/components/Slider';
import Reservations from '~/layouts/components/Reservations';
import Posts from '~/layouts/components/Posts';
function Home() {
    return (
        <div className="home">
            <Slider />
            <Reservations />
            <Posts />
        </div>
    );
}

export default Home;
