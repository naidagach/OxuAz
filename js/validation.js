function validation() {
  if(titleInp.value.trim() == ''){
    titleInp.focus()
    titleInp.style.borderColor = "red"
    alert('Title xanasini doldurmaq lazimdir')
    return true
  }
  if (tinymce.get('inp2').getContent().trim() == '') {
    descInp.focus()
    descInp.style.borderColor = "red"
    alert('Metn xanasini doldurmaq lazimdir')
    return true
  }
  if (imgInp.value.trim() == '') {
    imgInp.focus()
    imgInp.style.borderColor = "red"
    alert('Img xanasini doldurmaq lazimdir')
    return true
  }
  if (dateInp.value.trim() == '') {
    dateInp.focus()
    dateInp.style.borderColor = "red"
    alert('Date xanasini doldurmaq lazimdir')
    return true
  }
  if (viewInp.value.trim() == '') {
    viewInp.focus()
    viewInp.style.borderColor = "red"
    alert('Title xanasini doldurmaq lazimdir')
    return true
  }
}