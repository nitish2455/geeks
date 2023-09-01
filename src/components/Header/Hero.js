import './Hero.css'

const Hero = () => {
    return (
        <div className="hero-container md:flex">
            <div className="hero-description" data-aos="fade-up" data-aos-delay='300' data-aos-duration='600'>
                <h1 className='text-6xl font-bold py-3'>Fintech Solution</h1>
                <h3 className='text-4xl text-gray-400 py-2'>Transforming Fintech with AI</h3>
                <div className='flex gap-3 py-3'>
                    <h6 className='border rounded-full px-2 text-lg py-1'>Fraud detection</h6>
                    <h6 className='border rounded-full text-lg  px-2 py-1'>Transaction categorisation</h6>
                    <h6 className='border rounded-full text-lg px-2 py-1'>Risk Scoring</h6>
                </div>
                <p className='py-6'>Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to
                    easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility,
                    transaction categorization for seamless organization, and anomaly detection to safeguard your assets
                </p>
                <button className='desc-link mt-4'>
                    <h3>See full case study</h3>
                </button>
            </div>
            <div className="image-container">
                <img
                    src="https://geeksinvention.com/assets/v3/industry-fintech.svg"
                    alt="Description"
                    className='hero-image'
                />
            </div>
        </div>
    )
}


export default Hero;
