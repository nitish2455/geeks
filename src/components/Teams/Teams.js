import './Teams.css';

const Teams = () => {
    return (
        <section className='team'>
            <div className='team-container'>
                <h1 className='text-6xl font-bold py-2'>Only Dedicated Teams</h1>
                <p className='text-lg text-gray-400 py-6'>Our team is 100% concentrated on your project and you have full control over management of the dedicated team members.</p>
            </div>
            <div className='team-logo text-center items-center '>
                <div className='flex justify-center gap-40'>
                <div data-aos="zoom-in" data-aos-delay='300' data-aos-duration='600'>
                    <img src='https://geeksinvention.com/assets/dedicated-teams/agile-0aab98f2053db8490987560a2e9f37fe.svg' alt='platform logo'></img>
                    <h3 className='text-2xl py-3'>Agile Approach</h3>
                </div>
                <div className='px-6' data-aos="zoom-in" data-aos-delay='400' data-aos-duration='600'>
                    <img src='https://geeksinvention.com/assets/dedicated-teams/deep-tech-7f909bfebb1eebf6eda5832f658cbbaa.svg' alt='platform logo' className='px-16'></img>
                    <h3 className='text-2xl py-3'>Deep Tech Expertise</h3>
                </div>
                <div data-aos="zoom-in" data-aos-delay='500' data-aos-duration='600'>
                    <img src='https://geeksinvention.com/assets/dedicated-teams/pc-293103263e599a94d7a2d886fab89b42.svg' alt='platform logo'></img>
                    <h3 className='text-2xl py-3'>Personal Commitment</h3>
                </div>
                </div>
                  
                  <div className='flex justify-center gap-44 mt-20 pr-24'>
                <div className='pr-8' data-aos="zoom-in" data-aos-delay='600' data-aos-duration='600'>
                    <img src='https://geeksinvention.com/assets/dedicated-teams/reg-rep-732453cad7b07eb4cc4147fa41423c4a.svg' alt='platform logo'></img>
                    <h3 className='text-2xl py-3'>Regular Reporting</h3>
                </div>
                <div data-aos="zoom-in" data-aos-delay='700' data-aos-duration='600'>
                    <img src='https://geeksinvention.com/assets/dedicated-teams/time-track-d7afee36956a4a6c0bb1e734af7909fc.svg' alt='platform logo'></img>
                    <h3 className='text-2xl py-3'>Time Tracking</h3>
                </div>
                <div data-aos="zoom-in" data-aos-delay='800' data-aos-duration='600'>
                    <img src='https://geeksinvention.com/assets/dedicated-teams/scale-33474d0929577c56ca4d116820e24ee8.svg' alt='platform logo'></img>
                    <h3 className='text-2xl py-3'>Scalability</h3>
                </div>

                  </div>
            </div>
            <div className='team-container'>
                <button className='desc-link info-btn'>
                    <h3>See Our Services</h3>
                </button>
            </div>
        </section >
    )
}

export default Teams;