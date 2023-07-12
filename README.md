To run the program:
`ts-node elevator.ts ${numbers of starting and subsequent floors}`

For example, `ts-node elevator.ts 12 2 9 1 32`

Run `npx jest` to test

Assumptions:
- Elevator script receives a list of floors separated by spaces
- The elevator has no floor limits (within the js integer range), negative or positive and can visit a virtually unlimited number of floors
- The elevator can only travel to whole integer floors
- The elevator travels to each floor in the order supplied, and no optimization takes place
- Either the elevator does not spend time on each floor, or that time is not factored into the total travel time

Future features:
- Customizable travel time between floors
- Alerting the user specifically what's wrong with their input
- Trip optimization based on floors given
- Create greater flexibility around acceptable input styles