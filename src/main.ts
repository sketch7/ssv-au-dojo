import {utils} from "ssv-core";

let name = utils.string.interpolate("name=:name", { name: "Chiko" });
let mathResult = utils.math.round(150.22, 2);
console.log(`[main] name=${name} ; mathResult=${mathResult}`);