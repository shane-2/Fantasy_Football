

    export interface PlayerDetail {
        season:      number;
        projections: Projections;
    }
    
    export interface Projections {
        QB:  Qb[];
        RB:  Rb[];
        WR:  Rb[];
        TE:  Rb[];
        K:   K[];
        DEF: Def[];
        IDP: Idp[];
    }
    
    export interface Def {
        playerId:             string;
        name:                 string;
        team:                 string;
        position:             DEFPosition;
        fumbled_forced:       string;
        sacks:                string;
        defensive_touchdowns: string;
        safeties:             string;
        points_allowed:       string;
        yards_allowed:        string;
        proj_pts:             string;
    }
    
    export enum DEFPosition {
        Def = "DEF",
    }
    
    export interface Idp {
        playerId:                 string;
        name:                     string;
        team:                     string;
        position:                 IDPPosition;
        tackles:                  string;
        assists:                  string;
        sacks:                    string;
        passes_defended:          string;
        fumbled_forced:           string;
        interceptions:            string;
        interception_touchdowns:  string;
        fumble_return_touchdowns: string;
        proj_pts:                 string;
    }
    
    export enum IDPPosition {
        Cb = "CB",
        De = "DE",
        Dt = "DT",
        LB = "LB",
        S = "S",
    }
    
    export interface K {
        playerId:              string;
        name:                  string;
        team:                  string;
        position:              KPosition;
        field_goals_made:      string;
        field_goals_attempted: string;
        extra_points_made:     string;
        proj_pts:              string;
    }
    
    export enum KPosition {
        K = "K",
    }
    
    export interface Qb {
        playerId:              string;
        name:                  string;
        team:                  string;
        position:              QBPosition;
        passing_attempts:      string;
        passing_completions:   string;
        passing_yards:         string;
        passing_touchdowns:    string;
        passing_interceptions: string;
        rushing_attempts:      string;
        rushing_yards:         string;
        rushing_touchdowns:    string;
        proj_pts:              string;
    }
    
    export enum QBPosition {
        Qb = "QB",
    }
    
    export interface Rb {
        playerId:             string;
        name:                 string;
        team:                 string;
        position:             RBPosition;
        rushing_attempts:     string;
        rushing_yards:        string;
        rushing_touchdowns:   string;
        fumbles:              string;
        receptions:           string;
        receiving_yards:      string;
        receiving_touchdowns: string;
        targets:              string;
        proj_pts:             string;
    }
    
    export enum RBPosition {
        Rb = "RB",
        Te = "TE",
        Wr = "WR",
    }
    

