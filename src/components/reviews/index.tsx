import Review from "./review"

function Reviews({reviews}) {

  const names = [
    "Aarav Sharma",
    "Aanya Patel",
    "Aryan Gupta",
    "Ananya Reddy",
    "Vivaan Kumar",
    "Isha Mehta",
    "Advait Deshmukh",
    "Kiara Singh",
    "Rehan Khan",
    "Diya Nair",
    "Kabir Joshi",
    "Shruti Rao",
    "Arjun Verma",
    "Meera Shah",
    "Vihaan Yadav",
    "Priya Agarwal",
    "Siddharth Bhardwaj",
    "Kavya Naidu",
    "Aiden Das",
    "Sanya Choudhury"
  ];


    const descriptions = [
        "Intelligentsia chambray tousled, kitsch Godard actually pop-up. Listicle ugh flannel tousled roof party. Tofu ethical lumbersexual cray distillery. Freegan cardigan authentic keffiyeh. Roof party keytar tousled.",
    ]

    interface StringParams{
      
    }

  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center">
        <div className="flex flex-col gap-2 w-full items-center justify-center">
            {/* <Review rating={4} description={descriptions[0]} name={"NordicMade"} date = {"August 10, 2015"} img={'bg-user'}/>
            <Review rating={4} description={descriptions[0]} name={"NordicMade"} date = {"August 10, 2015"} img={'bg-user'}/>
            <Review rating={4} description={descriptions[0]} name={"NordicMade"} date = {"August 10, 2015"} img={'bg-user'}/> */}
            {/* <Review rating={4} description={descriptions[0]} name={"NordicMade"} date = {"August 10, 2015"} img={'bg-user'}/>
            <Review rating={4} description={descriptions[0]} name={"NordicMade"} date = {"August 10, 2015"} img={'bg-user'}/> */}
            {reviews.map((review,index) => {
              // console.log("review",Math.floor(Math.random()*5+1))
                return <Review rating={Math.floor(Math.random()*4+1)} description={review} name={names[Math.floor(Math.random()*19)]} date = {"August 10, 2015"} img={'bg-user'}/>
            })}
        </div>
    </div>
  )
} 

export default Reviews