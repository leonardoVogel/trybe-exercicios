const inputBgColor = document.querySelector('#bgColor');
const inputTextColor = document.querySelector('#textColor');
const inputFontSize = document.querySelector('#fontSize');
const btnFontSizeUp = document.querySelector('#btnFontSizeUp');
const btnFontSizeDown = document.querySelector('#btnFontSizeDown');
const inputLineHeight = document.querySelector('#lineHeight');
const btnLineHeightUp = document.querySelector('#btnLineHeightUp');
const btnLineHeightDown = document.querySelector('#btnLineHeightDown');
const inputFontFamily = document.querySelector('#selectFontFamily');
const content = document.querySelectorAll('.content');

let preferencesList = {};

const loadPreferences = () => {
  let preferencesObj = JSON.parse(localStorage.getItem('preferences'));
  if (preferencesObj) {
    const preferencesKeys = Object.keys(preferencesObj);
    preferencesKeys.forEach((key) => {
      if (key === 'backgroundColor') {
        document.body.style[key] = preferencesObj[key];
      } else {
        content.forEach((element) => element.style[key] = preferencesObj[key]);
      }
    })
    preferencesList = preferencesObj;
  }
};
loadPreferences();

const savePreferences = () => {
  localStorage.setItem('preferences', JSON.stringify(preferencesList))
}

inputBgColor.addEventListener('change', () => {
  document.body.style.backgroundColor = inputBgColor.value;
  preferencesList.backgroundColor = inputBgColor.value;
  savePreferences();
});

inputTextColor.addEventListener('change', () => {
  content.forEach((element) => element.style.color = inputTextColor.value);
  preferencesList.color = inputTextColor.value;
  savePreferences();
});

inputFontSize.addEventListener('change', () => {
  content.forEach((element) => element.style.fontSize = inputFontSize.value + 'px');
  preferencesList.fontSize = inputFontSize.value + 'px';
  savePreferences();
});

btnFontSizeUp.addEventListener('click', () => { 
  let numberFontSize = +inputFontSize.value;
  numberFontSize += 1;
  inputFontSize.value = numberFontSize;
  content.forEach((element) => element.style.fontSize = inputFontSize.value + 'px');
  preferencesList.fontSize = inputFontSize.value + 'px';
  savePreferences();
})

btnFontSizeDown.addEventListener('click', () => { 
  let numberFontSize = +inputFontSize.value;
  numberFontSize -= 1;
  inputFontSize.value = numberFontSize;
  content.forEach((element) => element.style.fontSize = inputFontSize.value + 'px');
  preferencesList.fontSize = inputFontSize.value + 'px';
  savePreferences();
})

inputLineHeight.addEventListener('change', () => {
  content.forEach((element) => element.style.lineHeight = inputLineHeight.value + 'px');
  preferencesList.lineHeight = inputLineHeight.value + 'px';
  savePreferences();
});

btnLineHeightUp.addEventListener('click', () => { 
  let numberFontSize = +inputLineHeight.value;
  numberFontSize += 1;
  inputLineHeight.value = numberFontSize;
  content.forEach((element) => element.style.lineHeight = inputLineHeight.value + 'px');
  preferencesList.lineHeight = inputLineHeight.value + 'px';
  savePreferences();
})

btnLineHeightDown.addEventListener('click', () => { 
  let numberFontSize = +inputLineHeight.value;
  numberFontSize -= 1;
  inputLineHeight.value = numberFontSize;
  content.forEach((element) => element.style.lineHeight = inputLineHeight.value + 'px');
  preferencesList.lineHeight = inputLineHeight.value + 'px';
  savePreferences();
})

inputFontFamily.addEventListener('change', () => {
  content.forEach((element) => element.style.fontFamily = inputFontFamily.value);
  preferencesList.fontFamily = inputFontFamily.value;
  savePreferences();
})
