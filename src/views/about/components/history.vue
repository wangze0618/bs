<template>
  <div class="history">
    <h3>历史沿革</h3>
    <p>
      尧坝古镇历史悠久，是合江最早的六大古寨和八大古镇之一。古镇在北宋黄佑年间便是川黔交通要道上的驿站，是古江阳到夜郎国的必经之道，有“川黔走廊”之称。
    </p>
    <ul>
      <li>
        汉武帝元鼎二年（前115年），设置符县，治安乐水会（今合江镇南关上），尧坝为符县属地。
      </li>
      <li>东晋穆帝永和三年（公元347年），改符县为安乐县，尧坝属安乐县。</li>
      <li></li>
      <li>南朝梁武帝（502—549年），撤安乐县置安乐戍，尧坝属安乐戍。</li>
      <li>北周保定四年（564年），撤安乐戍置合江县，尧坝属合江县。</li>
      <li>北宋皇祐（1049—1053年）年间，合江置二乡六寨，尧坝为寨首。</li>
      <li>
        北宋元丰（1078—1085）年间，合江设置二乡六寨，尧坝寨为军事要寨，居六大古寨之首。
      </li>
      <li>
        南宋嘉定（1208—1224）年间，合江划分一乡七里二十都、六寨十九集市，尧坝居白马里第13都，称为“遥坝集市”。
      </li>
      <li>清雍正七年（1729年），尧坝为合江西乡尧坝支。</li>
      <li>光绪三十二年（1906年），尧坝属合江西四区，区治驻尧坝场。</li>
      <li>民国元年（1912年），尧坝属合江县西四区尧坝乡。</li>
      <li>新中国成立后，改为尧坝镇，是合江县八大镇之一。</li>
      <li>2007年6月，国家建设部、国家文物局授予尧坝镇为中国历史文化名镇。</li>
      <li>2010年2月，尧坝古镇被评为“四川省级历史文化名街”。</li>
      <li>
        2013年5月，国务院公布了第七批全国重点文物保护单位，合江县尧坝古镇古建筑群榜上有名。
      </li>
      <li>
        2014年6月，合江县委、县政府决定将尧坝古镇创建为国家4A级旅游景区，成立了由县委书记任总指挥长的尧坝古镇创A工作指挥部，将指挥部办公室设在县旅游景区管理委员会，建立了工作定期分析、督查、考核等机制。
      </li>
      <li>
        2017年1月3日，四川旅游标准评定委员会发布公告，尧坝古镇达到国家4A级景区标准要求，批准尧坝古镇为国家4A级景区。
      </li>
    </ul>
    <div class="yaoba">
      <img src="@/assets/upload/yaoba.png" alt="" />
      <p>只因多看了你一眼，再也没能忘掉你容颜</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.history {
  .yaoba {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      border-radius: 8px;
      max-width: 60%;
      @media (max-width: 768px) {
        max-width: 90%;
      }
      @media (max-width: 576px) {
        max-width: 80%;
      }
    }
    p {
      color: #555;
      text-indent: 0;
    }
  }
  ul {
    li {
      text-align: center;
      margin-bottom: 1em;
    }
  }
  h3 {
    margin: 30px 0;
    text-align: center;
  }
  p {
    text-indent: 2em;
  }
}
</style>
