const input=document.getElementById("search-box");
const btn=document.getElementById("search-icon-1")
const container=document.querySelector(".conatiner")
const hideableSection=document.querySelectorAll(".hideable-section")
// const recipeColseBtn=document.querySelector(".recipe-colse-btn");
// const recipeDetailsContent=document.querySelector(".recipe-details-content")

// function openPopup(meal){
//     recipeDetailsContent.innerHTML=`

//         <h2>${meal.strMeal}</h2>
         
    
//     `
// }
const fetchData=async (values)=>{

    try{
        
  
    const data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${values}`);
    const data2=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${values}`);

    const reponse=await data.json();
    const respone2=await data2.json();
    // const meal=reponse.meals[0];
    // console.log(reponse);
    // console.log(respone2)

    hideableSection.forEach((s)=>{
        s.style.display = 'none';
    })

    if(reponse.meals){
        reponse.meals.forEach(meal => {
            console.log(meal)
    
            const recipeDiv=document.createElement('div');
    
            recipeDiv.classList.add("recipe");
            recipeDiv.innerHTML=`
                <img src="${meal.strMealThumb}">
                <h2>${meal.strMeal}
                <p>${meal.strArea}</p>
               
            `
            const button=document.createElement('button');
            button.textContent="View Recipe";
            recipeDiv.appendChild(button);
    
            button.addEventListener("click",()=>{
                openPopup(meal);
            })
            container.appendChild(recipeDiv);
        });
    }
    else{
        al("No meal Found");
    }

 

    if(respone2.meals){
        respone2.meals.forEach(meal=>{
            const recipeDiv=document.createElement('div');
            recipeDiv.classList.add("resipe");
            recipeDiv.innerHTML=`
            <img src="${meal.strMealThumb}">
            <h2>${meal.strMeal}
            
           
        `

        const button=document.createElement('button');
        button.textContent="View Recipe";
        recipeDiv.appendChild(button);

        container.appendChild(recipeDiv);
        })
    }

    else{
        alert("No meal found");
    }
}
catch(error){
    console.log("Error",error)
}

}
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const values=input.value.trim();

    if(values){
        fetchData(values);
    }

    else{
        alert("please Enyter Valid Input")
    }
    

    
})

