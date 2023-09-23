                import { LightningElement } from 'lwc';

                export default class ToDoApplication extends LightningElement {

                    taskname="";
                    taskdate=null;
                    incompletetask=[];
                    completedtask=[];
                    changeHandler(event){
                let{ name,value }=event.target;
                if(name === "taskname")
                {
                this.taskname=value;
                }
                else if(name === "taskdate")
                {
                this.taskdate=value;
                }
                }   

                resetHandler(event)
                {
                    this.taskname="";
                    this.taskdate=null;

                }
                addTaskHandler(event)
                {
                    
                    //if end date is missing populate todays date as end date
                    if(!this.taskdate)
                    {
                        this.taskdate=new Date().toISOString().slice(0,10);
                    }
                    if (this.validateTask()){
                        
                        this.incompletetask=[
                            ...this.incompletetask,
                            {
                            taskname:this.taskname,
                            taskdate:this.taskdate
                            }];
                        console.log("After adding to incompletetask:", this.incompletetask);
                        // Rest of your code
                        this.resetHandler();//calling after added into the incomplete tasks list make the taskname,date as blank
                        let sortedArray=this.sortTask(this.incompletetask);//calling to sort the incompleteitems insortingordr
                        this.incompletetask = [...sortedArray];
                        console.log("sortedArray incompletetask" , this.incompletetask);
                        }
                }

                validateTask()
                {
                let isValid=true;
                let element=this.template.querySelector(".taskname");
                //condition 1 -> Check if task is empty
                //condition 2-> Check if task not empty ,check for duplicatess
                if(!this.taskname)// Check if task is empty
                {
                    isValid=false;

                } 
                else
                {
                //if find method ,will find an item in array means it will return the first taksk item found in the array,if not found it will return undefined
                let taskItem=this.incompletetask.find(
                    (curritem)=>
                    curritem.taskname === this.taskname && 
                    curritem.taskdate === this.taskdate
                );
                if(taskItem)
                {
                isValid=false;//set isValid
                element.setCustomValidity("Task is already Available");//set error msg

                }
                }
                if(isValid)//set if all validations passed
                {
                element.setCustomValidity("");//populate no error if nothing gone wrong
                }
                element.reportValidity();//report the error
                return isValid;
                }

                sortTask(inputArr)////sorting of dates in ascending order
                {
                let sortedArray= inputArr.sort((a,b)=>{
                const dateA =new Date(a.taskdate);
                const dateB =new Date(b.taskdate);
                return dateA - dateB;
                });
                    return sortedArray;   
                    }

                    removalHandler(event){
//from incomplete task array,remove the item
//remove the item  from the incomplete item
//add the same one to the complete array
            let index=event.target.name;
            this.incompletetask.splice(index,1);
            let sortedArray=this.sortTask(this.incompletetask);//calling to sort the incompleteitems insortingordr
            this.incompletetask = [...sortedArray];
            console.log("incompletetask" , this.incompletetask);
                    }
                    completetaskHandler(event){
                        let index=event.target.name;
                        this.refreshData(index);
                    }
                    dragStartHandler(event){
                        event.dataTransfer.setData("index",event.target.dataset.item);
                        
                    }
                    allowDrop(event){
event.preventDefault();//stop default behavior and writing our own behaviour
                    }
                    dropElementHandler(event){
let index=event.dataTransfer.getData("index");
this.refreshData(index);
                   

}
refreshData(index){
    let removeItem=this.incompletetask.splice(index,1);//remove from the incomplete task
    let sortedArray=this.sortTask(this.incompletetask);//calling to sort the incompleteitems insortingordr
this.incompletetask = [...sortedArray]
    this.completedtask=[...this.completedtask,removeItem[0]];//copied the same rem elements in array and added the remove one to completed task
console.log("this.completedtask",this.completedtask);

}              
              
              
                }
