import curry from './Images/curry.jpg'; 
import pasta from './Images/pasta.jpg'; 
import pizza from './Images/pizza.jpg'; 
import './output.css';

function tailWindCssPractice() {
  return (
    <div className='bg-gray-700 flex justify-between text-gray-400 tracking-normal pr-20 pl-7'> 
      {/* left component */}
      <div className=' pl-20 pb-30 pr-20'>
        <h3 className='mt-10  relative right-14'>
          <b className='text-green-600 text-5xl tracking-wide px-3 font-mono'>FoodIndia</b>
        </h3>
      
        <nav className=' mt-3 font-roboto relative left-10 p-3'>
          <ul><h4 className='relative left-20 text-2xl'>Home</h4></ul>
          <ul><h4 className='relative left-20 text-2xl'>About</h4></ul>
          <ul><h4 className='relative left-20 text-2xl'>Contacts</h4></ul>
        </nav>
      </div>

      {/* right component */}
      <div className=' bg-gray-600 p-8 box-content '>
        <main>
          {/* heading */}
          <header>
            <div className='flex justify-end mt-6 text-green-400 font-mono'>
              <span><h5 className='mr-8 text-2xl p-2 border-2 border-green-400 rounded-md'>Login</h5></span>
              <span><h5 className='text-2xl mr-3 p-2 border-2 border-green-400 rounded-md'>SignUp</h5></span>
            </div>

            <div className='mt-3'> 
              <h1 className='text-gray-500 tracking-wide mb-3 text-8xl font-lato'>Recipes</h1>
              <h4 className='text-xl'>For Ninjas</h4>
              <br /><br /><br />
            </div>
          </header>

          {/* text */}
          <section>
            <h2 className='tracking-normal text-gray-500 text-4xl font-lato'>Latest Recipes</h2>
          </section>
          
          {/* ImagesInARow */}
          <div className='flex mr-10 mt-3 space-x-4'>
            <span>
              <img src={pasta} className='pe-3' style={{width: "35vw", height: "30vh"}} alt="Pasta" /> 
              <h5 className='text-lg font-roboto'>Pasta</h5>           
            </span>

            <span>
              <img src={pizza} className='pe-3' style={{width: "35vw", height: "30vh"}} alt="Pizza" /> 
              <h5 className='text-lg font-roboto'>Pizza</h5>           
            </span>

            <span>
              <img src={curry} style={{width: "35vw", height: "30vh"}} alt="Curry" /> 
              <h5 className='text-lg font-roboto'>Curry</h5>           
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
