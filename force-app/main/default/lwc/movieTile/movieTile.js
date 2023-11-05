import { LightningElement,api} from 'lwc';

export default class MovieTile extends LightningElement {
    @api movie;
    @api selctedMovieId;

    clickHandler(event)
    {
console.log(this.movie.imDBID);

//custom Event
const evt=new CustomEvent("selectedmovie",{
    details:this.movie.imDB});


    //Dispatch Event
    this.dispatchEvent(evt);

}
get tileSelected()
{
return this.selctedMovieId === this.movie.imDBID ? "tile selected":"tile";
}
}