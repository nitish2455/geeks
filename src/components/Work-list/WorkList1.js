import './WorkList.css'

const WorkList1 = () => {
    return (
        <div className="work">
            <div className="work-container">
                <img
                    src="https://geeksinvention.com/assets/v3/industry-iot.webp"
                    alt="Description"
                    className="image"
                />
            </div>
            <div className="work-description" data-aos="fade-up" data-aos-delay='300' data-aos-duration='600'>
                <h1 className='text-6xl font-bold py-3'>Industrial IoT</h1>
                <h3 className='text-4xl text-gray-300 py-2'>Providing a better connected experience</h3>
                <div className='flex gap-3 py-3'>
                    <h6 className='border rounded-full px-2 text-lg py-1'>Connected manufacturing</h6>
                    <h6 className='border rounded-full text-lg  px-2 py-1'>Aviation</h6>
                    <h6 className='border rounded-full text-lg  px-2 py-1'>Smart Building</h6>
                </div>
                <p>Revolutionize your industry with our innovative IoT solutions. Our software development services offer connected
                    manufacturing, pollution control, smart transportation, and intelligent farming, agriculture, and forestry.
                    With our expertise, you can harness the power of technology to increase efficiency, reduce waste, and optimize
                    operations for a sustainable future.
                </p>
                <button className='desc-link mt-4 border border-white'>
                    <h3>See full case study</h3>
                </button>
            </div>
        </div>
    )
}


export default WorkList1;
