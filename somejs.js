function myMove(){
  let id = null
  const elem = document.getElementById("animate")
  let pos = 0
  clearInterval(id)
  id = setInterval(frame,5)
  function frame(){
    if (pos== 350){
      clearInterval(id)
    } else {
      pos++
      elem.style.top = pos + "px"
      elem.style.left = pos + "px"
    }
  }
}

function changeText(ik){
  ik.innerHTML = "oops"
}

function upperCase(){
  const x = document.getElementById("sumName")
  x.value = x.value.toUpperCase()
}

function mOver(obj) {
  obj.innerHTML = "hehe mudafucka" 
  obj.style.backgroundColor = "#1ec5e5"
}

function mOut(obj) {
  obj.innerHTML = "mouse over me"
  obj.style.backgroundColor = "#D94A38"
}

document.getElementById("demo1").innerHTML = "<p>Hello mudafucka</p>"

function closeWin(){
  alert("You gay ")
}

x = "olllaa"
document.getElementById("olla").innerHTML = x