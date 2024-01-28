import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import BizimMeram from '../../components/BizimMeram/BizimMeram';
import Gezilecek from '../../utils/images/meram-baglari.jpg';
import Kaya from '../../utils/images/kızlar_kayası.jpg';
import Park from '../../utils/images/80bin.jpg'

function Home() {
  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h1 className='text-center fw-semibold'>Bizim Meram İçin Çalışıyoruz </h1>
                <p>Samimiyetin adı Meram.Bizim Meram diyerek çıktık yola.Aşkla,şevkle işimizi yapıyoruz.Bizim meram sizlerle çok farklı.</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/projeler">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Projeler</button>
                    </Link>
                    <Link to="/iletişim">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>İletişim</button>
                    </Link>
                </div>
            </div>
        </header>
        <div className="py-5">     
             <BizimMeram/>
        </div>
      
        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>Gezilecek Yerler</h2>
                        <p>-Meram Bağları 
                        <img src={Gezilecek} className='img-fluid' alt="" />
                          <br></br>-Kızlar Kayası
                          <img src={Kaya} className='img-fluid' alt="" />
                          <br></br>
                        
                        </p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Daha Fazla</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
    
                    </div>
                </div>
            </div>
        </div>











    </div>
    
  )
}

export default Home;