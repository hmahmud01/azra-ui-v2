import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import BreadCrumb from '../components/Misc/BreadCrumb';

export default function Home() {
  return (
      <>
        <BreadCrumb title={"Title"} />
        <div className="card">
          <p>azra Dash</p>
        </div>
      </>
      
  )
}
