import Header from '../Header2';

import image from '../img/ui designs/baliuag.png'

const Baliuag = () => {
    return ( 
        <>  
        <Header />
        <div className="project-page">
            <div className='text-body '>
                <h1>Baliuag University</h1>
                <p>Baliuag University is a private university founded in 1925, located at Bulacan city. <br />
                The output required is the Home page only. <em>(Design was not picked)</em> </p>
                <p><i>January 2022</i></p>

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

export default Baliuag;