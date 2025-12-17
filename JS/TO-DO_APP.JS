let todo = [];

let req =prompt("What would u like to do: ");

while(true)
{
    if(req =="quit")
    {
        console.log("Quitting the APP.");
        break;
    }
    else if(req =="list")
    {
        console.log("--------TO-DO List--------");
        for(i=0 ; i<todo.length ; i++)
        {
            console.log(i , todo[i]);
        }
        console.log("--------------------------");
    }
    else if(req =="add")
    {
        let task =prompt("Enter the task you want to add :");
        todo.push(task);
        console.log("Task added successfully.");
    }
    else if(req =="delete")
    {
        let idx = prompt("Enter the index that u want to delete :");
        todo.splice(idx,1);
        console.log("Task deleted successfully.");
    }
    else
    {
        console.log("Invalid Input!");
    }
    req =prompt("Enter ur next task: ");
}