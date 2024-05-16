// components/Hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container" style={{height: 500}}>
      <Image src='/images/profile.jpg' className="profile-img" width={400} height={400} alt="Joe's personal headshot" />
      <div className="hero-text">
        <div>
          <p>名前：西　葵斗</p>
          <p>生年月日：2003年8月27日</p>
          <p>学生：関西学院大学 工学部 情報工学課程</p>
          <p>Webエンジニア(フロント)</p><br />

        </div>
        <div className="social-icons">
          <a
            href="https://twitter.com/AO25255"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/aya0620a"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;