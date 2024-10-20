const close = document.querySelector('#close');
const search = document.querySelector('#search-icon');

search.onclick = () => {
    document.querySelector('#search').classList.toggle('active');
}

close.onclick = () => {
    document.querySelector('#search').classList.remove('active');
}





document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementsByClassName('popcontainer')[0];
    const loginbtn = document.getElementsByClassName('userlogin')[0];
    const loginform = document.getElementsByClassName('loginform')[0];
    const signform = document.getElementsByClassName('signform')[0];
    const loginclose = document.getElementsByClassName('close')[0];
    const signclose = document.getElementsByClassName('close1')[0];
    const openlogin = document.getElementById('closelogin');

    function openform(form) {
        popup.style.display = 'flex';
        form.style.display = 'block';
    }

    function closepopup() {
        popup.style.display = 'none';
        loginform.style.display = 'none';
        signform.style.display = 'none';
    }

    function closelogin(){
        loginform.style.display = 'none';
        signform.style.display = 'block';
    }

    loginbtn.addEventListener('click', () => openform(loginform));
    loginclose.addEventListener('click', closepopup);
    signclose.addEventListener('click', closepopup);
    openlogin.addEventListener('click', closelogin);

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closepopup();
        }
        
    });
});



const slides = document.getElementsByClassName('imageslide');
const slidesArray = Array.from(slides); 

var count = 0;
const totalSlides = slidesArray.length;


slidesArray.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const prev = () => {
    count = (count > 0) ? count - 1 : totalSlides - 1;
    slideimg();
}

const next = () => {
    count = (count < totalSlides - 1) ? count + 1 : 0;
    slideimg();
}

const slideimg = () => {
    slidesArray.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
}

// document.getElementById('prevButton').addEventListener('click', prev);
// document.getElementById('nextButton').addEventListener('click', next);

// const apikey="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
// const searchBtn = document.getElementById("search-icon-1");
// const inputText = document.getElementById("search-box");
// const recipeContainer = document.querySelector(".recipe-container");

// const fetchdata = async (query) => {
//     try {
//         const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
//         const response = await data.json();
//         console.log(responsen);
//         // You can now add code here to display the data in the recipeContainer
//     } catch (error) {
//         console.log("error");
//     }
// }

// searchBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const input = inputText.value.trim();
//     if (input) {
//         fetchdata(input);
//     }
// });
