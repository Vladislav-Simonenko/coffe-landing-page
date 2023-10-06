type FreeTimeEntry = {
  id: number;
  time: string;
};

export function getRandomTime(usedTimes: Set<string>): string {
  let hours, minutes;
  do {
    hours = String(Math.floor(Math.random() * 11) + 10).padStart(2, "0"); // Случайные часы от 10 до 20
    minutes = String(Math.floor(Math.random() * 12) * 5).padStart(2, "0"); // Генерируем минуты, кратные 5
    var time = `${hours}:${minutes}`;
  } while (usedTimes.has(time));
  usedTimes.add(time);
  return time;
}

export function generateRandomFreeTime(): FreeTimeEntry[] {
  const numberOfEntries = Math.floor(Math.random() * 20) + 5;
  const freeTime: Set<string> = new Set();

  while (freeTime.size < numberOfEntries) {
    freeTime.add(getRandomTime(freeTime));
  }

  const sortedFreeTime = [...freeTime].sort();

  const freeTimeWithIds: FreeTimeEntry[] = sortedFreeTime.map(
    (time, index) => ({
      id: index + 1,
      time: time,
    })
  );

  return freeTimeWithIds;
}

export function generateNumbersArray() {
  const numbers = [];
  for (let i = 1; i <= 20; i++) {
    numbers.push({
      id: i,
      time: String(i),
    });
  }
  return numbers;
}
