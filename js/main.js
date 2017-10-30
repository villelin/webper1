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

const checkPattern = (elements) =>
{
  elements.forEach((el) =>
  {
    if (el.hasAttribute('pattern'))
    {
      console.log(el.pattern);
      const re = new RegExp(el.pattern);
      if (re.exec(el.value) == null)
      {
        el.setAttribute('style', 'border: 2px solid red');
        lomakeOK++;
      }
      else
      {
        el.setAttribute('style', '');
      }
    }
  });
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
  checkPattern(document.querySelectorAll('input'));
  if (lomakeOK === 0)
  {
    document.querySelector("form").submit();
  }
});