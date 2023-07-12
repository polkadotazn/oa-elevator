import Elevator from './elevator';

test('Elevator calculates travel time correctly and logs visited floors', () => {
  const elevator = new Elevator(0, [3, 2, 4]);
  elevator.elevatorTrip();
  expect(elevator.getTravelTime()).toBe(60);
  expect(elevator.getVisitedFloors()).toEqual([0, 3, 2, 4]);

  const elevator2 = new Elevator(12, [2, 9, 1, 32]);
  elevator2.elevatorTrip();
  expect(elevator2.getTravelTime()).toBe(560);
  expect(elevator2.getVisitedFloors()).toEqual([12, 2, 9, 1, 32]);

  const elevator3 = new Elevator(3, []);
  elevator3.elevatorTrip();
  expect(elevator3.getTravelTime()).toBe(0);
  expect(elevator3.getVisitedFloors()).toEqual([3]);
});

test('Elevator throws an error if non-integers are passed', () => {
  expect(() => {
    new Elevator(7, [3.5, 2, 40]);
  }).toThrow(Error);

  expect(() => {
    new Elevator(1.5, [0, 1, 2]);
  }).toThrow(Error);

  expect(() => {
    new Elevator(20, ['x' as any, 1, 6]);
  }).toThrow(Error);
});
