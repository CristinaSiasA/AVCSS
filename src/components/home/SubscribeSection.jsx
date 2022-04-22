import './subscribeSection.css'
import SubscriptionForm from "./SubscriptionForm";


function SubscribeSection (){

    return(
<section className='container_subscription Green_gradient_bg white-text'>
    <h1 className='subscription_header display-5'>
        Subscribe to Our Newsletter
    </h1>
    <h3 className='style-subtitles opacity-50'>
       You Can Unsubscribe Any Time
    </h3>
    <SubscriptionForm/>
</section>
    )
}
export default SubscribeSection;