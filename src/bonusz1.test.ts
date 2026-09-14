import { expect, test } from 'vitest'
import { ElectricRat } from './electricRat.js'

test('errort dob nevhiany miatt', () => {
    expect(() => new ElectricRat("", 10, 100)).toThrow("Nem lehet ures a nev");
});

test('jol mukodik', () => {
    const rat = new ElectricRat("Sparky", 10, 100);
    expect(rat.name).toBe("Sparky");
    expect(rat.atk).toBe(10);
    expect(rat.hp).toBe(100);
});