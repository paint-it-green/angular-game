
export class Game{

    dimension: Array<number> = [10,10];
    marginLeftOffset: number = 10;
    obstacles: Array<{step, description, type, value, icon}> = [
        { step: 1, description: "Forward 6 steps", type: "forward", value: 6, icon: "arrow_forward" },
        { step: 5, description: "Move to 10", type: "move", value: 10, icon: "zoom_out_map" },
        { step: 23, description: "Backward 5 steps", type: "backward", value: 5, icon: "arrow_backward" },
        { step: 87, description: "Lose a turn", type: "loseturn", value: 1, icon: "block" },
        { step: 95, description: "Lose 2 turns", type: "loseturn", value: 2, icon: "block" },
    ]
    
}