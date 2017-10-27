document.querySelector("#sub").addEventListener('click', (evt) => {
  let fail = false;

  const etunimi = document.querySelector("#etunimi");
  const sukunimi = document.querySelector("#sukunimi");
  const email = document.querySelector("#email");
  const puhelin = document.querySelector("#puhelin");
  const posti = document.querySelector("#posti");
  const salasana = document.querySelector("#salasana");

  const email_re = new RegExp('^\\S+@\\S+\\.\\S+$');
  const puhelin_re = new RegExp('^\\+\\d+$');
  const posti_re = new RegExp('^\\d{5}$');

  etunimi.style.backgroundColor = "white";
  etunimi.style.color = "black";
  sukunimi.style.backgroundColor = "white";
  sukunimi.style.color = "black";
  email.style.backgroundColor = "white";
  email.style.color = "black";
  puhelin.style.backgroundColor = "white";
  puhelin.style.color = "black";
  posti.style.backgroundColor = "white";
  posti.style.color = "black";
  salasana.style.backgroundColor = "white";
  salasana.style.color = "black";


  if (etunimi.value.length == 0)
  {
    etunimi.style.backgroundColor = "red";
    etunimi.style.color = "white";
    fail = true;
  }
  else if (sukunimi.value.length == 0)
  {
    sukunimi.style.backgroundColor = "red";
    sukunimi.style.color = "white";
    fail = true;
  }
  else if (email.value.length == 0 || email_re.exec(email.value) == null)
  {
    email.style.backgroundColor = "red";
    email.style.color = "white";
    fail = true;
  }
  else if (puhelin.value.length == 0 || puhelin_re.exec(puhelin.value) == null)
  {
    puhelin.style.backgroundColor = "red";
    puhelin.style.color = "white";
    fail = true;
  }
  else if (posti.value.length == 0 || posti_re.exec(posti.value) == null)
  {
    posti.style.backgroundColor = "red";
    posti.style.color = "white";
    fail = true;
  }
  else if (salasana.value.length == 0)
  {
    salasana.style.backgroundColor = "red";
    salasana.style.color = "white";
    fail = true;
  }

  if (fail)
  {
    evt.preventDefault();
  }
});