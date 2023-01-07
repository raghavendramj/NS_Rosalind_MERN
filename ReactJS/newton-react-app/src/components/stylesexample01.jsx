import React, { Component } from 'react';

// HTML
{/* <div style='backgorund: blue; color: white; font-size: 30px'>
    React was created by Jordan Walke in 2013
</div> */}


function StylesExample1() {
    return (
        // <div style={{ background: 'blue', color: 'white', fontSize: '30px' }}>
        //     React was created by Jordan Walke in 2013
        // </div>

        <React.Fragment>
            <main style={{ padding: '5px' }}>
                <p style={{ fontWeight: 'bold', fontFamily: 'sans-serif' }}>Elon Musk</p>
                <p>18.6k Tweets</p>
                <img style={{ width: '100%' }}
                    src="https://pbs.twimg.com/profile_banners/44196397/1576183471/600x200" alt="" />
                <img
                    style={{
                        width: '150px',
                        borderRadius: "50%",
                        border: "4px solid white",
                        marginTop: "-45px"
                    }}
                    src="https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg" alt="" />
                <p style={{ fontWeight: "bold" }}>Elon Musk</p>
                <p style={{ marginTop: "-15px" }}>@elonmusk</p>
                <div style={{ display: 'flex' }}>
                    <p style={{ margin: '5px', fontWeight: "bold" }}>114 <span style={{ fontWeight: "normal" }}>Following</span></p>
                    <p style={{ margin: '5px', fontWeight: "bold" }}>100.6M <span style={{ fontWeight: "normal" }}>Followers</span></p>
                </div>
            </main>

        </React.Fragment>
    );
}

export default StylesExample1;