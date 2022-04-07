import {Button} from "../common/Button";
import React from "react";
import './subscribeSection.css'

function SubscribeSection (){
    return(
<section className='container_subscription Green_gradient_bg'>
    <h3 className='subscription_header'>
        Subscribe to Our Newsletter to Receive the Best Deals!
    </h3>
    <p className='subscription_text'>
       You Can Unsubscribe Any Time
    </p>
    <div className='input_area'>
        <form>
            <input
                className='subscription_input'
                name='email'
                type='email'
                placeholder='Your Email'
            />
          <Button buttonStyle='btn--outline--white'>Subscribe</Button>
        </form>
    </div>
</section>
    )
}
export default SubscribeSection;