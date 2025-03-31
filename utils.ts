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
