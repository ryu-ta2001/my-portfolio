// 要素取得
const cpp = document.getElementById("cpp");
const python = document.getElementById("python");
const javascript = document.getElementById("javascript");
const skillDetail = document.getElementById("skill-detail");
const skillTitle = document.getElementById("skill-title");
const skillText = document.getElementById("skill-text");
let buttonBefore = -1;

const skills = [
  {
    title: "C++",
    text: "　もともと古くから使われてきたC言語を発展、拡張させた言語です。C言語の特徴である実行速度の速さや汎用性の高さはそのまま引き継ぎ、新たにオブジェクト指向を加え、より効率よくプログラミングできるように作られています。大学では2年時にC言語、3年後期からC++の講義がありました。",
  },
  {
    title: "Python",
    text: "　IEEEが発表した人気プログラミング言語ランキング(2022年版)でトップに輝いた言語で幅広い層から支持されてます。主な特徴として簡潔にプログラムが書けること、様々な専門分野に適した豊富なライブラリがあることがあげられます。また機械学習やデータの統計処理を得意とするためAI分野やデータサイエンスの領域では基本の言語となっています。大学1年で基礎を扱った講義があり、私が所属する研究室(自然言語処理分野)でも必須の言語です。　　※IEEEとは電気・情報工学分野における世界最大の専門家組織で工学分野における学会や標準化を行っている。",
  },
  {
    title: "JavaScript",
    text: "　ウェブページにて複雑な機能を実現できるようにするためのプログラミング言語です。HTMLとCSSから作られた静的なウェブページに動きを持たせる、フォームに入力された情報を読み取るなどブラウザとサービス間のやり取りを円滑にしてくれます。GeekSalonで勉強中。",
  },
];
const buttonOnOff = function (num) {
  if (buttonBefore === -1) {
    // はじめてボタンを押したときの処理
    skillDetail.classList.remove("hidden");
    return num;
  } else if (num === buttonBefore) {
    // 同じボタンを連続で押したとき
    skillDetail.classList.add("hidden");
    return -1;
  } else {
    return num;
  }
};
const skillLighting = function (num) {
  switch (num) {
    case 0:
      cpp.classList.add("button-lighting");
      python.classList.remove("button-lighting");
      javascript.classList.remove("button-lighting");
      break;
    case 1:
      cpp.classList.remove("button-lighting");
      python.classList.add("button-lighting");
      javascript.classList.remove("button-lighting");
      break;
    case 2:
      cpp.classList.remove("button-lighting");
      python.classList.remove("button-lighting");
      javascript.classList.add("button-lighting");
      break;
    default:
      cpp.classList.remove("button-lighting");
      python.classList.remove("button-lighting");
      javascript.classList.remove("button-lighting");
  }
};

const skillButton = function (num) {
  skillTitle.textContent = skills[num].title;
  skillText.textContent = skills[num].text;
};
cpp.onclick = function () {
  // console.log(buttonBefore);
  buttonBefore = buttonOnOff(0);
  skillLighting(buttonBefore);
  skillButton(0);
};
python.onclick = function () {
  buttonBefore = buttonOnOff(1);
  skillLighting(buttonBefore);
  skillButton(1);
};
javascript.onclick = function () {
  buttonBefore = buttonOnOff(2);
  skillLighting(buttonBefore);
  skillButton(2);
};
