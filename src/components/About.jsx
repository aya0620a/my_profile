import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>自己紹介</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            開発者として、複雑な問題に対して簡潔かつ効果的なソリューションを生み出すことに常に情熱を注いできました。HTML、CSS、JavaScriptなどのウェブ技術を中心に、ソフトウェア開発の基礎をしっかりと身につけています。アプリケーションのフロントエンドとバックエンドの両方に携わり、パフォーマンスを最適化し、ユーザーエクスペリエンスを改善し、高い水準のコードを確保する方法を常に模索しています。
          </p>
          <p>これまでのキャリアを通じて、シンプルな静的ウェブサイトから複雑なエンタープライズレベルのアプリケーションまで、幅広いプロジェクトに携わってきました。React、Angular、Vue.js、Node.js、Laravelなど、さまざまな開発ツールやフレームワークの使用経験があります。常に新しい技術を学び、研究することに貪欲で、自らのスキルや知識を磨く機会を絶えず求めています。</p>
        </div>
        <div className="about-img">
          <Image src='/images/about.jpeg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;