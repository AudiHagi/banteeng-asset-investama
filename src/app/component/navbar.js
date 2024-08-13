'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import firebase from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, sendPasswordResetEmail, setPersistence, signInWithRedirect, inMemoryPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore, doc, getDocs, collection, getDoc, addDoc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
// import axios from "axios";
import { url, userServer } from '../../Constants.js'
import Link from "next/link";
// import Toast from './component/toast'

export default function Navbar({ name }) {
  const router = useRouter()
  const [mobileSetting, setMobileSetting] = React.useState(false)
  const [dataUser, setDataUser] = React.useState({})
  const [data, setData] = React.useState([{ list: 125, prov: 'Yokyakarta', url: 'https://i.postimg.cc/nzJ9DCf9/Rectangle-10.png' }, { list: 190, prov: 'Surabaya', url: 'https://i.postimg.cc/zvPf0f6j/Rectangle-12.png' }, { list: 90, prov: 'Bali', url: 'https://i.postimg.cc/PJHbTS5c/Rectangle-13.png' }, { list: 70, prov: 'Jakarta', url: "https://i.postimg.cc/pXXm3nD5/BG.png" }])




  return (
    <div className="w-full h-20 bg-transparent sticky top-0">
      <div className="container mx-auto  h-full flex justify-between items-center">
        <div class='font-extrabold'>PT Banteng Asset Investama</div>
        <div className="flex gap-x-6 text-white">
          <ul className="hidden md:flex gap-x-20">
            <li>
              <Link href="/about">
                <p class='font-extrabold'>Tentang</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p class='font-extrabold'>Produk</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p class='font-extrabold'>Berita</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p class='font-extrabold'>Kegiatan</p>
              </Link>
            </li>
          </ul>

        </div>
        <div>
          <button className="bg-white px-10 py-2 rounded-xl mr-2" style={{ color: '#0B3C86' }}>Login</button>
          <button className="px-10 py-2 rounded-xl" style={{ backgroundColor: '#0B3C86' }}>Create Account</button>
        </div>
      </div>
    </div>

  )
}
