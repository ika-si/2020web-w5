const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '華氏32度の冬になりました。45kgの私は:insertx: に :inserty: へ遊びに行きました。:insertz: に出会って驚きました。';
let insertX = ['クリスマス','大晦日','正月'];
let insertY = ['ディズニーランド','リナワールド','USJ'];
let insertZ = ['コロナ','雪の妖精','ガースー'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('私',name);
  }

  if(document.getElementById("ja").checked) {
    const weight = 50 + 'kg';
    const temperature =  '摂氏'+ 0 + '度';
    newStory = newStory.replace('華氏32度',temperature);
    newStory = newStory.replace('45kg',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
