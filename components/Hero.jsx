import css from '../styles/Hero.module.css'
import Image from 'next/image';
import cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'
import {UilPhone} from '@iconscout/react-unicons'
import pizza1 from '../assets/p1.jpg'
export default function Hero() {
    return(
        <div className={css.container}>
            {/* left side */}
            <div className={css.left}>
                <div className={css.cherryDiv}>
                    <span>More than Faster</span>
                    <Image src={cherry} alt="" width={40} height={25} />
                </div>
            
            <div className={css.heroText}>
                <span>Be The Fastest</span>
                <span>In Delivering</span>
                <span>
                    your <span style={{color: "var(--themeRed)"}}>Pizza</span>
                </span>
            </div>
            <span className={css.miniText}>
                Our Mission is to filling your tummy with  delicious food and with fast and free delivery
            </span>

            <button className={`btn ${css.btn}`}>
                Get Started
            </button>

            </div>
            {/* right side */}
            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="" layout="intrinsic"/>
                </div>
                <div className={css.ContactUs}>
                    <span>Contact us</span>
                    <div>
                          <UilPhone color='white' />
                    </div>
                </div>


                <div className={css.pizza}>
                    <div>
                        <Image src={pizza1} alt="" objectFit='cover' layout='intrinsic' />
                    </div>
                    <div className={css.details}>
                        <span>Italian Pizza</span>
                       <span style={{color: "var(--themeRed)"}}>$<span> 7.49</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
};
