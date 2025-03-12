export function getMonths(year: number) {
  return new Array(12)
    .fill(null)
    .map((_, index) => {
      const date = new Date(year, index + 1);

      return {
        label: new Intl.DateTimeFormat("de-DE", { month: "short" }).format(
          date,
        ),
        index: date.getMonth(),
      };
    })
    .sort((a, b) => a.index - b.index);
}

export function getDaysInMonth(year: number, month: number) {
  const daysInMonth = new Date(year, month, 0).getDate();

  return new Array(daysInMonth).fill(null).map((_, index) => index + 1);
}

export function getNormalizedDate(date: string) {
  const normalized = new Date(date);

  return new Date(
    normalized.getFullYear(),
    normalized.getMonth(),
    normalized.getDate(),
  );
}
