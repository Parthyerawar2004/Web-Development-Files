// let subjects = ["Science","Maths","English","Hindi","History","Geography"];
// console.log("Subjects :");
// for(let i=0 ; i<subjects.length ; i++)
// {
//     console.log(i, subjects[i]);
// }

//Nested Array in Loops.
let student = [["Abhijeet","Science",90],["Kunal","Maths",100],["Prathemesh","English",93],["Swarup","Marths",95]];
for(let i=0; i<student.length; i++)
{
    console.log(`Info of Students #${i+1}`);
    for(let j=0 ; j<student.length ; j++)
    {
        console.log(student[i][j]);
    }
}

// let heroes = [["ironman","thor","spiderman"],["superman","wonder women","flash"]];
// for(let i=0; i<heroes.length ; i++)
// {
//     console.log(i ,heroes[i]);
//     for(let j=0 ; j<heroes[i].length ; j++)
//     {
//         console.log( `j=${j}, ${heroes[i][j]}`);
//     }
// }

