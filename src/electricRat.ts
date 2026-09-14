export class ElectricRat {
    name: string;
    atk: number;
    hp: number;

    public constructor(name:string, atk:number, hp:number) {
        if (name == undefined || name == null || name == "") {
            throw new Error("Nem lehet ures a nev");
        }
        this.name = name;
        this.atk = atk;
        this.hp = hp;
    }
}

