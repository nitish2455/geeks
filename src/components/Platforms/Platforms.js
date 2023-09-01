import './Platforms.css';

const Platforms = () => {
    return (
        <section className='platform'>
            <div className='platform-container'>
                <h1 className='text-6xl font-bold py-2'>Software for modern platforms</h1>
                <p className='text-lg text-gray-400 py-6'>We develop applications for mobile, web, wearables, and TV.
                </p>
            </div>
            <div className='platform-logo'>
                <div className='mt-5' data-aos="zoom-in" data-aos-delay='300' data-aos-duration='600'>
                    <img src='https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg' alt='platform logo'></img>
                    <h3 className='my-2 text-2xl'>Web</h3>
                </div>
                <div data-aos="zoom-in" data-aos-delay='400' data-aos-duration='600'>
                    <img src='https://geeksinvention.com/assets/software-platforms/ios-00fc94480a85413ba6276b2392cbaa0a.svg' alt='platform logo'></img>
                    <h3 className='my-2 text-2xl'>IOS</h3>
                </div>
                <div data-aos="zoom-in" data-aos-delay='500' data-aos-duration='600'>
                    <img src='https://geeksinvention.com/assets/software-platforms/android-163d4b8d487bb2c3ade6e7aad7dda588.svg' alt='platform logo'></img>
                    <h3 className='my-2 text-2xl'>Android</h3>
                </div>
                <div data-aos="zoom-in" data-aos-delay='600' data-aos-duration='600'>
                    <img src='https://geeksinvention.com/assets/software-platforms/hybrid-b835b200edfc426c9f5a6ef76412aff6.svg' alt='platform logo'></img>
                    <h3 className='my-2 text-2xl'>Hybrid</h3>
                </div>
                <div data-aos="zoom-in" data-aos-delay='700' data-aos-duration='600'>
                    <img src='https://geeksinvention.com/assets/software-platforms/wear-6f1886d1d03002e8fe1d04e499125d00.svg' alt='platform logo'></img>
                    <h3 className='my-2 text-2xl'>wearables</h3>
                </div>
                <div data-aos="zoom-in" data-aos-delay='800' data-aos-duration='600'>
                    <img src='https://geeksinvention.com/assets/software-platforms/tv-f6c551eb20333d6604e9fff685c392d1.svg' alt='platform logo'></img>
                    <h3 className='my-2 text-2xl px-5'>TV</h3>
                </div>
            </div>
            <div className='platform-container'>
                <button className='desc-link info-btn'>
                    <h3 className='my-2 text-2xl'>See full case studies</h3>
                </button>
            </div>
        </section >
    )
}

export default Platforms;