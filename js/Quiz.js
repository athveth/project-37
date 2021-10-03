class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }
  
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    //write code to change the background color here
    background("cyan")
    //write code to show a heading for showing the result of Quiz
     textSize(30)
     text("Result:",300,50)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()
    if(allContestant!==undefined){
      var ypos = 220
      fill("black")
      textSize(20)
      text("contestant who answered correctlty are displayed in blue color",120,230)
      for(var i in allContestant){
        var correctAnswer = "2"
        if(correctAnswer===allContestant[i].answer){
          fill("blue")
        }else
        fill("red")
        ypos+=30
        textSize(20)
        text(allContestant[i].name+":"+allContestant[i].answer,250,ypos)
      }
    }
    
    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
