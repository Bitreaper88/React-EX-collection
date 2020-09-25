export enum Compass {
    NORTH,
    EAST,
    SOUTH,
    WEST,
}

export interface IPosition {
    x: number;
    y: number;
}

export function turnLeft(direction: Compass): Compass {
    switch (direction) {
        case Compass.NORTH: return Compass.WEST;
        case Compass.EAST: return Compass.NORTH;
        case Compass.SOUTH: return Compass.EAST;
        case Compass.WEST: return Compass.SOUTH;
    }
}

export function turnRight(direction: Compass): Compass {
    switch (direction) {
        case Compass.NORTH: return Compass.EAST;
        case Compass.EAST: return Compass.SOUTH;
        case Compass.SOUTH: return Compass.WEST;
        case Compass.WEST: return Compass.NORTH;
    }
}

export function move(direction: Compass, pos: IPosition): IPosition {
    switch (direction) {
        case Compass.NORTH: return { x: pos.x + 0, y: pos.y - 1 };
        case Compass.EAST: return { x: pos.x + 1, y: pos.y + 0 };
        case Compass.SOUTH: return { x: pos.x + 0, y: pos.y + 1 };
        case Compass.WEST: return { x: pos.x - 1, y: pos.y + 0 };
    }
}