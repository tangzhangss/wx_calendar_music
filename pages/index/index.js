//index.js
//获取应用实例
const app = getApp()
const config = require("../../utils/config.js");

const WEEK = [
  "日","一","二","三","四","五","六"
]
const MONTH=[
  "一", "二", "三", "四", "五", "六","七","八","九","十","十一","十二"
]
const DAY=[
  "零","一", "二", "三", "四", "五", "六", "七", "八", "九", "十",
  "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
  "二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一"
]

Page({
  data: {
    title: "",
    status: 1,//1 播放中  2暂停
    timeShow: "",
    time: "",
    answerShow:false,
    audios:[],
    contents:[],
    backimgs:[],
    previndex:1,//滑动时记录_上一个变化的index_ 未滑动 也表示当前current
    backimg:"",
    timearray:[],
    answers:[],//问卷题目
    myAnswer:[],//我的回答
    myScore:''//我的分数
  },
  answerShow:function(){

    this.setData({
      answerShow: this.data.answerShow?false:true
    })
  },
  radioChange:function(e){
    
    let index = e.currentTarget.dataset.index;
    let i = e.detail.value;
   
    let temp = {
      question:index,
      answer:i
    }
    this.data.myAnswer[index] = temp;
  },
  submit:function(e){
    let answer = this.data.myAnswer;

    if (answer.length != this.data.answers.length){
      wx.showToast({
        title: '每一项都需要选择',
        icon:"none"
      })
      return false;
    }
    //计算分数
    let score = 0;
    answer.forEach((val,index)=>{
        score += this.data.answers[val.question].options[val.answer].score;
    })
    //保存
    
    //1.将myanswer放入缓存
    wx.setStorageSync("myAnswer", answer);
    wx.setStorageSync("myScore", score);
    //2.g更新当前myanswer和分数
    this.setData({
      myScore: score,
      myAnswer: answer
    })
  },
  pauseAudio: function (e) {
    console.log("暂停...");
    wx.pauseBackgroundAudio();
    this.setData({
      status: 2
    })
  },
  newAnswer:function(){
     //清控缓存
    wx.removeStorageSync("myAnswer");
    wx.removeStorageSync("myScore");
    //2.g更新当前myanswer和分数
    this.setData({
      myScore: "",
      myAnswer: []
    })
  },
  //更换时间
  bindPickerChange:function(e){
    let val = this.data.timearray[e.detail.value];
    //字符串提取出来数字
    let v = val.slice(0,-2);
    let time = parseInt(v)*60;
    this.setData({
      time: time,
      timeShow: this.doSecondFormat(time),
    })

  },
  backCurrent:function(){
    this.init();
    this.setData({
      previndex:1
    })
  },
  //滑动
  bindchange:function(e){
    let index = e.detail.current;
    let objs = this.data.objs; 

   if(index == 0){
     if(this.data.previndex == 1){
        let obj2 = {
          date: this.currentDateFormat(new Date().setDate(objs[index].date.num - 1)),
          audio: this.getRandomAudio(),
          content: this.getRandomContent()
        };
       objs[2] = obj2;
     } else if (this.data.previndex == 2){
       let obj1 = {
         date: this.currentDateFormat(new Date().setDate(objs[index].date.num + 1)),
         audio: this.getRandomAudio(),
         content: this.getRandomContent()
       };
       objs[1] = obj1;
     }  
   } else if (index == 1){
     if(this.data.previndex == 2){
       let obj0 = {
         date: this.currentDateFormat(new Date().setDate(objs[index].date.num - 1)),
         audio: this.getRandomAudio(),
         content: this.getRandomContent()
       };
       objs[0] = obj0;
     } else if (this.data.previndex == 0){
       let obj2 = {
         date: this.currentDateFormat(new Date().setDate(objs[index].date.num + 1)),
         audio: this.getRandomAudio(),
         content: this.getRandomContent()
       };
       objs[2] = obj2;
     }
   } else if (index == 2) {
      if(this.data.previndex == 0){
         let obj1 = {
          date: this.currentDateFormat(new Date().setDate(objs[index].date.num - 1)),
          audio: this.getRandomAudio(),
          content: this.getRandomContent()
         };
        objs[1] = obj1;
      } else if (this.data.previndex == 1) {
        let obj0 = {
          date: this.currentDateFormat(new Date().setDate(objs[index].date.num + 1)),
          audio: this.getRandomAudio(),
          content: this.getRandomContent()
        };
        objs[0] = obj0;
      }
    
   } 
    this.setData({
      objs: objs,
      previndex:index,
      backimg: this.getRandomBackimgs()
    })
  },
  playAudio: function (e) {
    console.log("播放....");
    //如果当前时间没有了——去系统默认定时时间
    let time = this.data.time;
    if (time <= 0) {
      time = config.getVoice.default_time;
      this.setData({
        time: time,
        timeShow: this.doSecondFormat(time),
      })
    }
    this.setData({
      status: 1
    })
    wx.getBackgroundAudioManager().play({
      success: function (res) {
        console.log(res)
      }
    });
    setTimeout(() => {
      this.onShow();
    }, 1000)
  },

  onLoad: function () {
    wx.showLoading({
      title: '加载中....',
    })
    this.data.backimgs = config.getVoice.backimgs;
       this.setData({
         audios: config.getVoice.audios,
         contents: config.getVoice.contents,
         backimgs: config.getVoice.backimgs,
         timearray: config.getVoice.timearray,
         answers: config.getVoice.answers,
         myAnswer: wx.getStorageSync("myAnswer") || [],
         myScore: wx.getStorageSync("myScore"),
         time: config.getVoice.default_time,
         timeShow: this.doSecondFormat(config.getVoice.default_time),
         loaded:false,
         backimg: this.getRandomBackimgs()
       })
        this.init();
        // let audio = obj.audio;
        // //播放指定音乐
        // this.playBackgroundAudio(audio);
  },
 getRandomAudio:function(){
   return this.data.audios[Math.round(Math.random() * (this.data.audios.length - 1))];
 },
  getRandomContent: function () {
    return this.data.contents[Math.round(Math.random() * (this.data.contents.length - 1))];
  },
  getRandomBackimgs: function () {
    return this.data.backimgs[Math.round(Math.random() * (this.data.backimgs.length - 1))];
  },
  init:function(){
       let objs = [];
       let currentDate = new Date().getDate();//当前日期天数
       /**
        * 初始化日期对象 3. 天
        */
       let dateObj = [];
       for (let i = currentDate - 1; i <= currentDate+1;i++){
         let obj = {
           date: this.currentDateFormat(new Date().setDate(i)),
           audio: this.getRandomAudio(),
           content: this.getRandomContent()
         }

         objs.push(obj);
       }
       console.log(objs);

      this.setData({
        loaded:true,
        objs: objs
      })
      wx.hideLoading();
  },

  currentDateFormat:function(date){
      
    let tempdate = new Date(date);
     
    let day = tempdate.getDate();//好多号
    let month = tempdate.getMonth();//月份。。。不用+1  自有判断
    let week = tempdate.getDay();//周
    console.log("d:",day,"m:", month+1,"w:",week);
     return {
       num: day,
       week: WEEK[week],
       month: MONTH[month],
       day: DAY[day]
     }
  },

  playBackgroundAudio: function (audio) {
    //播放一个音乐
    wx.playBackgroundAudio({
      dataUrl: audio.dataUrl,
      title: audio.title,
      success(res) {
        console.log("播放成功...", res);
      },
      fail(res) {
        console.log("播放失败", res);
      }
    })
  },

  doSecondFormat(second) {
    let m = parseInt(parseInt(second) / 60);
    let s = parseInt(second) % 60;
    let gap1 = m >= 10 ? '' : '0';
    let gap2 = s >= 10 ? ':' : ':0';
    let res = gap1 + m + gap2 + s;
    return res;
  },
  //负责实时监控音乐的播放状态
  //主要：要时间改变
  onShow: function () {
    let time = this.data.time;
    //当time<=0时 结束播放
    if (time <= 0) {
      wx.stopBackgroundAudio();
      this.setData({
        status: 2
      })
      return false;
    }
    //否则继续
    time = time - 1;
    this.setData({
      time: time,
      timeShow: this.doSecondFormat(time)
    })

    setTimeout(() => {
      //暂停的时候终端此方法
      if (this.data.status == 1) {
        this.onShow();
      }
    }, 1000)
    // // wx.getBackgroundAudioPlayerState({
    // //   success:function(res){
    // //        console.log(res);
    // //   },complete:function(res){
    // //        setTimeout(()=>{
    // //             that.onShow();
    // //        },1000)
    // //   }
    // })
  }
})
