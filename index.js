// задание 4. генерация случайных чисел
const array = [];

document.querySelector("#generate").addEventListener("click", function(event) {
    event.preventDefault();
    generateRND();
});

function generateRND(){

    const min = Math.ceil(-10);
    const max = Math.floor(10);

    for (i = 0; i < 10; i++)
    array [i] = Math.floor(Math.random() * (max - min)) + min;

    document.querySelector('#rnd').value = array;
    document.querySelector('#min').value = Math.min.apply(null,array);
    document.querySelector('#max').value = Math.max.apply(null,array);

    let sum = 0;
    let pfn = 1;

    for (i=0; i < 10; i++) {
        sum += array[i];
        pfn *= array[i];
    }

    document.querySelector('#avrg').value = sum / array.length;
    document.querySelector('#sum').value = sum;
    document.querySelector('#pfn').value = pfn;
}

// задание 3. функция форматирующая дату и выводящая в консоль лог сколько прошло времени
const formatValue = (value) => value.toString().padStart(2, '0')

const format = (date) => {
  const days = formatValue(date.getDate())
  const months = formatValue(date.getMonth() + 1)
  const years = formatValue(date.getFullYear())
  const hours = formatValue(date.getHours())
  const minutes = formatValue(date.getMinutes())
  return `${days}.${months}.${years} ${hours}:${minutes}`
}

const formatDate = (date) => {
  const currentDate = Date.now()
  const diff = currentDate - date.getTime()
  if (diff < 0) {
    console.log(format(date))
    return
  }
  if (diff < 1000 ) {
    console.log('прямо сейчас')
    return;
  } 
  if (diff < 1000 * 60) {
    console.log(`${Math.floor(diff / 1000)} сек. назад`)
    return
  }
  if (diff < 1000 * 60 * 60) {
    console.log(`${Math.floor(diff / 60000)} мин. назад`)
    return
  }
  console.log(format(date))
}

// formatDate(new Date())
formatDate(new Date(new Date().valueOf()-50000))
// formatDate(new Date('2022-06-23T18:39:00'))
// formatDate(new Date('2022-05-07T03:24:00'))