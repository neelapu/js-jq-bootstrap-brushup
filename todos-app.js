        
        var todos = ["Get fruits"];
        var input = prompt("What would you like to do?");
        var list = document.querySelector('#todo');
        // part2

        
        while(input !== "quit") {
            // handle input 
            if(input === "list") {               
               listTodo();
            } else if(input === "new") {
               addTodo();    
            } else if(input === "delete") {
               deleteTodo();
            }
            // ask again for new input
            input = prompt("What would you like to do?");

        }
        console.log("OK, YOU QUIT THE APP!");    
        
        
        function listTodo(){
            // todos.forEach(function(todo, i){
            //     console.log(i +": "+ todo);
            // });
            console.log('***********');
            todos.forEach(function(todo, i){
                console.log(i+" : "+ todo);
            });
            console.log('***********');
        }

        function addTodo(){
            // ask for new Todo
            var newTodo = prompt("Enter what to do?"); 
            // add to todos array
            todos.push(newTodo);
            console.log("Added todo");
        }
        function deleteTodo(){
            // ask for index to delete from todo list
            var index = prompt("Enter index of todo to delete");
            // delete that todo
            todos.splice(index,1);
            console.log("Deleted todo");
        }
        //part1

        // while(input !== "quit") {
        //     // handle input 
        //     if(input === "list") {
        //         console.log(todos);
        //     } else if(input === "new") {
            
        //         // ask for new Todo
        //         var newTodo = prompt("Enter what to do?"); 
        //         // add to todos array
        //         todos.push(newTodo);
        //     } 
        //     // ask again for new input
        //     input = prompt("What would you like to do?");

        // }
        // console.log("OK, YOU QUIT THE APP!");