import Slider from '~/layouts/components/Slider';
import Reservations from '~/layouts/components/Reservations';
function Home() {
    return (
        <div className="home">
            <Slider />
            <Reservations />
        </div>
    );
}

export default Home;
