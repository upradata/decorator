import { Mixin, Mixin1, Mixin2, Mix } from './mixin';


@Mixin({ mix: [ { b: 2 }, class C { get c() { return 'c'; } } ] })
export class A {
    a: string = 'a';
}


@Mixin1({ mix: [ class C { get c() { return 'c'; } } ] })
export class A21 {
    a: string = 'a';
}


@Mixin2({
    mix: [ { b: 2 }, class C {
        get e() { return 'e'; }
        d() { console.log('heho'); return 'd'; }
    } ]
})
export class A22 {
    a: string = 'a';
}



@Mixin2({ mix: [ A21, A22 ] })
export class A23 {
    a: string = 'a';
}


@Mixin2({ mix: [ A21, A22 ], override: 'merge' })
export class A24 {
    a: string = 'a2';
    b: number = 22;
    get c() { return 'c2'; }
    d() { return 'd2'; }
}

@Mixin2({ mix: [ A21, A22 ], override: 'none' })
export class A25 {
    a: string = 'a2';
    b: number = 22;
    get c() { return 'c2'; }
    d() { return 'd2'; }
}

const a = new A23() as Mix<A23, { b: number; e: string; }, { c: string; d(): string; }>;
console.log(a.a);
console.log(a.b);
console.log(a.c);
console.log(a.e);
console.log(a.d());

console.log('A24');

const a2 = new A24() as typeof a;
console.log(a2.a);
console.log(a2.b);
console.log(a2.c);
console.log(a2.e);
console.log(a2.d());

console.log('A25');

const a3 = new A25() as typeof a;
console.log(a3.a);
console.log(a3.b);
console.log(a3.c);
console.log(a3.e);
console.log(a3.d());
