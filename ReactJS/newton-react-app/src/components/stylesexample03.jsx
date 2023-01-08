import React, { Component } from 'react';
import "../styles.css";

function StylesExample3() {
    return (
        <React.Fragment>
            {/* <h1>This is my style componenent!</h1> */}
            <section className='testimonial'>
                <div className="testimonial-wrapper">
                    <img class="testimonial-avatar" src="https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg" alt="" />
                    <div className="testimonial-quote">
                        <p>This is one of the best place to learn!</p>
                    </div>
                    <p className="testimonial-name">
                        Elon Musk <span>The Front End Developer!</span>
                    </p>
                </div>

            </section>
        </React.Fragment>
    );
}

export default StylesExample3;