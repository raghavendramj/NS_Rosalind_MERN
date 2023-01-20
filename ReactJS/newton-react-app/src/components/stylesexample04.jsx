import React, { Component } from 'react';
import styles from "../mystyles.module.css";

function StylesExample4() {
    return (
        <section className={styles.testimonial}>
            <div className={styles.testimonialwrapper}>
                <img class={styles.testimonialavatar} src="https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg" alt="" />
                <div className={styles.testimonialquote}>
                    <p>This is one of the best place to learn!</p>
                </div>
                <p className={styles.testimonialname}>
                    Elon Musk <span>The Front End Developer!</span>
                </p>
            </div>

        </section>
    );
}

export default StylesExample4;