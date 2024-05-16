import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>自己紹介</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            大学に入学してからプログラミングを学習し始めました。授業や自主勉で何個かのプログラミング言語を触ったのですが、今年の三月のビギナーズ用のハッカソンに出てからWebページを作成するのが楽しくなり、フロントエンド中心に学習しています。Reactの基礎を学習し終えたため、今はTypeScriptを学習しています！。
          </p>
          <p>大学ではPython, Java, Cを学習し、最初の二つは二次元の図やアニメーションなどの表示をし、Cでは方程式の計算や探索などのアルゴリズムを主に学習しました。（C++もほんの少し触りました。）現在では待ちに待ったPythonでHTTPサーバーを立ててWebページを表示させる学習をしています。</p>
        </div>
        <div className="about-img">
          <Image src='/images/about.jpg' className="profile-img" width={300} height={500} alt="ビギナーズハッカソン"/>
        </div>
      </div>
    </div>
  )
}

export default About;