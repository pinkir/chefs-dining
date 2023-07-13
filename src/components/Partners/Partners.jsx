import logo1 from '../../assets/chef1.jpg'
import logo2 from '../../assets/chef2.jpg'
import logo3 from '../../assets/chef3.jpg'
import logo4 from '../../assets/chef4.jpg'

const Partners = () => {
    return (
        <div>
            <div className='text-center'>
                <h3 className='mb-3'><i>Our Partners</i></h3>
                <p className='mb-3'><i>Here are some Of our partners who helped us...</i></p>
            </div>
            <div className='lg:d-flex justify-around'>
                
                <img className='w-25' src={logo2} alt="" />
                <img className='w-25' src={logo3} alt="" />
                <img className='w-25' src={logo4} alt="" />
                <img className='w-25' src={logo1} alt="" />
                
                
            </div>
        </div>
    );
};

export default Partners;