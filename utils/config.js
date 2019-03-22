function getVoice(){
  return{
    "default_time":1200,//default  audio play  time(unit :second) 
    audios: [
      {
        dataUrl: 'https://m10.music.126.net/20190322100641/e1266869c3bef5c86d81c7428f367638/ymusic/040c/540c/525b/3fd59c6b4acf334a8773e1056980ad34.mp3',
        title: '测试播放音乐1'
      },
      {
        dataUrl: 'https://m10.music.126.net/20190322100641/e1266869c3bef5c86d81c7428f367638/ymusic/040c/540c/525b/3fd59c6b4acf334a8773e1056980ad34.mp3',
        title: '测试播放音乐2'
      },
      {
        dataUrl: 'https://m10.music.126.net/20190322100641/e1266869c3bef5c86d81c7428f367638/ymusic/040c/540c/525b/3fd59c6b4acf334a8773e1056980ad34.mp3',
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
    backimgs:[
      "/img/back/0.jpg",
      "/img/back/1.jpg",
      "/img/back/2.jpg",
      "/img/back/3.jpg",
      "/img/back/4.jpg",
    ]
  }
}
module.exports={
  getVoice: getVoice()
}