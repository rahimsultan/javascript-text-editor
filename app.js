const bold = document.getElementById('bold')
const italic = document.getElementById('italic')
const underline = document.getElementById('underline')
const left = document.getElementById('left')
const center = document.getElementById('center')
const right = document.getElementById('right')
const justify = document.getElementById('justify')
const textTransform = document.getElementById('text-transform')
const fontSize = document.getElementById('font-size')
const color = document.getElementById('color')
const fontFamily = document.getElementById('fontFamilySelect')

const textArea = document.getElementById('text-area');

bold.addEventListener('click', function(){
    textArea.classList.toggle('font-bold');
});

italic.addEventListener('click', function(){
    textArea.classList.toggle('italic');
})
underline.addEventListener('click', function(){
    textArea.classList.toggle('underline');
})
left.addEventListener('click', function(){
    const text_left = 'left';
    textArea.style.textAlign = text_left;
})
center.addEventListener('click', function(){
    const text_center = 'center';
    textArea.style.textAlign = text_center;
})
right.addEventListener('click', function(){
    const text_right = 'right';
    textArea.style.textAlign = text_right;
})
justify.addEventListener('click', function(){
    textArea.style.textAlign = 'justify';
})
textTransform.addEventListener('change', function(){
    const text_transform = textTransform.value;
    textArea.style.textTransform = text_transform;
})
fontSize.addEventListener('input', function(){
    const font_size = fontSize.value +'px'
    textArea.style.fontSize = font_size;
})
color.addEventListener('input', function(){
    let font_color = color.value;
    textArea.style.color = font_color;
})
fontFamily.addEventListener('change', function(){
    const newFontFamily = fontFamilySelect.value;
    textArea.style.fontFamily = newFontFamily;
  });

  textArea.addEventListener('input', function(){
    let alltext = textArea.value.split(" ");
    let word = alltext.length;
    document.getElementById('word').innerText = word;
  })

  

  