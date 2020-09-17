import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import ArraySize from './Components/ArraySize';
import { getMergeSortAnimations, bubbleSort , InsertionSort , quickSorter } from './Components/sortingAlgorithms';

const ANIMATION_SPEED = 10 ;


function App() {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(null);

  function InitializeArray(x) {
    array.splice(0, array.length);

    for (let i = 0; i < x; i++) {
      array.push(Math.ceil(Math.random() * 690 + 10));
    }

    setArray([...array]);

    const arrayBars = document.getElementsByClassName('array-bar') ;
    

    for( let i = 0 ; i< arrayBars.length ; i++ ){
         

           arrayBars[i].style.backgroundColor = 'pink' ;
      

    }

  }

  useEffect(() => {
    let x = 130;

    InitializeArray(x);
  }, []);

  function getClearAnimation(array , cnt ) {
  

    let BarStyle = null;



    for (let i = 0; i < array.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');


      setTimeout( () => {

        console.log('this is the set timeout thing') ;
        BarStyle = arrayBars[i] ;
        BarStyle.style.backgroundColor = 'purple';
        BarStyle = arrayBars[i];

      } , cnt + 10*i ) ;



    }
  }

  function doingAnimation(animations ,flag ){

    const arrayBars = document.getElementsByClassName('array-bar');

    let cnt = 0 ;

    for (let i = 0; i < animations.length; i++) {


      const isColorChange = i % 3 !== 2;
      

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? 'turquoise' : 'pink';
        cnt += ANIMATION_SPEED * i ;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;

        }, ANIMATION_SPEED * i);
      } else {

        if( flag === 1 ){
       


          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            cnt += ANIMATION_SPEED * i ;

            if( i === array.length - 1 ){

              getClearAnimation(array , cnt) ;

            }

          }, ANIMATION_SPEED * i);

        }else {



          console.log( ' inside the other three algorithms adflsjkldasfjljadsfl' )
          setTimeout(() => {
            cnt += ANIMATION_SPEED * i ;
            const [barOneIdx, barTwoIdx , newHeight1 , newHeight2] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.height = `${newHeight1}px`;
            barTwoStyle.height = `${newHeight2}px`;

            if( i === array.length - 1 ){

              getClearAnimation(array , cnt) ;

            }


          }, ANIMATION_SPEED * i);



        }


      }

      

    }

    console.log( 'time taken in milliseconds is' ,cnt  )
    
     getClearAnimation(array, cnt/400 );

  }

  function doMergeSort() {
    console.log('please do the merge sort animations');

  

    const animations = getMergeSortAnimations(array);
    const flag = 1 ;

    doingAnimation(animations , flag ) ;
  


  }

   const bubbleSorter = () => {

    console.log('bubble sort called') ;

     const animations = bubbleSort(array) ;

     const flag = 0 ;

     doingAnimation(animations , flag ) ;


   }

   const InsertionSorter = () =>{

    const animations = InsertionSort(array) ;
    const flag = 0 ;  
    doingAnimation(animations , flag ) ;


   }

   function quickSorterHelper(){

    const animations = quickSorter(array) ;
    doingAnimation(animations) ;
    console.log('this project was pretty long') ;

   }

  return (
    <div className="App">
      <div className="array-container rotate">
        {array.map((ele, idx) => (
          <div key={idx} className="array-bar" style={{ height: ele }}>
            {' '}
          </div>
        ))}
      </div>

      <div className="button-holder">
        <button className = "genrateNewArray btn"  onClick={() => InitializeArray(130)}>Genrate New Array</button>
        <button className = "mergeSort btn" onClick={() => doMergeSort()}>Merge Sort</button>
        <button className = "" onClick = { () => bubbleSorter() } className = "bubble-sort btn" >Bubble sort</button>
        <button className = "" onClick = { () => quickSorterHelper() } className = "Quick-sort btn">Quick Sort</button>
        <button className = "" onClick = { () => InsertionSorter(array)  } className = "Insertion-sort btn">Insertion Sort</button>
      </div>
    </div>
  );
}

export default App;
