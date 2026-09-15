export class ElectricRat {
    name: string;
    atk: number;
    hp: number;

    public constructor(name:string, atk:number, hp:number) {
        if (name == undefined || name == null || name == "") {
            throw new Error("Nem lehet ures a nev");
        }
        if (atk <= 0) {
            throw new Error("Az atk nem lehet negativ vagy nulla");
        }
        if (hp <= 0) {
            throw new Error("A hp nem lehet negativ vagy nulla");
        }
        this.name = name;
        this.atk = atk;
        this.hp = hp;
    }
    public toCSV(): string {
        return `${this.name};${this.atk};${this.hp}`;
    }
}

