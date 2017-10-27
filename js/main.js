"use strict";

let lomakeOK = 0;


const checkAttribute = (attr, elements, func) =>
{
  elements.forEach((el) =>
  {
    if (el.hasAttribute(attr))
    {
      func(el);
    }
  }
  );
};

const checkEmpty = (el) =>
{
  console.log(el);
  if (el.value.length === 0)
  {
    el.setAttribute('style', 'border: 2px solid red');
    lomakeOK++;
  }
  else
  {
    el.setAttribute('style', '');
  }
};

document.querySelector("form").addEventListener('submit', (evt) => {
  evt.preventDefault();
  lomakeOK = 0;
  checkAttribute('required', document.querySelectorAll('input'), checkEmpty);
  if (lomakeOK === 0)
  {
    document.querySelector("form").submit();
  }
});