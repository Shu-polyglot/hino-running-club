import Image from "next/image";

const facts = [
  ["DATE", "月の第2、第4土曜日"],
  ["TIME", "7:30〜（約1時間）"],
  ["MEET", "「ふれあい橋」集合"],
];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="日野ランニングクラブ ホーム">
          <span className="brand-mark">HRC</span>
          <span>HINO RUNNING CLUB</span>
        </a>
        <nav aria-label="ページ内ナビゲーション">
          <a href="#message">MESSAGE</a>
          <a href="#information">INFORMATION</a>
          <a className="nav-cta" href="#join">JOIN US</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo">
          <Image
            src="/images/running-main.jpeg"
            alt="大会のコースを走る日野ランニングクラブのメンバー"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 58vw"
          />
          <span className="photo-index">01 — RUN TOGETHER</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">LOCAL COMMUNITY / HINO</p>
          <h1>一緒に<br />走ろう。</h1>
          <p className="hero-lead">
            ランニングをきっかけに、<br />新しい人間関係を作りたい！！
          </p>
          <div className="hero-actions">
            <a href="#information">ランニング詳細</a>
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>

      <section className="intro-strip" aria-label="クラブの特徴">
        <p>陸上未経験歓迎</p>
        <p>一人参加OK</p>
        <p>完全無料</p>
      </section>

      <section className="message section-grid" id="message">
        <div className="section-label">
          <span>02</span>
          <p>MESSAGE</p>
        </div>
        <div className="message-main">
          <h2>いつもの日常に<br />ちょっとした刺激を</h2>
          <div className="message-photo">
            <Image
              src="/images/message.jpeg"
              alt="夜景を眺める日野ランニングクラブ代表"
              fill
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          </div>
        </div>
        <div className="message-copy">
          <p>大学生、社会人になってからは、学校や職場と家を行ったりきたりする毎日。</p>
          <p>「新しい友達が欲しい」、「新しいことに挑戦したい」</p>
          <p>そんな思いを持っている人たちが、走ることをきっかけに、人とつながれる場所を作りたいと思ったのが、この活動を始めたきっかけです。</p>
          <p>私自身、小2から高3までずっと野球をしていて大学では一人で走って大会に出たりしていました。</p>
          <p>大学4年間は約50人いるアルバイトのリーダーを務めたり、地方滞在プログラムを受けたりとそこでは学生から社会人まで、年齢も仕事も経歴も違う、いろんな人と出会いました。</p>
          <p>「そんな経験してきたんだ！」「そんな仕事してるんだ！」</p>
          <p>自分とは違う人生を歩んできた人の話は面白くて、刺激をもらえて、自分の世界も広がりました。</p>
          <p>そこで感じたのが、「人って面白いな。」ということ。</p>
          <p>だからこそ、走ることだけが目的ではなく、走ったり、話したり、ご飯を食べたりしながら、新しい友達やつながりが生まれる場所にしたい。</p>
          <p className="closing-line">走ることから、いつもの日常をちょっと変えてみませんか？</p>
        </div>
      </section>

      <section className="information" id="information">
        <div className="info-photo">
          <Image
            src="/images/bridge.jpeg"
            alt="集合場所のふれあい橋"
            fill
            sizes="100vw"
          />
        </div>
        <div className="info-panel">
          <div className="info-heading">
            <p>03 / INFORMATION</p>
            <h2>ランニング詳細</h2>
          </div>
          <div className="facts">
            {facts.map(([label, value]) => (
              <div className="fact" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="detail-grid">
            <article>
              <span>01</span>
              <h3>集合場所</h3>
              <p>「ふれあい橋」</p>
              <p>京王線高幡不動駅から徒歩8分</p>
            </article>
            <article>
              <span>02</span>
              <h3>持ち物</h3>
              <p>動ける服装</p>
              <p>飲み物</p>
            </article>
            <article>
              <span>03</span>
              <h3>その他</h3>
              <p>初心者OK</p>
              <p>1キロ7〜8分を5キロ行います。途中休憩有</p>
            </article>
          </div>
        </div>
      </section>

      <section className="join" id="join">
        <div>
          <p className="eyebrow">LET&apos;S RUN TOGETHER</p>
          <h2>優雅な朝を<br />一緒に過ごしましょう！！</h2>
        </div>
        <div className="join-card">
          <span>HOW TO JOIN</span>
          <p>参加の申込みはDMから</p>
          <small>陸上未経験歓迎 ／ 一人参加OK ／ 完全無料</small>
        </div>
      </section>

      <footer>
        <p>日野ランニングクラブ</p>
        <p>HINO / TOKYO</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
