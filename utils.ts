import { split } from "sentence-splitter";

export const getNext30Days = (locale: string) => {
  const getDayWithSuffix = (day: number) => {
    if (day > 3 && day < 21) return day + "th";
    const suffixes = ["st", "nd", "rd"];
    return day + (suffixes[(day % 10) - 1] || "th");
  };

  return Array.from({ length: 31 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    const dayOfWeek = new Intl.DateTimeFormat(locale, options).format(date);
    const dayWithSuffix = getDayWithSuffix(date.getDate());
    return `${dayOfWeek} ${dayWithSuffix}`;
  });
};

export function splitParagraphIntoBlocks(
  text: string,
  numberOfBlocks: number = 4
): string[] {
  const ast = split(text);
  const sentences = ast
    .filter((node) => node.type === "Sentence")
    .map((node) => node.raw.trim());

  const totalSentences = sentences.length;
  const sentencesPerBlock = Math.ceil(totalSentences / numberOfBlocks);

  const blocks: string[] = [];

  for (let i = 0; i < numberOfBlocks; i++) {
    const chunk = sentences.slice(
      i * sentencesPerBlock,
      (i + 1) * sentencesPerBlock
    );
    if (chunk.length > 0) {
      blocks.push(chunk.join(" "));
    }
  }

  return blocks;
}
