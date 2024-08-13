'use client'
import Image from 'next/image'
import React from 'react'
import Navbar from '../component/navbar'

import BG from '../../../public/images/bghome.png'
import BG2 from '../../../public/images/bgbanteng.png'

import keunggulan1 from '../../../public/images/keunggulan1.png'
import keunggulan2 from '../../../public/images/keunggulan2.png'
import keunggulan3 from '../../../public/images/keunggulan3.png'
import inves from '../../../public/images/inves.png'
import visi from '../../../public/images/visi.png'
import wa from '../../../public/images/wa.png'
import gmail from '../../../public/images/gmail.png'
import icon from '../../../public/images/icon.png'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/navigation'
import { decrypt, encrypt } from '../component/enkripsi'
import { getFirestore, doc, getDocs, collection, getDoc, addDoc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import Carousel from 'better-react-carousel'
import Gap from '../component/gap'
import Input from '../component/input/input'


export default function Login() {
  const router = useRouter()
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = React.useState(window.innerWidth > 768 && window.innerWidth <= 1024);
  const [forget,setForget]=React.useState(false)

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
					<div className='box-style'>
						{
						<div className='left-box-style'>
							<div className='box-content'>
							<img src={BG} className='logo-image' ></img>
							<div className='padding-content'>
								<div style={{ display: 'grid', alignItems: 'center',marginBottom:'3%' }}>
									{/* {
										location.state === 'regis'?
										<div  style={{ fontSize:isMobile || isTablet ?28 : '2.2vw',color:'#344054'}} className="text-judul">Buat Akun Baru</div>
										: */}
										<div onClick={()=>{router.push('/cara')}} style={{ fontSize:isMobile || isTablet ?28 : '2.2vw',color:'#344054'}} className="text-judul">Login</div>
{/* 
									} */}
								</div>
								{/* {
									forget==false?
									<div
									style={{

									}}
									>

										<Gap height={15} />
										<Input onChange={(val)=>{
											console.log(val)
											setData((prev) => ({
												...prev,
												email:val.target.value
											}))
										}} type="input" id="input1" onKeyDown={(event)=>{
											console.log("isinya apa",event.key)
											if (event.key === "Enter") {
												event.preventDefault();
												document.getElementById("input2").focus();
											}
											}} placeholder="E-mail / Phone" label="E-mail / Phone"/>

										<Gap height={15} />
										<Input id="input2" type="password" onChange={(val)=>{
											setData((prev) => ({
												...prev,
												pass:val.target.value
											}))
										}} placeholder="*******" label="Password" onKeyDown={(event)=>{
											console.log("isinya apa login",event.key)
											if (event.key === "Enter") {
												handleClickBUTTON(data.email);
											}
											}} />
									
									</div>
									: */}
									<div style={{}}>
										<Gap height={15} />
										<Input onChange={(val)=>{
											console.log(val)
											// setData((prev) => ({
											// 	...prev,
											// 	email:val.target.value
											// }))
										}} type="email" placeholder="sample@gmail.com" onKeyDown={(event)=>{
											console.log("isinya apa",event.key)
											if (event.key === "Enter") {
												// handleClick();onForget()
											}
											}}
                          label="E-mail"
                          id="floatingPassword"
                          value={"test"}
                          color="gray"
                      />
									
									</div>
								{/* } */}
							</div>
							<Gap height={50} />
							{/* {
								forget==false?
								<div className='padding-content'>
										<button onClick={()=>{handleClick();loginAkun(data.email)}}
										className={'background-login'}
										ref={buttonRefsLogin}
										>
											<div style={{display:'flex'}}>
											<text className='text-judul' style={{color:'white'}}>LOGIN</text>
											</div>
										</button>
								</div>
								: */}
								<div className='padding-content'>
									<button onClick={()=>{
                    // handleClick();onForget()
                    }}
										className={'background-login'}
										// ref={buttonRefsLogin}
										>
											<div style={{display:'flex'}}>
											{/* <img src={Save} style={{width:'2.5vh',height:'2.5vh'}}></img> */}
											{/* <Gap width={'2vh'}></Gap> */}
											<text className='text-judul' style={{color:'white'}}>SUBMIT</text>
											</div>
										</button>
								</div>
							{/* } */}
								<div className="text-des box-button-text">
									<text className='text-button-before'>Don't have an account? </text>
									<text onClick={()=>{
										// navigate("/Regis");
									}} className='text-button' style={{marginLeft:'0.5%'}}>Regis Here </text>
								</div>
								<div className="text-des text-button" onClick={()=>{
									// setForget(!forget)
								}}  >{forget==false?"Forget Password?":"Login to your account"}</div>
							
							</div>	
						</div>
						}
						{
							!isTablet && !isMobile?
						<div className='background-image'>
							<img src={BG} style={{width:'32vw'}} ></img>
						</div>
						:null
						}
					</div>
    </div>


  )
}
