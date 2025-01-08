import React from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'

const Slider = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute top-1/2 flex -translate-y-1/2 transform gap-7 flex-col text-white lg:ml-20 ml-0 md:ml-10 p-6 rounded-xl filter backdrop-blur-sm">
                    <h1 className='text-7xl'>Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className='flex gap-7 justify-center'>
                        <button className='btn bg-[#FF3811]'>Discover More</button>
                        <button className='btn btn-outline btn-info text-black'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute right-12 bottom-5 flex -translate-y-1/2 transform gap-5">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute top-1/2 flex -translate-y-1/2 transform gap-7 flex-col text-white lg:ml-20 ml-0 md:ml-10 p-6 rounded-xl filter backdrop-blur-sm">
                    <h1 className='text-7xl'>Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className='flex gap-7 justify-center'>
                        <button className='btn bg-[#FF3811]'>Discover More</button>
                        <button className='btn btn-outline btn-info text-black'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute right-12 bottom-5 flex -translate-y-1/2 transform gap-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute top-1/2 flex -translate-y-1/2 transform gap-7 flex-col text-white lg:ml-20 ml-0 md:ml-10 p-6 rounded-xl filter backdrop-blur-sm">
                    <h1 className='text-7xl'>Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className='flex gap-7 justify-center'>
                        <button className='btn bg-[#FF3811]'>Discover More</button>
                        <button className='btn btn-outline btn-info text-black'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute right-12 bottom-5 flex -translate-y-1/2 transform gap-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute top-1/2 flex -translate-y-1/2 transform gap-7 flex-col text-white lg:ml-20 ml-0 md:ml-10 p-6 rounded-xl filter backdrop-blur-sm">
                    <h1 className='text-7xl'>Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className='flex gap-7 justify-center'>
                        <button className='btn bg-[#FF3811]'>Discover More</button>
                        <button className='btn btn-outline btn-info text-black'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute right-12 bottom-5 flex -translate-y-1/2 transform gap-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute top-1/2 flex -translate-y-1/2 transform gap-7 flex-col text-white lg:ml-20 ml-0 md:ml-10 p-6 rounded-xl filter backdrop-blur-sm">
                    <h1 className='text-7xl'>Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className='flex gap-7 justify-center'>
                        <button className='btn bg-[#FF3811]'>Discover More</button>
                        <button className='btn btn-outline btn-info text-black'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute right-12 bottom-5 flex -translate-y-1/2 transform gap-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute top-1/2 flex -translate-y-1/2 transform gap-7 flex-col text-white lg:ml-20 ml-0 md:ml-10 p-6 rounded-xl filter backdrop-blur-sm">
                    <h1 className='text-7xl'>Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className='flex gap-7 justify-center'>
                        <button className='btn bg-[#FF3811]'>Discover More</button>
                        <button className='btn btn-outline btn-info text-black'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute right-12 bottom-5 flex -translate-y-1/2 transform gap-5">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;