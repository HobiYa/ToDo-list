const MerrychrisDday = document.querySelector(".D-day__list");
const NewyearDday= document.querySelector(".D-day__list2");
const KoNewyearDday= document.querySelector(".D-day__list3");

function merrychris(){
  const date1 = new Date();
  const date2 = new Date("2023-12-25");
  

  const chris = date2 - date1;
  

  const chrisDay = String(Math.floor(chris / (1000 * 60 * 60 * 24)));
  MerrychrisDday.innerText = `${chrisDay}D-DAY`;

}

merrychris();
setInterval(merrychris, 1000);

function Newyear(){
  const date1 = new Date();
  const date2 = new Date("2024-01-01");

  const newyear = date2 - date1;

  const newyearDay = String(Math.floor(newyear / (1000 * 60 * 60 * 24)));
  NewyearDday.innerText = `${newyearDay}D-DAY`;
}

Newyear()
setInterval(Newyear, 1000);

function KoNewyear(){
  const date1 = new Date();
  const date2 = new Date("2024-02-10");

  const Konewyear = date2 - date1;

  const KonewyearDay = String(Math.floor(Konewyear / (1000 * 60 * 60 * 24)));
  KoNewyearDday.innerText = `${KonewyearDay}D-DAY`;
}

KoNewyear()
setInterval(KoNewyear, 1000);