namespace Fantasy_Football.Models
{
   

        public class PlayerDetail
        {
            public int season { get; set; }
            public Projections projections { get; set; }
        }

        public class Projections 
        {
            public QB[] QB { get; set; }
            public RB[] RB { get; set; }
            public WR[] WR { get; set; }
            public TE[] TE { get; set; }
            public K[] K { get; set; }
            public DEF[] DEF { get; set; }
            public IDP[] IDP { get; set; }
        }

        public class QB
        {
            public string playerId { get; set; }
            public string name { get; set; }
            public string team { get; set; }
            public string position { get; set; }
            public string passing_attempts { get; set; }
            public string passing_completions { get; set; }
            public string passing_yards { get; set; }
            public string passing_touchdowns { get; set; }
            public string passing_interceptions { get; set; }
            public string rushing_attempts { get; set; }
            public string rushing_yards { get; set; }
            public string rushing_touchdowns { get; set; }
            public string proj_pts { get; set; }
        }

        public class RB
        {
            public string playerId { get; set; }
            public string name { get; set; }
            public string team { get; set; }
            public string position { get; set; }
            public string rushing_attempts { get; set; }
            public string rushing_yards { get; set; }
            public string rushing_touchdowns { get; set; }
            public string fumbles { get; set; }
            public string receptions { get; set; }
            public string receiving_yards { get; set; }
            public string receiving_touchdowns { get; set; }
            public string targets { get; set; }
            public string proj_pts { get; set; }
        }

        public class WR
        {
            public string playerId { get; set; }
            public string name { get; set; }
            public string team { get; set; }
            public string position { get; set; }
            public string rushing_attempts { get; set; }
            public string rushing_yards { get; set; }
            public string rushing_touchdowns { get; set; }
            public string fumbles { get; set; }
            public string receptions { get; set; }
            public string receiving_yards { get; set; }
            public string receiving_touchdowns { get; set; }
            public string targets { get; set; }
            public string proj_pts { get; set; }
        }

        public class TE
        {
            public string playerId { get; set; }
            public string name { get; set; }
            public string team { get; set; }
            public string position { get; set; }
            public string rushing_attempts { get; set; }
            public string rushing_yards { get; set; }
            public string rushing_touchdowns { get; set; }
            public string fumbles { get; set; }
            public string receptions { get; set; }
            public string receiving_yards { get; set; }
            public string receiving_touchdowns { get; set; }
            public string targets { get; set; }
            public string proj_pts { get; set; }
        }

        public class K
        {
            public string playerId { get; set; }
            public string name { get; set; }
            public string team { get; set; }
            public string position { get; set; }
            public string field_goals_made { get; set; }
            public string field_goals_attempted { get; set; }
            public string extra_points_made { get; set; }
            public string proj_pts { get; set; }
        }

        public class DEF
        {
            public string playerId { get; set; }
            public string name { get; set; }
            public string team { get; set; }
            public string position { get; set; }
            public string fumbled_forced { get; set; }
            public string sacks { get; set; }
            public string defensive_touchdowns { get; set; }
            public string safeties { get; set; }
            public string points_allowed { get; set; }
            public string yards_allowed { get; set; }
            public string proj_pts { get; set; }
        }

        public class IDP
        {
            public string playerId { get; set; }
            public string name { get; set; }
            public string team { get; set; }
            public string position { get; set; }
            public string tackles { get; set; }
            public string assists { get; set; }
            public string sacks { get; set; }
            public string passes_defended { get; set; }
            public string fumbled_forced { get; set; }
            public string interceptions { get; set; }
            public string interception_touchdowns { get; set; }
            public string fumble_return_touchdowns { get; set; }
            public string proj_pts { get; set; }
        }


    
}
