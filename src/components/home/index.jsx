import './home.css'
import HeroSection from "./HeroSection";
import SubscribeSection from "./SubscribeSection";
import AdvantagesSection from "./AdvantagesSection";
import BrandSection from "./BrandsSection";
import GoGreenSection from "./GoGreenSection";

export default function HomeComponent() {
    return (
        <>
            <HeroSection/>
            <BrandSection/>
            <AdvantagesSection/>
            <SubscribeSection/>
        </>
    )

}