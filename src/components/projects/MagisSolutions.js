import Header from '../Header2';

import image from '../img/ui designs/magis.png'

const MagisSolutions = () => {
    return ( 
        <>  
        <Header />
        <div className="project-page">
            <div className='text-body '>
                <h1>Magis Solutions</h1>
                <p> MagisSolutions provides digital marketing for clients.<br />
                The output required is for the job application is the home page.</p>
                <p><i>May 2021</i></p>

                <hr />
                {/* <a href="https://github.com/LeslieAyacocho/API-cryptosnews"><i class="fab fa-github"></i> : https://github.com/LeslieAyacocho/API-cryptosnews</a> */}
            </div>

            <div className="web-img">
                <img src={image} alt="Homepage" className='w-50'/>
            </div>


        </div>
        </>
    );
}

export default MagisSolutions;