// definicion de clases


import{Cliente} from "./Cliente.js"
import {cuentaCorriente} from "./cuentaCorriente.js"

const cliente = new Cliente("Leonardo","12344455","123454656");
const cliente2 = new Cliente("Maria","13333333","1555555");

const cuentaLeonardo = new cuentaCorriente(cliente,"1","001");
const cuentaMaria = new cuentaCorriente(cliente2,"2","002");

let saldo = cuentaLeonardo.verSaldo();

saldo = cuentaLeonardo.depositoCuenta(200);

console.log(cuentaCorriente.cantidadCuentas);











