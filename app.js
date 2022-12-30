const tahminGirBtn = document.getElementById('tahminGirBtn')
const kuraCekBtn = document.getElementById('kuraCekBtn')

function tahminGir(event) {
  event.preventDefault()
  const data = Array.from(new FormData(event.target).values())

  const isNumTrue = data.every(
    (element) => Number(element) > 0 && Number(element) < 50
  )
  const isSame = data.some((element, index) => {
    return data.indexOf(element) !== index
  })
  const isEmpty = data.some((element) => element == '')

  if (isEmpty) {
    alert('Girilmemis degerlerin var')
  }

  if (isSame) {
    alert('Ayni degerleri giremezsin')
  }

  if (!isNumTrue) {
    alert('1 ile 50 arasi degerler giriniz')
  }
  tahminGirBtn.disabled = true
  kuraCekBtn.removeAttribute('disabled')
}

function randomNumberGenerator() {
  let randomNums = []
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 49 + 1)

    if (randomNums.includes(randomNum) == false) {
      randomNums.push(randomNum)
    } else {
      i--
      continue
    }
  }
}

kuraCekBtn.addEventListener('click', () => {
  const randomNums = randomNumberGenerator()
  const formElemanlari = document.querySelectorAll('#kuraSonuclari input')

  formElemanlari.forEach((element, index) => {
    element.value = randomNums[index]
  })
})
