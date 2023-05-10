import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

    <h1>Slot </h1>
  
  </div>
`



class Slot {
  public speed : number 
  public step : number
  public interval : any
  public domEl : HTMLElement
  public maxSpeed : number


  constructor(el : any, max : any, step : any) {
    this.speed = 0;
    this.step = step;
    this.interval = null
    this.domEl = el
    this.maxSpeed = max
  }
  // start a slot 
  public start() {
    $(this.domEl).addClass("motion")
    this.interval = setInterval(() => {
      if(this.speed < this.maxSpeed) {
        this.speed += this.speed;
        
      }

    }, 100)
  }

  // stop the slot
  stop() {
    let limit = 30 
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      if(this.speed > limit){
        this.speed -= this.step
      }
      if(this.speed <= limit) {
        // $(this.domEl).spSpeed(0)
        // $(this.domEl).spStop()
        clearInterval(this.interval)
        this.speed = 0
      }
    }, 100)
  }

  // fimd the final position of the slot when it's stopped 
  finalPos() {

  }

  // reset the slot for anothe run
  reset(){

  }
}
