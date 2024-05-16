const PI = 3.1415; 
area = PI * radius * radius;
const radius= 5;
const plantMinSpace = 0.8;
const numberOfPlants = 20;
const maxCapacity = area / spacePerPlant;

const week1Plants = 20;
const week2Plants = 40;
const week3Plants = 80; 
 
function plantGrowthControl(weeks){}
    console.log();
    const plantCount = initialPlants * Math.pow(2, weeks)
    if(plantCount > maxCapacity *0.8) {
         console.log('week ${weeks}:prune the plants. Too many plants!');
        }else if (
            plantCount >= maxCapacity * 0.5 &&
            plantCount <= maxCapacity * 0.8
        ){
            console.log(
                "week 1: Monitor the plants. they are growing within acceptable limits"
            )
        }else {
            console.log("Week 1: Plant more. There is room for more plants");
      //week 2 growth
        }
        let plantCountWeek2= plantCountWeek1 * 2;
        if (plantCountWeek2 > maxCapacity * 0.8) {
            console.log("week 2: Prune the plants. Too many plants!");
        }else if (
         plantCountWeek2 >= maxCapacity * 0.5 &&
         plantCountWeek2 <= maxCapacity * 0.8    
        ){
           console.log (
            "WEEK 2: Monitor the plants. They are growing within acceptable limits."
           );
        }else {
            console.log("Week 2: Plant more. There is room for more plants.");
        }//calculate plant growth for week 3
        let plantcountweek3 = plantcountweek2 * 2;
         //Continuing the doubling trend
         if (plantCountWeek3 > maxCapacity * 0.8) {  console.log("Week 3: Prune the plants. Too many plants!");

         } else if (  plantCountWeek3 >= maxCapacity * 0.5 &&  plantCountWeek3 <= maxCapacity * 0.8) {  console.log(    "Week 3: Monitor the plants. They are growing within acceptable limits."  );

         } else {  console.log("Week 3: Plant more. There is room for more plants.");}
