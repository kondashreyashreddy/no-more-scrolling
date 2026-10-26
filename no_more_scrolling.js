//score variable
var score = 0;
var q1 = 0;
var q2 = 0;
var q3 = 0;
//home buttons
onEvent("home_start_button", "click", function( ) {
  setScreen("information");
});
onEvent("home_takequiz_button", "click", function( ) {
  setScreen("question");
});
onEvent("home_digitalnotepad_button", "click", function( ) {
  setScreen("digitalnotepad");
});
//digital notepad
onEvent("digitalnotepad_home_button", "click", function( ) {
  setScreen("home");
});
onEvent("digitalnotepad_advice_button", "click", function( ) {
  setScreen("advice");
});
onEvent("digitalnotepad_quiz_button", "click", function( ) {
  setScreen("question");
});
//information buttons
onEvent("info_continue_button", "click", function( ) {
  setScreen("advice");
});
onEvent("info_back_button", "click", function( ) {
  setScreen("home");
});
//advice buttons
onEvent("advice_continue_button", "click", function( ) {
  setScreen("question");
});
onEvent("advice_back_button", "click", function( ) {
  setScreen("information");
});
onEvent("advice_digitalnotepad_button", "click", function( ) {
  setScreen("digitalnotepad");
});
//question selections
onEvent("question_back_button", "click", function( ) {
  setScreen("advice");
});
onEvent("question_digitalnotepad_button", "click", function( ) {
  setScreen("digitalnotepad");
});
onEvent("question_option1_1", "click", function( ) {
  q1 = 0;
});
onEvent("question_option2_1", "click", function( ) {
  q1 = 0;
});
onEvent("question_option3_1", "click", function( ) {
  q1 = 0;
});
onEvent("question_option4_1", "click", function( ) {
  q1 = 1;
});
onEvent("question_option1_2", "click", function( ) {
  q2 = 1;
});
onEvent("question_option2_2", "click", function( ) {
  q2 = 0;
});
onEvent("question_option3_2", "click", function( ) {
  q2 = 0;
});
onEvent("question_option1_3", "click", function( ) {
  q3 = 0;
});
onEvent("question_option2_3", "click", function( ) {
  q3 = 0;
});
onEvent("question_option3_3", "click", function( ) {
  q3 = 1;
});
//results
onEvent("question_submit_button", "click", function( ) {
  setScreen("answers");
  if (q1 == 0) {
    score = score + 0;
    showElement("answers_question1incorrect1");
    showElement("answers_question1incorrect2");
  } else if (q1 == 1) {
    score = score + 1;
    showElement("answers_question1correct");
  } else if ((q2 == 0)) {
    score = score + 0;
    showElement("answers_question2incorrect1");
    showElement("answers_question2incorrect2");
  } else if (q2 == 1) {
    score = score + 1;
    showElement("answers_question2correct");
  } else if ((q3 == 0)) {
    score = score + 0;
    showElement("answers_question3incorrect1");
    showElement("answers_question3incorrect2");
  } else if (q3 == 1) {
    score = score + 1;
    showElement("answers_question3correct");
  }
  if (q2 == 0) {
    score = score + 0;
    showElement("answers_question2incorrect1");
    showElement("answers_question2incorrect2");
  } else if ((q2 == 1)) {
    score = score + 1;
    showElement("answers_question2correct");
  }
  if (q3 == 0) {
    showElement("answers_question3incorrect1");
    showElement("answers_question3incorrect2");
    score = score + 0;
  } else if ((q3 == 1)) {
    score = score + 1;
    showElement("answers_question3correct");
  }
});
onEvent("answers_continue_button", "click", function( ) {
  setScreen("score");
  setText("score_score", score);
  if (score == 0) {
    playSpeech("Try again", "male", "English");
  } else if ((score == 1)) {
    playSpeech("Nice, but try again", "male", "English");
  } else if ((score == 2)) {
    playSpeech("Almost perfect score! Try 1 more time!", "male", "English");
  } else if ((score == 3)) {
    playSpeech("Amazing job! Perfect score!", "male", "English");
  }
});
onEvent("answers_home_button", "click", function( ) {
  h();
  hideradio();
  score = 0;
  setText("score_score", score);
  setScreen("home");
});
//score buttons
onEvent("score_retakequiz_button", "click", function( ) {
  setScreen("question");
  score = 0;
  h();
  hideradio();
});
onEvent("score_home_button", "click", function( ) {
  setScreen("home");
  score = 0;
  h();
  hideradio();
});
//hide
function h() {
  hideElement("answers_question1correct");
  hideElement("answers_question1incorrect1");
  hideElement("answers_question1incorrect2");
  hideElement("answers_question2correct");
  hideElement("answers_question2incorrect1");
  hideElement("answers_question2incorrect2");
  hideElement("answers_question3correct");
  hideElement("answers_question3incorrect1");
  hideElement("answers_question3incorrect2");
  q1 = 0;
  q2 = 0;
  q3 = 0;
}
function hideradio() {
  setChecked("question_option1_1", false);
  setChecked("question_option2_1", false);
  setChecked("question_option3_1", false);
  setChecked("question_option4_1", false);
  setChecked("question_option1_2", false);
  setChecked("question_option2_2", false);
  setChecked("question_option3_2", false);
  setChecked("question_option1_3", false);
  setChecked("question_option2_3", false);
  setChecked("question_option3_3", false);
}
