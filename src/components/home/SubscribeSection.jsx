import React from "react";
import './subscribeSection.css'

function SubscribeSection (){
    return(
<section className='container_subscription Green_gradient_bg white-text'>
    <h1 className='subscription_header display-5'>
        Subscribe to Our Newsletter to Receive the Best Deals!
    </h1>
    <h3 className='style-subtitles'>
       You Can Unsubscribe Any Time
    </h3>
    <div className='input_area'>
        <form>
            <input
                className='subscription_input'
                name='email'
                type='email'
                placeholder='Your Email'
            />
            <button type="submit" className="btn btn-outline-light btn-lg">Subscribe</button>
        </form>
    </div>
</section>
    )
}
export default SubscribeSection;