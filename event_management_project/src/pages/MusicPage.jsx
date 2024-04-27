import Cards from '../components/Cards'
import NavBars from '../components/NavBars';

function MusicPage() {
  return (
    <>
    <NavBars/>
    <div className='d-flex justify-content-center pt-5 mt-3'>
<Cards img={"https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?size=626&ext=jpg&ga=GA1.1.2029408618.1713867465&semt=ais/100px180"}  title={"Event Music"} text={"Audiovisual works, such as TV shows, movies ₹500"}/>

   <Cards img={"https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg"} title={"Popular Music"} text={"Sound recordings and musical compositions ₹700"}/>
   
   <Cards img={"https://media.istockphoto.com/id/1319479588/photo/the-musicians-were-playing-rock-music-on-stage-there-was-an-audience-full-of-people-watching.jpg?s=612x612&w=0&k=20&c=OrGoVzFYygF904aMkM38N_v53yyBI5D_aWkpZZhTvEY="} title={"Music Event"} text={"Dramatic works, such as plays and musicals ₹1000"}/>
</div>
</>
  );
}

export default MusicPage;