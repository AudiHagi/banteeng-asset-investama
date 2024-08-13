'use client'
import Image from 'next/image'
import React from 'react'
import Navbar from './component/navbar'

import BG from '../../public/images/bghome.png'
import BG2 from '../../public/images/bgbanteng.png'

import keunggulan1 from '../../public/images/keunggulan1.png'
import keunggulan2 from '../../public/images/keunggulan2.png'
import keunggulan3 from '../../public/images/keunggulan3.png'
import inves from '../../public/images/inves.png'
import visi from '../../public/images/visi.png'
import wa from '../../public/images/wa.png'
import gmail from '../../public/images/gmail.png'
import icon from '../../public/images/icon.png'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/navigation'
import { decrypt, encrypt } from './component/enkripsi'
import { getFirestore, doc, getDocs, collection, getDoc, addDoc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import Carousel from 'better-react-carousel'


export default function Home() {
  const router = useRouter()
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = React.useState(window.innerWidth > 768 && window.innerWidth <= 1024);

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      console.log(isMobile, isTablet)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{ backgroundPosition: '100%', paddingBottom: isMobile || isTablet ? '20%' : 0, backgroundImage: isMobile || isTablet? `url(${BG2.src})` : `url(${BG.src})` }}>
        <div className="container mx-auto flex justify-between items-center h-20">
          {
            isMobile || isTablet?
              <Image
                src={icon}
                style={{ width: '20px', marginLeft: '3%' }}
                height={40}
                width={40}
                alt="Picture of the author"
                unoptimized
              />
              :
              <div className="font-extrabold text-white">PT Banteng Asset Investama</div>

          }
          {
            !isMobile && !isTablet &&
            <div className="flex gap-x-6 text-white">
            <ul className="hidden md:flex gap-x-20">
              <li>
                <Link href="/about">
                  <p className="font-extrabold">Tentang</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p className="font-extrabold">Produk</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p className="font-extrabold">Berita</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p className="font-extrabold">Kegiatan</p>
                </Link>
              </li>
            </ul>
          </div>
          }
          

          <div style={{ justifyContent: 'flex-end', alignItems: 'flex-end', textAlign: 'right', display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
            <button onClick={()=>{router.push('/Login')}} className="bg-white px-14 py-2 rounded-xl " style={{ color: '#0B3C86', marginTop: isMobile ? '2%' : 0 }}>Login</button>
            <button className="px-5 py-2 rounded-xl" style={{ backgroundColor: '#0B3C86', marginTop: isMobile ? '2%' : 0 }}>Create Account</button>
          </div>
        </div>
        <div style={{ width: isMobile || isTablet  ? '100%' : '50%', padding: '8%', textAlign: isMobile || isTablet ? 'center' : 'left' }}>
          <div style={{ fontWeight: 'bold', fontSize: isMobile ? '48px' : '64px', textAlign: isMobile || isTablet ? 'center' : 'left' }}>Banteng Asset Investama</div>
          <div style={{ fontWeight: 'bold', fontSize: isMobile ? '16px' : '20px', textAlign: isMobile || isTablet ? 'center' : 'left' }}>PT Banteng Asset Investama atau biasa disingkat BAI adalah perusahaan Broker Local yang memiliki Winner Trader yang sudah berpengalaman dan sudah Approve.</div>
          <button className="bg-white px-10 py-2 rounded-xl mr-2 mt-10" style={{ color: '#0B3C86', textAlign: isMobile || isTablet ? 'center' : 'left' }}>View More</button>
        </div>

      </div>
      <div style={{ position: 'absolute', top: isMobile ? 450 : isTablet ? 300 : 60, right: 0, zIndex: 2 }}>
        <Image
          src={inves}
          style={{ width: isMobile ? '200px': isTablet? '400px' : '650px' }}
          height={40}
          width={40}
          alt="Picture of the author"
          unoptimized
        />
      </div>
      <div style={{ width: '100%', backgroundColor: isMobile || isTablet? '#224E90' : '#D9D9D9', padding: '1%' }}>
        <div style={{ width: '100%', backgroundColor: 'white', borderTopLeftRadius: 80, borderTopRightRadius: 80, position: 'relative', top: isMobile ? -30 : -80, zIndex: 1 }}>
          <div style={{ width: '100%', backgroundColor: 'white', display: 'flex', flexDirection: isMobile ? 'column' : 'row', padding: '4%', borderTopLeftRadius: isMobile ? 50 : 80, borderTopRightRadius: isMobile ? 50 : 80, }}>
            <div style={{ width: isMobile ? '100%' : '50%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex', padding: '5%', marginTop: isMobile ? '10%' : 0 }}>
              <Image
                src={visi}
                className='w-96 h-96'
                height={15}
                width={15}
                alt="Picture of the author"
                unoptimized
                style={{ borderRadius: 50 }}
              />
            </div>
            <div style={{ width: isMobile ? '100%' : '50%', color: 'black', fontSize: isMobile ? '14px' : '20px', paddingLeft: '4%', paddingRight: '4%', textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: '5%' }}>

              <div style={{ marginTop: '10%' }}>“ PT Banteng Asset Investama menjadi broker atau treder terdepan yang memberikan layanan terbaik dan inovatif kepada klien, dengan menjaga integritas dan profesionalismer “</div>
              <div>PT Banteng Asset Investama menyediakan akses yang mudah dan efisien ke pasar keuangan global bagi klien kami, serta Menjaga transparansi dan etika bisnis dalam setiap transaksi untuk membangun kepercayaan dan hubungan jangka panjang dengan klien.</div>
            </div>
          </div>
          <div style={{ width: '100%', backgroundColor: '#0B3C86', padding: '8%', paddingLeft: isMobile ? '10%' : '20%', paddingRight: isMobile ? '10%' : '20%' }}>
            <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '3%', fontSize: isMobile ? '20px' : '32px' }}>Keunggulan</div>
            <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '3%', fontSize: isMobile ? '16px' : '20px' }}>Membantu kebutuhan seorang trader serta mempercepat dan mempermudah berbagai proses untuk melancarkan aktivitas trading.</div>
            <div style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', display: 'flex', flexDirection: 'row' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ marginTop: '20px' }}>
                  <Image
                    src={keunggulan1}
                    style={{ width: isMobile ? '50%' : '100%', height: '100%' }}
                    height={15}
                    width={15}
                    alt="Picture of the author"
                    unoptimized
                  />
                </div>
                <div style={{ fontSize: isMobile ? '14px' : '20px', marginTop: '10px' }}>Pembukaan Mudah dan Praktis</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ marginTop: '20px' }}>
                  <Image
                    src={keunggulan2}
                    style={{ width: isMobile ? '50%' : '100%', height: '100%' }}
                    height={15}
                    width={15}
                    alt="Picture of the author"
                    unoptimized
                  />
                </div>
                <div style={{ fontSize: isMobile ? '14px' : '20px', marginTop: '10px' }}>Layanan Bantuan</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ marginTop: '20px' }}>
                  <Image
                    src={keunggulan3}
                    style={{ width: isMobile ? '50%' : '100%', height: '100%' }}
                    height={15}
                    width={15}
                    alt="Picture of the author"
                    unoptimized
                  />
                </div>
                <div style={{ fontSize: isMobile ? '14px' : '20px', marginTop: '10px' }}>Relationship Manager</div>
              </div>
            </div>
          </div>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '4%', paddingLeft: isMobile ? '10%' : '20%', paddingRight: isMobile ? '10%' : '20%' }}>
            <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '3%', fontSize: '32px', color: '#0B3C86' }}>Kegiatan BAI</div>
            {/* <div style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', display: 'flex', flexDirection: 'row', color: 'black' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ marginTop: '20px' }}>
                  <Image
                    src={inves}
                    className='w-40 h-40'
                    height={15}
                    width={15}
                    alt="Picture of the author"
                    unoptimized
                  />
                </div>
                <div style={{ fontSize: '20px', marginTop: '10px' }}>Kegiatan A</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ marginTop: '20px' }}>
                  <Image
                    src={inves}
                    className='w-40 h-40'
                    height={15}
                    width={15}
                    alt="Picture of the author"
                    unoptimized
                  />
                </div>
                <div style={{ fontSize: '20px', marginTop: '10px' }}>Kegiatan A</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ marginTop: '20px' }}>
                  <Image
                    src={inves}
                    className='w-40 h-40'
                    height={15}
                    width={15}
                    alt="Picture of the author"
                    unoptimized
                  />
                </div>
                <div style={{ fontSize: '20px', marginTop: '10px' }}>Kegiatan A</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ marginTop: '20px' }}>
                  <Image
                    src={inves}
                    className='w-40 h-40'
                    height={15}
                    width={15}
                    alt="Picture of the author"
                    unoptimized
                  />
                </div>
                <div style={{ fontSize: '20px', marginTop: '10px' }}>Kegiatan A</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ marginTop: '20px' }}>
                  <Image
                    src={inves}
                    className='w-40 h-40'
                    height={15}
                    width={15}
                    alt="Picture of the author"
                    unoptimized
                  />
                </div>
                <div style={{ fontSize: '20px', marginTop: '10px' }}>Kegiatan A</div>
              </div>
            </div> */}
            <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: 'black' }}></div>
            <Carousel cols={isTablet? 1 : 5} rows={1} gap={10} loop>
              <Carousel.Item>
                <div style={{ display: 'flex', flexDirection: isMobile || isTablet ? 'row' : 'column', alignItems: 'center' }}>
                  <div style={{ marginTop: '20px' }}>
                    <Image
                      src={inves}
                      style={{ width: '100%' }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div style={{ fontSize: isMobile?'16px' : '20px', marginTop: '10px', color: 'black', textAlign: 'center' }}>Kegiatan A</div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ display: 'flex', flexDirection: isMobile || isTablet? 'row' : 'column', alignItems: 'center' }}>
                  <div style={{ marginTop: '20px' }}>
                    <Image
                      src={inves}
                      style={{ width: '100%' }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div style={{ fontSize: isMobile?'16px' : '20px', marginTop: '10px', color: 'black', textAlign: 'center' }}>Kegiatan A</div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ display: 'flex', flexDirection: isMobile || isTablet? 'row' : 'column', alignItems: 'center' }}>
                  <div style={{ marginTop: '20px' }}>
                    <Image
                      src={inves}
                      style={{ width: '100%' }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div style={{ fontSize: isMobile?'16px' : '20px', marginTop: '10px', color: 'black', textAlign: 'center' }}>Kegiatan A</div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ display: 'flex', flexDirection: isMobile || isTablet? 'row' : 'column', alignItems: 'center' }}>
                  <div style={{ marginTop: '20px' }}>
                    <Image
                      src={inves}
                      style={{ width: '100%' }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div style={{ fontSize: isMobile?'16px' : '20px', marginTop: '10px', color: 'black', textAlign: 'center' }}>Kegiatan A</div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ display: 'flex', flexDirection: isMobile || isTablet? 'row' : 'column', alignItems: 'center' }}>
                  <div style={{ marginTop: '20px' }}>
                    <Image
                      src={inves}
                      style={{ width: '100%' }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div style={{ fontSize: isMobile?'16px' : '20px', marginTop: '10px', color: 'black', textAlign: 'center' }}>Kegiatan A</div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

      </div>


      <div style={{ width: '100%', backgroundColor: '#0B3C86', padding: '2%', justifyContent: 'space-between', display: 'flex' }}>
        <div style={{ width: '100%', fontSize: '13px' }}>Dapatkan update mengenai promo, trading tools, dan berita terbaru dari BAI</div>

      </div>
      <div style={{ width: '100%', backgroundColor: '#393838', padding: '2%', display: 'flex', flexDirection: isMobile || isTablet? 'column' : 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'row', width: isMobile || isTablet? '100%' : '20%', alignItems: 'center' }}>
          <Image
            src={wa}
            className='w-8 h-8'
            height={15}
            width={15}
            alt="Picture of the author"
            unoptimized
            style={{ marginRight: '2%' }}
          />
          <div style={{ fontSize: '13px', }}>+62 0000 0000 000</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: isMobile ? '5%' : isTablet ? '2%' : 0 }}>
          <Image
            src={gmail}
            className='w-8 h-8'
            height={15}
            width={15}
            alt="Picture of the author"
            unoptimized
            style={{ marginRight: '2%' }}

          />
          <div style={{ fontSize: '13px', marginRight: '5%' }}>bantengassetinvestama@gmail.com</div>
        </div>

      </div>

    </div>


  )
}
