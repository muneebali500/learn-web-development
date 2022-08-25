// import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollecction";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList.ts";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.collection);

const charactersCollection = new CharactersCollection(`Xaayb`);
charactersCollection.sort();

console.log(charactersCollection.collection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(17);

linkedList.sort();
linkedList.print();
