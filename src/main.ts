import { ElectricRat } from './electricRat.js'

document.getElementById("keszites")?.addEventListener("click", () => {
  const input = document.getElementById("input") as HTMLInputElement;
  const nev = input.value.trim();

  const rat = new ElectricRat(nev, Math.ceil(Math.random() * (20 - 9) + 9), Math.ceil(Math.random() * (100 - 49) + 49));
  console.log(rat);
  }
);