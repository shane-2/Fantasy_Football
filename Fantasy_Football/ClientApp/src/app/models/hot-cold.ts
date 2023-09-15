
    export interface HotCold {
        most_added:   Most[];
        most_dropped: Most[];
    }
    
    export interface Most {
        playerId: string;
        name:     string;
        team:     string;
        position: Position;
    }
    
    export enum Position {
        Def = "DEF",
        K = "K",
        Qb = "QB",
        Rb = "RB",
        Te = "TE",
        Wr = "WR",
    }

