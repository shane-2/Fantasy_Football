export interface DefRank {
    season: number;
    def:    Def[];
    rb:     Def[];
    wr:     Def[];
    k:      Def[];
    qb:     Def[];
    te:     Def[];
}

export interface Def {
    team:                   string;
    ranks:                  FantasyPointsAllowed;
    fantasy_points_allowed: FantasyPointsAllowed;
}

export interface FantasyPointsAllowed {
    std:  string;
    half: string;
    ppr:  string;
}

