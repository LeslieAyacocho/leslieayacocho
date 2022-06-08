import Header from '../Header2';

import image from '../img/ui designs/Giving.png'

const GivingTuesday = () => {
    return ( 
        <>  
        <Header />
        <div className="project-page">
            <div className='text-body '>
                <h1>Giving Tuesday</h1>
                <p> <br />
                The output required is the Home page only. <em>(Design was not picked)</em> </p>
                <p><i>July 2021</i></p>

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

export default GivingTuesday;