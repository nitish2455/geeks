import './Info.css';


const Info = () => {
    return (
        <section className='info'>
            <div className='info-container'>
                <p className='text-6xl font-semibold whitespace-nowrap py-3'>Check out more works by Geeks <br/>Invention</p>
                <p className='text-lg text-gray-400 py-4'>Our case studies describe design and development solutions implemented at our Geeks Invention projects.
                    The stories are a valuable resource for those looking to develop their own mobile apps.
                </p>
                <button className='desc-link info-btn mt-3'>
                    <h3>See full case studies</h3>
                </button>
            </div>
        </section>
    )
}

export default Info;