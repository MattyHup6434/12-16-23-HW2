
const root = document.querySelector('#root')

   const Counter =()=>{


let countNum = 0;
  function makeElement(tag,attr_n,attr_v,content) {
    let output = document.createElement(tag)
    output.setAttribute(attr_n,attr_v)
      output.textContent = content;
    return output
  }

const updateCounter = (n) => {
  if (countNum + n < 0) {
    return;
  }
  countNum += n;
  number.textContent = countNum;
};  
const delCounter = (evt) => {
  evt.target.closest('.counter').remove();
};

  const counter = makeElement('div','class','counter','')
  const btnInc = makeElement('button','class','btn-inc','+')
  const number = makeElement('h3','class','number','0')
  const btnDec = makeElement('button','class','btn-dec','-')
  const  btnClr = makeElement('button','class','btn-clr','C')
  const btnDle = makeElement('button', 'class', 'btn-dle', 'X');
btnInc.addEventListener("click", () => updateCounter(1));
btnDec.addEventListener("click", () => updateCounter(-1));
btnClr.addEventListener("click", () => updateCounter(-countNum));

btnDle.addEventListener("click", delCounter); 

counter.append(btnInc);
counter.append(number);
counter.append(btnDec);
counter.append(btnClr);
counter.append(btnDle);
return counter
}

const btnAdd = document.querySelector('.btnAdd');
const addCounter = () => {
  root.append(Counter());
};

btnAdd.addEventListener('click', addCounter);

