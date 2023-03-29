import Main from '../components/Main';
import SubSlider from "../components/SubSlider";
const Home = () => {
    const upcoming = 'upcoming';
    const popular = 'popular';
    const topRated = 'top_rated';
    const trending = 'popular';
    return (
        <>
            <Main />
            <SubSlider title='Upcoming' url={upcoming}/>
            <SubSlider title='Top-rated' url={topRated} />
            <SubSlider title='Trending' url={trending} />
            <SubSlider title='Popular' url={popular} />
        </>
    )
}
export default Home;