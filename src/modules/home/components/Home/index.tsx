import RealEstate from '@modules/home/components/RealEstate';
import Contacts from '@modules/home/components/Contacts';
import AboutUs from '@modules/home/components/AboutUs';
import Intro from '@modules/home/components/Intro';

const Home = () => {
	return (
		<>
			<Intro />
			<AboutUs />
			<RealEstate />
			<Contacts />
		</>
	);
};

export default Home;
