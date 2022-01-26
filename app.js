const quiz = [
  {
    question: 'コムドットのリーダーの名前は？',
    answer: ['ひゅうが', 'ゆうた', 'あむぎり', 'やまと'],
    correct: 'やまと'
  },{
    question: 'コムドットで1番インスタのフォロワー数が多いのは？',
    answer: ['ゆうた', 'ひゅうが', 'やまと', 'ゆうま'],
    correct: 'ゆうた'
  },{
    question: 'コムドットが中学生時代、入っていた部活は？',
    answer: ['野球', 'サッカー', 'バスケ', 'テニス'],
    correct: 'バスケ'
  },{
    question: 'やまとの妹の名前は？',
    answer: ['ゆうか', 'せいら', 'とうあ', 'るな'],
    correct: 'せいら'
  },{
    question: 'ひゅうがの身長は？',
    answer: ['178cm', '185cm', '173cm', '182cm'],
    correct: '182cm'
  },{
    question: '第６回人気投票で総合優勝したのは？',
    answer: ['あむぎり', 'やまと', 'ひゅうが', 'ゆうた'],
    correct: 'ゆうた'
  },{
    question: 'コムドットの地元の友達は？',
    answer: ['かわせ', 'きうち', 'やまなか', 'とどろき'],
    correct: 'きうち'
  },{
    question: 'コムドット開設当初、ゆうたの名前は？',
    answer: ['ひるっち', 'ゆうっち', 'ゆうちん', 'ゆう'],
    correct: 'バスケ'
  },{
    question: 'ゆうまの実家で飼っている犬の名前は？',
    answer: ['ポポちゃん', 'トコちゃん', 'ロコちゃん', 'ココちゃん'],
    correct: 'ココちゃん'
  },
];

let quizNum = 0;
let score = 0;

//回答を表示
const $button = document.getElementsByTagName('button');

//クイズのセトリ
setupQuiz = () => {
  //問題文を表示
  document.getElementById('questionText').textContent = quiz[quizNum].question;
    for (let buttonIndex=0; buttonIndex < $button.length; buttonIndex++) {
      $button[buttonIndex].textContent = quiz[quizNum].answer[buttonIndex];
    }
};
setupQuiz();

//ボタンをクリックして正誤判定の処理
clickJudge = (e) => {
  if (quiz[quizNum].correct == e.target.textContent) {
    window.alert('○正解◯');
    score++;
  } else {
    window.alert('×不正解×');
  }
  quizNum++;
  if (quizNum < quiz.length) {
    setupQuiz();
  } else {
    window.alert('終了！！　正解数は'　+ score + '/' + quiz.length + 'です！')
  }
};

//ボタンをクリックして正誤判定の処理のイベント発動
for (let clickEvent=0; clickEvent < $button.length; clickEvent++) {
  $button[clickEvent].addEventListener('click', (e) => {
    clickJudge(e);
  });
};