const About = ({ jp }) => {
  return (
    <div className="about">
      <div id="about-who-section" className="about-section">
        <h3 className="about-section-header">
          {jp ? "誰ですか？" : "who am I?"}
        </h3>
        <p>
          {jp
            ? "私は、アメリカ人のプログラマーです。名前は、Sophie Debs　（ソフィー・デブズ（そのズを忘れないでください））だ。暇なときに、小さいツールを作る；もっと時間があれば、携帯アプリも作る。ソフトウェアやwebのプログラミングも好き。"
            : "I am Sophie Amity Debs, an American freelance software developer. When I have the time, I make fun little tools; when I have more time, I make mobile apps. When I have a job, or, you know, can't quite get Electron working right for some reason, I make web projects too."}
          <br />{" "}
          {jp
            ? "好み言語は、英語、Java, JavaScriptになっている。日本語、Python、C, CSS, HTMLもぜひできる。"
            : "My preferred languages are English and TypeScript! I am also fluent in Japanese, JavaScript, Java, Python, CSS, HTML, and obscure gaming lingo."}
        </p>
      </div>
      <hr />
      <div id="about-where-section" className="about-section">
        <h3 className="about-section-header">
          {jp ? "どこですか" : "where am I?"}
        </h3>
        <p>
          {jp
            ? "アメリカのカリフォルニア州出身で、今、ニューハンプシャー州のダートマス大学三年生です。しかし、アメリカの東海岸も、東京も働いたことがあるし、世界の色々な都会的な場所で暮らしてみたい。"
            : "With an amorphous concept of home in roughly San Diego (and originally from North Carolina), I am currently living on Capitol Hill in Seattle, Washington. I have worked everywhere from the East Coast to Tokyo, however, and I'm a huge fan of urban centers, so I jump at the opportunity to check out new cities around America and the world with the hard condition of public transit, and the negotiable conditions of, you know, gainful employment and good food."}
        </p>
      </div>
      <hr />
      <div id="about-why-section" className="about-section">
        <h3 className="about-section-header">
          {jp ? "どうしてですか" : "why am I?"}
        </h3>
        <p>
          {jp
            ? "私の命の理由を説明するのがちょっと難しいけど、「どうしてプログラミング」の理由はもうちょっとわかりやすいだ。その基本的な理由は、「パソコンが本当にすごい」と思ってます。 元、政治学を勉強していた生徒で、2016年に、コンピューターの授業を撮ってみようと決めた。私の人生は、その日から絶対に変わります。コンピュータの勉強は、私の人生を変われたり、世界の人々とよく話せるようになったり、そのようなことは素晴らしいですよね。だから、他の人も、私のように「コンピュータのこと習える！」のような気持ちを普及したいと思ってます。だから、ダートマス大学で、初心者のコンピュータの授業で手伝う。そして、2018年の夏に、東京の"
            : "Aside from the metaphysical implications of a question like that (talk to me about philosophy!), the reason I do what I do is I think computers are rad and I like making stuff! I entered college as a political science major, and got into computer science after taking CS 1 as a required distributive course and falling in love. CS has changed my life and given me tools to access the world, and I love that."}
          <br />
          {jp
            ? "私のコンピュータの旅の間に、たくさん小さいのツールが本当に助かりました。だから、私もそのような小さいツールを作ろうと思ってる。携帯のアプリを作るのが面白いと思うので、それも作る。携帯のNativeアプリも、React Nativeなども好き。"
            : "Lots of little tools have helped me throughout CS, and so I like making those, plus they also come to mind pretty often, as tools for my own personal use or as internal tools at where I've worked. I like making apps because I love the flexibility and all-inclusiveness of mobile devices, where you can work with the whole device easily as one package. My main concern is just 'making things people will use' and doing good for the world, so I'm flexible and just like being impactful where I can be. "}
        </p>
      </div>
      <hr />
      <div id="about-what-section" className="about-section bg-medium">
        <h3 className="about-section-header">
          {" "}
          {jp ? "そのほかに、何者ですか？" : "what else am I?"}
        </h3>
        <p>
          {jp
            ? "プログラマーや生徒の外に、私は"
            : "In addition to a software developer and a student, I'm a "}
          <a href="https://open.spotify.com/user/ft4litxmgmewyv5kmt4nwkszv">
            {jp ? "音楽のファン" : "music fan"}
          </a>
          {jp
            ? ", 哲学者, 政治活動家, ゲーマー。"
            : ", philosopher, political advocate, and gaming enthusiast."}
          <br />
          {jp
            ? "連絡すると、喜んで一緒にポケモンやスプラトゥーンしよう。"
            : "Join me in watching my "}
          <a href="https://na.op.gg/summoner/userName=challenger%20wife">
            {jp ? "" : "League"}
          </a>
          {jp
            ? ""
            : " rank progressively tumble from ranked inactivity, or join me for some ranked matches in Splatoon by adding me at Switch friend code SW-7399-3833-5004. If you're more the head-to-head type, as a former competitive Pokemon battler, I also love hashing up my old teams, if you feel like shooting me a DM and a Pokemon Showdown invitation at Zeta-X."}
        </p>
      </div>
    </div>
  );
};

export default About;
