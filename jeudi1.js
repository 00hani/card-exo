import { counter } from "./jeudi.js";
import { Card } from "./card.js";
import { questions } from "./data.js";

for (let index = 0; index < 10; index++) {
  counter();
}

questions.map((question) => Card(question));
