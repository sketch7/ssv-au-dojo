import {utils} from "ssv-core";

let name = utils.string.interpolate("name=:name", { name: "Chiko" });
let mathResult = utils.math.add(1, 4);
console.log(`[main] name=${name} ; mathResult=${mathResult}`);