export let user = "John";

function internalTest(){
    return 'internalTest';
}

export function test(){
    return internalTest();
}