import { LightningElement } from 'lwc';
const DELAY=300;
export default class MovieSearch extends LightningElement {
    selectedType="";
    selectedSearch="";
    selectedPageNo="1";
    loading=false;
    delayTimeout;
   searchResult=[];
    get typeoptions() 
    {
        return [
            {label:'None',value:""},
            { label: 'Movie', value: 'movie' },
            { label: 'Series', value: 'series' },
            { label: 'Epsiode', value: 'epsiode' },
        ];
    }
    handleChange(event)
    {
       let {name,value}=event.target;
       this.loading=true;
       if(name ==="type")
       {
       this.selectedType=value;
       }
    else if(name ==="search")
    {
        this.selectedSearch=value;
    }
    else if(name ==="pageno" )
    {
        this.selectedPageNo=value;
    }

    //debouncing
    clearTimeout(this.delayTimeout);
this.delayTimeout=setTimeout(()=> {
    this.searchMovie();
},DELAY)
  
    }

    //this method will search for the entered Movie
   async searchMovie()
    {
        //https://www.omdbapi.com/?s=${this.selectedSearch}&type=${this.selectedType}&page=${this.selectedPageNo}&apikey=59e9dc75
       const url=`https://www.omdbapi.com/?s=${this.selectedSearch}&type=${this.selectedType}&page=${this.selectedPageNo}&apikey=59e9dc75`;
const res=await fetch(url);
const data= await res.json();
console.log("Movie Search Data",data);
this.loading=false;
if (data.Response === "True")
{
    this.searchResult=data.Search;
}
    }
      

}