const TRAVEL_TIME_BETWEEN_FLOORS = 10;

export default class Elevator {
  private currentFloor: number;
  private destinationFloors: number[];
  private totalTravelTime;
  private visitedFloors: number[];

  constructor(initialFloor: number, destinationFloors: number[]) {
    this.validateInput(initialFloor, destinationFloors);
    this.currentFloor = initialFloor;
    this.destinationFloors = destinationFloors;
    this.totalTravelTime = 0;
    this.visitedFloors = [initialFloor];
  }

  private validateInput(initialFloor: number, destinationFloors: number[]): void {
    [initialFloor, ...destinationFloors].forEach((floor) => {
      if (!Number.isInteger(floor)) {
        throw new Error('The elevator can only visit floors denoted by integers.');
      }
    });
  }

  private calculateTravelTime(floor: number, prevFloor = this.currentFloor): number {
    return Math.abs(prevFloor - floor) * TRAVEL_TIME_BETWEEN_FLOORS;
  }

  private visitFloor(floor: number): void {
    this.totalTravelTime += this.calculateTravelTime(floor);
    this.visitedFloors.push(floor);
    this.currentFloor = floor;
  }

  elevatorTrip(): void {
    this.destinationFloors.forEach((floor) => {
      this.visitFloor(floor);
    });
  }

  getTravelTime(): number {
    return this.totalTravelTime;
  }

  getVisitedFloors(): number[] {
    return this.visitedFloors;
  }

  printTravelReport(): void {
    console.log({
      totalTravelTime: this.getTravelTime(),
      visitedFloors: this.getVisitedFloors(),
    });
  }

  // creates elevator trip and console logs the results
  public execute(): void {
    this.elevatorTrip();
    this.printTravelReport();
  }
}

if (require.main === module) {
  try {
    const initialFloor = Number(process.argv[2]);
    const destinationFloors = process.argv.slice(3).map(Number);
    const elevator = new Elevator(initialFloor, destinationFloors);
    elevator.execute();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
