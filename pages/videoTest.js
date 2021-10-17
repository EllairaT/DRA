import React from 'react'
import ReactPlayer from 'react-player'

// http://localhost:3000/videoTest
// about the video player
// https://openbase.com/js/react-player#config-prop

export default function testVideo() {

    return (
        <div>
            <ReactPlayer
                url='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
                controls={true}
                light='https://dummyimage.com/640x360/fff/aaa'
                width={'640px'}
                height={'360px'}
                />
        </div>
    )
}
