"use client";

import React from 'react'

const ImageSummary = () => {
    return (
        <>
            <div className="text-3xl font-bold text-center mt-6">
                Unsplash Image
            </div>
            <div className="w-96 mx-auto mt-6 h-32 overflow-x-auto px-4">
                Unsplashの画像です。<br />
                リロードするたびに画像が変わります。<br />
                画像は移動させることができます。<br />
                また、画像を選択すると画像に青い枠が付き、縮めたり拡げたりすることで<br />
                画像の大きさを変えることがきます。
                もう一度画像を選択する、または枠内を押下することで<br />
                青い枠を消すことができます。
            </div>
        </>
    )
}

export default ImageSummary