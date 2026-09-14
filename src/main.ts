import { ElectricRat } from './electricRat.js'

const ratList: ElectricRat[] = [];

document.getElementById("keszites")?.addEventListener("click", () => {
  const input = document.getElementById("input") as HTMLInputElement;
  const nev = input.value.trim();

  const rat = new ElectricRat(nev, Math.ceil(Math.random() * (20 - 9) + 9), Math.ceil(Math.random() * (100 - 49) + 49));
  ratList.push(rat);
  const lista = document.getElementById("lista");
  lista!.innerHTML = "";
  document.getElementById("csv")!.textContent = "";
  ratList.forEach((rat) => {
    const div = document.createElement("div");
    div.classList.add("kartya");

    const nevDiv = document.createElement("div");
    nevDiv.classList.add("kartya-nev");
    nevDiv.textContent = rat.name;

    const atkDiv = document.createElement("div");
    atkDiv.classList.add("kartya-atk");
    atkDiv.textContent = rat.atk.toString();

    const hpDiv = document.createElement("div");
    hpDiv.classList.add("kartya-hp");
    hpDiv.textContent = rat.hp.toString();

    div.appendChild(nevDiv);
    div.appendChild(atkDiv);
    div.appendChild(hpDiv);

    lista?.appendChild(div);
  });
  }
);

document.getElementById("export")?.addEventListener("click", () => {
  const csvElement = document.getElementById("csv");
  let text = "nev;atk;hp";
  ratList.forEach((rat) => {
    const csv = rat.toCSV();
    text += "\n" + csv;
  });
  csvElement!.textContent = text;
  let blobdtMIME =
        new Blob([text], { type: "text/csv" })
        let url = URL.createObjectURL(blobdtMIME)
    let anele = document.createElement("a")
    anele.setAttribute("download", "CsvLetoltes");
    anele.href = url;
    anele.click();
    console.log(blobdtMIME)
});