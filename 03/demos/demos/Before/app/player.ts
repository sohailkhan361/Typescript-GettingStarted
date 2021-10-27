/// <reference path="person.ts" />

class Player implements Person{
    name: string;
    //classes also support that ? optional property here
    age?: number;
    formatName(){
        return this.name.toUpperCase();
    }
}