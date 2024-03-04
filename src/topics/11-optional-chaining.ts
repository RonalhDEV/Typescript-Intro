export interface Passenger {
    name: string;
    children?: string[];

}

const passenger1: Passenger = {
    name: "Ronaldo",
}

const passenger2: Passenger = {
    name: "Consuelo",
    children: ["Nicolas", "Sofia"]
}

const returnChildrenNumber = ( passenger: Passenger): number => {

    if ( !passenger.children ) return 0

    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log( passenger2.name, howManyChildren);
    
    return howManyChildren
}

returnChildrenNumber(passenger1)