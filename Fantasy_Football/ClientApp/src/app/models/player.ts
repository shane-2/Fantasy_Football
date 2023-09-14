export interface Player {
        season:  number;
        format:  string;
        players: PlayerElement[];
    }
    
    export interface PlayerElement {
        playerId:      string;
        name:          string;
        team:          string;
        position:      Position;
        rank:          number;
        rank_position: number;
        injury_risk:   InjuryRisk;
    }
    
    export enum InjuryRisk {
        Empty = "",
        High = "high",
        Low = "low",
        Medium = "medium",
    }
    
    export enum Position {
        Def = "DEF",
        K = "K",
        Qb = "QB",
        Rb = "RB",
        Te = "TE",
        Wr = "WR",
    }
    

