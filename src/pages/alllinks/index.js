import React, { Component } from 'react';
import Title from '../parts/title';
import Footer from '../parts/footer.js';

export default class AllLinks extends Component {

  render() {
    return (
      <div className="main">
        <div className="section">
          <Title title="リンク" />
          <div className="links__contents">
            <div className="links__content">
              <p className="links__headline" id="01">観光</p>
              <p className="links__name"><a className="links__link" href="http://www.kiyomizudera.or.jp/">清水寺</a></p>
              <p className="links__name"><a className="links__link" href="http://www.marumasu-nishimuraya.co.jp/">丸益西村屋</a></p>
              <p className="links__name"><a className="links__link" href="http://www2.city.kyoto.lg.jp/bunshi/kmma/">京都市美術館</a></p>
              <p className="links__name"><a className="links__link" href="http://www.hankyu.co.jp/area_info/arashiyama-navi/course.html">嵐山のお散歩コース｜嵐山なび｜阪急電鉄</a></p>
              <p className="links__name"><a className="links__link" href="https://kanko.city.kyoto.lg.jp/detail.php?InforKindCode=1&ManageCode=3000071">京都観光Navi：渡月橋 - 京都観光オフィシャルサイト 京都観光Navi</a></p>
              <p className="links__name"><a className="links__link" href="http://www.tenryuji.com/">天龍寺</a></p>
              <p className="links__name"><a className="links__link" href="http://www.gion.or.jp/">祇園</a></p>
            </div>
            <div className="content" id="02">
              <p className="links__headline">お食事処</p>
              <p className="links__name"><a className="links__link" href="http://kyoto-izama-web.com/">居様</a></p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
