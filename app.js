
//// For terminal - node app

(async () => {

    const survey = require('./survey')
    survey.setUrl('https://raw.githubusercontent.com/Bmott1977/BIM.SurveyDemo/master/questions.json')

    console.log(await survey.run())

})()