function getVoice(){
  return{
    //默认播放s时间
    "default_time":1200,//default  audio play  time(unit :second) 
    //背景音乐
    audios: [
      {
        dataUrl: 'http://webftp.bbs.hnol.net/linm/Music2/2018/04/fmzh3/04.mp3',
        title: '测试播放音乐1'
      },
      {
        dataUrl: 'http://webftp.bbs.hnol.net/linm/Music2/2018/04/fmzh3/04.mp3',
        title: '测试播放音乐2'
      },
      {
        dataUrl: 'http://webftp.bbs.hnol.net/linm/Music2/2018/04/fmzh3/04.mp3',
        title: '测试播放音乐3'
      },
    ],
    contents:[
      {
        label: "1我是标题......",
        text: "苏明玉苏明成和好 #苏明成为苏明玉打架#都挺好预告38 39（网络版）苏明玉为苏明成工作事情找到周经理，苏明成暴打侮辱明玉的人又进了派出所明玉：我是苏明成的妹妹，苏明成是个什么狗东西"
      },
      {
        label: "2我是标题......",
        text: "苏明玉苏明成和好 #苏明成为苏明玉打架#都挺好预告38 39（网络版）苏明玉为苏明成工作事情找到周经理，苏明成暴打侮辱明玉的人又进了派出所明玉：我是苏明成的妹妹，苏明成是个什么狗东西"
      },
      {
        label: "3我是标题......",
        text: "苏明玉苏明成和好 #苏明成为苏明玉打架#都挺好预告38 39（网络版）苏明玉为苏明成工作事情找到周经理，苏明成暴打侮辱明玉的人又进了派出所明玉：我是苏明成的妹妹，苏明成是个什么狗东西"
      },
    ],
    //背景图片
    backimgs:[
      "/img/back/0.jpg",
      "/img/back/1.jpg",
      "/img/back/2.jpg",
      "/img/back/3.jpg",
      "/img/back/4.jpg",
    ],
    //定时器选择 分钟_不可变
    timearray: ['2分钟', '5分钟', '10分钟', '15分钟', '20分钟', '25分钟', '30分钟'],
    //睡眠题目
    answers:[
      {
        "title": "题目一",
        options: [
          {
            question: "1ererasaer撒大大",
            score: 1
          },
          {
            question: "2三大法师法法嘎嘎地方",
            score: 1
          },
          {
            question: "32三大法师法法嘎嘎地方",
            score: 1
          },
          {
            question: "42三大法师法法嘎嘎地方",
            score: 1
          },
        ],

      },
      {
        "title": "题目二",
        options: [
          {
            question: "1..........",
            score: 1
          },
          {
            question: "2..........",
            score: 1
          },
          {
            question: "3..........",
            score: 1
          },
          {
            question: "4..........",
            score: 1
          },
        ],

      },
      {
        "title": "题目三",
        options: [
          {
            question: "1..........",
            score: 1
          },
          {
            question: "2..........",
            score: 1
          },
          {
            question: "3..........",
            score: 1
          },
          {
            question: "4..........",
            score: 1
          },
        ],

      },
      {
        "title": "题目四",
        options: [
          {
            question: "1..........",
            score: 1
          },
          {
            question: "2..........",
            score: 1
          },
          {
            question: "3..........",
            score: 1
          },
          {
            question: "4..........",
            score: 1
          },
        ],

      },
      {
        "title": "题目五",
        options: [
          {
            question: "1..........",
            score: 1
          },
          {
            question: "2..........",
            score: 1
          },
          {
            question: "3..........",
            score: 1
          },
          {
            question: "4..........",
            score: 1
          },
        ],

      },
      {
        "title": "题目六",
        options: [
          {
            question: "1..........",
            score: 1
          },
          {
            question: "2..........",
            score: 1
          },
          {
            question: "3..........",
            score: 1
          },
          {
            question: "4..........",
            score: 1
          },
        ],

      },
      {
        "title": "题目七",
        options: [
          {
            question:"1..........",
            score:1
          },
          {
            question: "2..........",
            score: 1
          },
          {
            question: "3..........",
            score: 1
          },
          {
            question: "4..........",
            score: 1
          }
        ],
      }
    ]
  }
}
module.exports={
  getVoice: getVoice()
}